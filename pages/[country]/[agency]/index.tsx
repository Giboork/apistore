import { Inter } from 'next/font/google'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDatasetCollection } from '../../../src/app/modules/db/connect'
import { addApiSuffix, removeApiSuffix } from '../../../src/app/tool/url'
import TestimonialBase from '../../../src/app/components/testimonialsBase'
import Container from '../../../src/app/components/container'
import { truncateText } from '../../../src/app/tool/string'
import Pagination from '../../../src/app/components/pagination'
import AccessBlock from '../../../src/app/components/access'
import Technology from '../../../src/app/components/technology'
import { mainLanguageText } from '@/app/tool/translate'
import NavigationBar from '../../../src/app/components/navigationBar'
import { Metadata } from 'next/types'
import { baseHead } from '@/app/modules/head'
import {errorLog} from "../../../src/app/modules/db/erroLog";
// import GtmEventClient from "../../../src/app/components/gtmEvent";

const inter = Inter({ subsets: ['latin'] })


function removePageNumber(inputString: any) {
  return inputString.replace(/-page-\d+/, '');
}

// export async function generateMetadata(a: any): Promise<Metadata> {
//   const connect = await getDatasetCollection()

//   const projection = {
//     'data.catalog.title': 1
//   };

//   const aa = await connect.findOne({
//     'data.catalog.publisher.name_url': removeApiSuffix(removePageNumber(a.params.agency)),
//   }, {projection}) as any

//   if (!aa) {
//     return {}
//   }

//   return baseHead({
//     title: `${(mainLanguageText(aa.data.catalog?.title))} open data in a single API request`,
//     fullPath: `Explore ${a.params.agency} Open Data APIs at API Store. Open Data API marketplace to help developers build their applications quickly and easily.`,
//   })
// }

export default function Home(a: any) {
  const {country, limit, page} = a


  if (!country?.length) {
    // errorLog(404, `/${a.params.country}/${a.params.agency}`)
    // notFound()
    return <div>404</div>
  }

  const totalPages = country[0].data.page_total_publisher

  const firstData = country[0].data

  const title = mainLanguageText(firstData.catalog.title) as string

  const links = [
    ['/', 'Home'],
    [
      `/${addApiSuffix(firstData.country.label_url)}`,
      `${firstData.country.label} Data APIs`,
    ],
    [``, `${title}`],
  ]

  return (
    <div>
      {/* <GtmEventClient customEvent={{type: 'agency'}} /> */}
      <Container className="p-0 pb-5" p={0}>
        <NavigationBar links={links} />
      </Container>
      <div>

        <Container>
          <div className=" text-center items-center justify-center text-center">
            <h1 className=" text-center text-4xl font-bolclassNameding-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              <span className="text-blue-500">
                {title}
              </span>{' '}
              Open data in a single API request
            </h1>

            <div className="pb-10 items-center justify-center text-center leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300  ">
              <div className="max-w-3xl mx-auto text-center">
                {mainLanguageText(firstData.catalog.description)} datasets
                available on official portal for European data
              </div>
            </div>

            <AccessBlock agencyName={title} />

            <div className="container p-8 mx-classNamexl:px-0 flex w-full flex-col mt-4 items-center justify-center text-center">
              <div className="text-sm font-bold tracking-wider text-blue-600 uppercase">
                Available datasets
              </div>
              <h2 className="max-w-2xl mt-3 teclassNamel font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                Open data Portal {title} Open Data API in
                development
              </h2>

              <p className="max-w-2xl py-4 teclassName leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                With List of APIs we currently working on to bridge to life.
                <br /> Are you missing any? Let us know!
              </p>
            </div>
          </div>
        </Container>
        <Container>
          {country.length > 0 ? (
            <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
              {country.map((item: any, index: any) => (
                <TestimonialBase
                  key={index}
                  modified={item.data.issued || ''}
                  title={truncateText(mainLanguageText(item.data?.title))}
                  publisher={truncateText(
                    mainLanguageText(item.data?.description)
                  )}
                  publisherUrl={addApiSuffix(
                    item.data.catalog.publisher.name_url || ''
                  )}
                  itemUrl={`/${a.params.country}/${
                      removePageNumber(a.params.agency)
                  }/${addApiSuffix(item.data.title?.en_url)}`}
                />
              ))}
            </div>
          ) : (
            <p>Array is empty</p>
          )}
        </Container>
        <Container className="p-0 pb-5" p={0}>
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            basePath={`${a.params.country}/${removePageNumber(a.params.agency)}`}
          />
        </Container>
        <Container className="p-0 pb-5" p={0}>
          <div className="pt-[100px]">
            <Technology />
          </div>
        </Container>
      </div>
    </div>
  )
}



export const getStaticProps = async (a: any) => {
  const connect = await getDatasetCollection()
  function getPageNumber(url: any) {
    const regex = /-page-(\d+)/;
    const match = url.match(regex);

    if (match && match[1]) {
      return parseInt(match[1], 10);
    } else {
      return 1;
    }
  }

  const page = getPageNumber(a?.params?.agency)
  const limit = 100
  const startIndex = (page - 1) * limit
  const filter = {
    'data.catalog.publisher.name_url': removeApiSuffix(removePageNumber(a.params.agency)),
    'data.country.label_url': removeApiSuffix(a.params.country),
     'data.page_publisher': page
  };

  const projection = {
    'data.catalog.publisher.name_url': 1,
    'data.catalog.publisher.name': 1,
    'data.issued': 1,
    'data.title': 1,
    'data.description': 1,
    'data.catalog.modified': 1,
    'data.catalog.description': 1,
    'data.country.label': 1,
    'data.country.label_url': 1,
    'data.catalog.title': 1,
    'data.page_publisher': 1,
    'data.page_total_publisher': 1,
  };
  const country = await connect
      .find(filter, { projection })
      .limit(limit)
      .toArray() as any[]


  return { props: { country, params: a.params, limit, page } }
}


export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  }
}
