import { Inter } from 'next/font/google'
import Link from 'next/link'
import {notFound} from "next/navigation";
import { getDatasetCollection} from "../../modules/db/connect";
import {addApiSuffix, removeApiSuffix} from "../../tool/url";
import TestimonialBase from "../../components/testimonialsBase";
import Container from "../../components/container";
import { truncateText} from "../../tool/string";
import Pagination from "../../components/pagination";
import {formatISODate} from "../../tool/date";
import AccessBlock from "../../components/access";
import Technology from "../../components/technology";

const inter = Inter({ subsets: ['latin'] })

export default async function Home(a: any) {

    const connect = await getDatasetCollection()

    const page = parseInt(a?.searchParams?.page || 1)
    const limit = 100
    const startIndex = (page - 1) * limit

    const country = await connect.aggregate([
        {
            $match: { 'data.catalog.publisher.name_url': removeApiSuffix(a.params.agency) }
        },
        {
            $match: { 'data.title.en': { $ne: null } }
        },
        {
            $project: {
                'data.title.en': {
                    $cond: [
                        { $ifNull: ['$data.title.en', null] },
                        '$data.title.en',
                        null
                    ]
                },
                'data.catalog.publisher.name_url': 1,
                'data.title.en_url': 1,
                'data.description.en': 1,
                'data.catalog.modified': 1
            }
        },
        {
            $sort: { 'data.title.en': 1 }
        },
        {
            $skip: startIndex
        },
        {
            $limit: limit
        }
    ]).toArray();

    const totalResults = await connect.count({
        'data.catalog.publisher.name_url': removeApiSuffix(a.params.agency),
        'data.title.en': { $ne: null }
    })

    const totalPages = Math.ceil(totalResults / limit)

    if(country.length === 0) {
        notFound()
    }



    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(
            <li key={i} >
                <Link href={`${a.params.country}/${a.params.agency}?page=${i}`}>
                    {i}
                </Link>
            </li>
        );
    }


    return (
        <div>


            <div>
                <Container>
                    <div className=" text-center items-center justify-center text-center">
                    <h1 className=" text-center text-4xl font-bolclassNameding-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                        <span className="text-blue-500">EuclassNamen data</span> in a single API request</h1>

                    <div className="pb-10 items-center justify-center text-center leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                        “Agency-description” datasets available on official portal for European data

                    </div>

                        <AccessBlock />

                    <div
                        className="container p-8 mx-classNamexl:px-0 flex w-full flex-col mt-4 items-center justify-center text-center">
                        <div className="text-sm font-boldclassNameking-wider text-blue-600 uppercase">API Store Benefits</div>
                        <h2 className="max-w-2xl mt-3 teclassNamel font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">CZECH replublic Open data API in single place</h2><p
                        className="max-w-2xl py-4 teclassName leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">With
                        our REST API, you no longer have to deal with limited downloads, the latest data or data formats. We
                        are always online, fast and up to date!</p></div>
                    </div>


                </Container>
                <Container>
                        {country.length > 0 ? (
                            <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
                                {country.map((item, index) => (
                                    <TestimonialBase
                                        key={index}
                                        modified={formatISODate(item.data.catalog.modified || "")}
                                        title={item.data?.title.en}
                                        publisher={truncateText(item.data?.description?.en || '')}
                                        publisherUrl={addApiSuffix(
                                            item.data.catalog.publisher.name_url || ""
                                        )}
                                        itemUrl={`/${a.params.country}/${a.params.agency}/${addApiSuffix(item.data.title.en_url)}`}
                                    />
                                ))}
                            </div>
                        ) : (
                            <p>Array is empty</p>
                        )}
                </Container>

                <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    basePath={`${a.params.country}/${a.params.agency}`}
                />

                <div className="pt-80">
                    <Technology />
                </div>
            </div>


        </div>
    );
}

<style />
