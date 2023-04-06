import {notFound} from "next/navigation";
import {getDatasetCollection} from "../../../modules/db/connect";
import {addApiSuffix, removeApiSuffix} from "../../../tool/url";
import Container from "../../../components/container";
import AccessBlock from "../../../components/access";
import Technology from "../../../components/technology";
import { mainLanguageText } from "@/app/tool/translate";
import NavigationBar from "../../../components/navigationBar";
import { formatISODate } from "@/app/tool/date";
import { Metadata } from "next/types";
import { truncateText } from "@/app/tool/string";

export async function generateMetadata(a: any): Promise<Metadata> {
    const connect = await getDatasetCollection()
    const aa = await connect.findOne({
        'data.title.en_url':  removeApiSuffix(a.params.dataset)
    })


    if(!aa) {
        return {}
    }

    const title = mainLanguageText(aa.data.title)

    return { title: `${aa.data.catalog?.publisher?.name} API - ${aa.data?.country?.label} - Open Data API | API Store`,

        description: 'Explore and preview European Open Data APIs at API.store. Our comprehensive API marketplace offers a variety of APIs to help developers build their applications quickly and easily.'
    }
}


export default async function Home(a: any) {
    const connect = await getDatasetCollection()
    const country = await connect.findOne({"data.title.en_url": removeApiSuffix(a.params.dataset) } ) as any ;

    if(!country) {
        notFound()
    }

    const firstData = country.data

    const urlCountry = `/${addApiSuffix(firstData.country.label_url)}`
    const title = mainLanguageText(country.data?.title)
    const links = [
        ['/', 'Home'],
        [ `/${addApiSuffix(firstData.country.label_url)}`, `${firstData.country.label} Data APIs`],
        [ urlCountry, `${firstData.catalog.publisher.name}`],
        [ ``, `${truncateText(title, 100)}`],
    ];



    function getLanguageLabels(langArray: any) {
        if (!Array.isArray(langArray)) {
          return
        }
        const labels = langArray.map(lang => lang.label).join(', ');
        return labels;
    }




    const urlCatalog = `https://data.europa.eu/data/datasets?catalog=${country.data.catalog?.id}&showcatalogdetails=true&locale=en`

  return (
      <div>
          <Container className="p-0 pb-5"  p={0}>
              <NavigationBar links={links} />
          </Container>

          <Container>
              <div className=" text-center items-center justify-center text-center">
                  <h1 className=" text-center text-4xl font-bolclassNameding-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                      <span className="text-blue-500">{title} </span> Open data API in a single place</h1>

                  <div className="pb-10 items-center justify-center text-center leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                      Provided by {firstData.catalog.publisher.name}

                  </div>

                  <AccessBlock agencyName={title} />

              </div>
          </Container>
          <div className="container mx-auto px-4 py-5">
              <div
                  className="container p-8 mx-classNamexl:px-0 flex w-full flex-col mt-4 items-center justify-center text-center">
                  <h2 className="max-w-2xl mt-3 teclassNamel font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">Dataset information</h2></div>

              <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800 p-4">
                  <div className="flex flex-wrap">
                      <div className="w-full md:w-[200px] mb-4 md:mb-0 font-bold">Catalog</div>
                      <div className="w-full md:w-auto md:flex-1 pl-4">
                    <a href={urlCatalog} target="_blank" className="underline text-black" >
                          {mainLanguageText(country.data.catalog?.title)}
                    </a>
                      </div>
                  </div>
                  <div className="flex flex-wrap mt-4">
                      <div className="w-full md:w-[200px] mb-4 md:mb-0 font-bold">Country of origin</div>
                      <div className="w-full md:w-auto md:flex-1 pl-4">
                        <a href={urlCountry}  className="underline text-black">
                          {country.data.country.label}
                            </a>
                      </div>
                  </div>
                  <div className="flex flex-wrap mt-4">
                      <div className="w-full md:w-[200px] mb-4 md:mb-0 font-bold">Updated</div>
                      <div className="w-full md:w-auto md:flex-1 pl-4">{formatISODate(country.data.catalog.modified, true)}</div>
                  </div>
                  <div className="flex flex-wrap mt-4">
                      <div className="w-full md:w-[200px] mb-4 md:mb-0 font-bold">Created</div>
                      <div className="w-full md:w-auto md:flex-1 pl-4">{formatISODate(country.data.catalog.issued)}</div>
                  </div>
                  <div className="flex flex-wrap mt-4">
                      <div className="w-full md:w-[200px] mb-4 md:mb-0 font-bold">Avaliable languages</div>
                      <div className="w-full md:w-auto md:flex-1 pl-4">{getLanguageLabels(country.data.catalog.language)}</div>
                  </div> <div className="flex flex-wrap mt-4">
                      <div className="w-full md:w-[200px] mb-4 md:mb-0 font-bold">Keywords</div>
                      <div className="w-full md:w-auto md:flex-1 pl-4">{getLanguageLabels(country.data.keywords)}</div>
                  </div>

                  <div className="flex flex-wrap mt-4">
                      <div className="w-full md:w-[200px] mb-4 md:mb-0 font-bold">Datasource</div>
                      <div className="w-full md:w-auto md:flex-1 pl-4">
                          <a href={country.data.resource} target="_blank" className="underline text-black" >
                              Official portal for European data link
                          </a>
                      </div>
                  </div>
                  <div className="flex flex-wrap mt-4">
                      <div className="w-full md:w-[200px] mb-4 md:mb-0 font-bold">Quality scoring</div>
                      <div className="w-full md:w-auto md:flex-1 pl-4">{country.data?.quality_meas?.scoring}</div>
                  </div>
              </div>

              <div
                  className="container pt-5 mx-classNamexl:px-0 flex w-full flex-col mt-4 items-center justify-center text-center">
                  <h2 className="max-w-2xl mt-3 teclassNamel font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">Dataset description</h2></div>

              <div className="container mx-auto px-4 py-5">
                {mainLanguageText(country.data.description)}
              </div>

              <div className="pt-80">
                  <Technology />
              </div>
          </div>
      </div>



  )
}

<style />
