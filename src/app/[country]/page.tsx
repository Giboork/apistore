import Image from 'next/image'
import { Inter } from 'next/font/google'
import { MongoClient } from 'mongodb'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import styles from './page.module.css'
import { getDatasetCollection } from '../modules/db/connect'
import { addApiSuffix, removeApiSuffix } from '../tool/url'
import Container from '../components/container'
import NavigationBar from '../components/navigationBar'
import { truncateText } from '../tool/string'
import Technology from '../components/technology'
import { mainLanguageText } from '../tool/translate'
import { Metadata } from 'next'
import { errorLog } from '../modules/db/erroLog'
import { baseHead } from '../modules/head'
import { headers } from 'next/headers'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(a: any): Promise<Metadata> {
  const connect = await getDatasetCollection()
  const aa = await connect.findOne({
    'data.country.label_url': removeApiSuffix(a.params.country),
  })

  if (!aa) {
    return {}
  }

  return baseHead({
    title: `${aa.data.country.label} - Open Data API | API Store`,
    fullPath: `/${a.params.country}`,
  })
}

export default async function Home(a: any) {
  const connect = await getDatasetCollection()

  const aa = await connect
    .aggregate([
      {
        $group: {
          _id: '$data.catalog.publisher.name_url',
          data: { $first: '$data' },
        },
      },
      {
        $match: {
          'data.country.label_url': removeApiSuffix(a.params.country),
        },
      },
    ])
    .toArray()

  if (aa.length === 0) {
    await errorLog(404, 'url---123')
    notFound()
  }

  const getFirstLabel = () => {
    return aa[0]?.data.country?.label || ''
  }
  const links = [
    ['/', 'Home'],
    ['', `${getFirstLabel()} Data APIs`],
  ]

  return (
    <div>
      <Container className="p-0" p={0}>
        <NavigationBar links={links} />
      </Container>

      <Container>
        <h1 className=" text-center text-4xl font-bolclassNameding-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
          <span className="text-blue-500">{getFirstLabel()}</span> Open data in
          a single API request
        </h1>

        <div className="container p-6 px-0 flex w-full flex-col mt-4 items-center justify-center text-center">
          <div className="text-sm font-bold tracking-wider text-blue-600 uppercase">
            Available datasets
          </div>
          <h2 className="max-w-2xl mt-3 teclassNamel font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            {getFirstLabel()} Open data API in development
          </h2>
          <p className="max-w-2xl py-4 teclassName leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
            List of APIs we currently working on to bridge to life.
            <br /> Are you missing any? Let us know!{' '}
          </p>
        </div>

        {aa.length > 0 ? (
          <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
            {aa.map((item, index) => (
              <Link
                href={`/${a.params.country}/${
                  addApiSuffix(item.data.catalog.publisher.name_url) ?? ''
                }`}
                key={item.data.catalog.publisher.name_url}
              >
                <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
                  <p className="text-2xl leading-normal">
                    <span>
                      {truncateText(mainLanguageText(item.data.catalog.title))}{' '}
                    </span>

                    <mark className="text-blue-800 bg-blue-100 rounded-md ring-blue-100 ring-4 dark:ring-blue-900 dark:bg-blue-900 dark:text-blue-200">
                      Open Data
                    </mark>
                  </p>
                  <p className="leading-normal pt-2">
                    {truncateText(
                      mainLanguageText(item?.data?.catalog?.description || '')
                    )}{' '}
                    provided by {item.data.catalog.publisher.name || ''}
                  </p>

                  <div className="flex items-center mt-8 space-x-3">
                    <div>
                      <div className="text-lg font-medium underline">
                        {mainLanguageText(item.data.catalog.title)} Datasets
                        &gt;
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p>Array is empty</p>
        )}

        <div className="p-[100px]">
          <Technology />
        </div>
      </Container>
    </div>
  )
}

;<style />
