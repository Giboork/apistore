import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { MongoClient } from 'mongodb';
import Link from 'next/link'
import {getDatasetCollection} from "../modules/db/connect";
import {addApiSuffix, removeApiSuffix} from "../tool/url";
import Container from "./../components/container";
import userTwoImg from "../../../public/img/flags/eu.svg";
import TestimonialsBase from "../components/testimonialsBase";
import {truncateText} from "../tool/string";
import Technology from "../components/technology";
import {notFound} from "next/navigation"

const inter = Inter({ subsets: ['latin'] })

export default async function Home(a: any) {
    const uri = 'mongodb://localhost:27017';
    const connect = await getDatasetCollection()

    const aa = await connect.aggregate([
        {
            $group: {
                _id: '$data.catalog.publisher.name_url',
                data: { $first: '$data' }
            }
        },
        {
            $match: {
                'data.country.label_url': removeApiSuffix(a.params.country)
            }
        },
    ]).toArray();

    if(aa.length === 0) {
        notFound()
    }



    return (
        <div>


            <Container>
                {/*<div className="bg-white p-4 flex items-center flex-wrap">*/}
                {/*    <ul className="flex items-center">*/}
                {/*        <li className="inline-flex items-center">*/}
                {/*            <a href="#" className="text-gray-600 hover:text-blue-500">*/}
                {/*                <svg*/}
                {/*                    className="w-5 h-auto fill-current mx-2 text-gray-400"*/}
                {/*                    xmlns="http://www.w3.org/2000/svg"*/}
                {/*                    viewBox="0 0 24 24"*/}
                {/*                    fill="#000000"*/}
                {/*                >*/}
                {/*                    <path d="M0 0h24v24H0V0z" fill="none" />*/}
                {/*                    <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />*/}
                {/*                </svg>*/}
                {/*            </a>*/}
                {/*            <svg*/}
                {/*                className="w-5 h-auto fill-current mx-2 text-gray-400"*/}
                {/*                xmlns="http://www.w3.org/2000/svg"*/}
                {/*                viewBox="0 0 24 24"*/}
                {/*            >*/}
                {/*                <path d="M0 0h24v24H0V0z" fill="none" />*/}
                {/*                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />*/}
                {/*            </svg>*/}
                {/*        </li>*/}
                {/*        <li className="inline-flex items-center">*/}
                {/*            <a href="#" className="text-gray-600 hover:text-blue-500">*/}
                {/*                Page 1*/}
                {/*            </a>*/}
                {/*            <svg*/}
                {/*                className="w-5 h-auto fill-current mx-2 text-gray-400"*/}
                {/*                xmlns="http://www.w3.org/2000/svg"*/}
                {/*                viewBox="0 0 24 24"*/}
                {/*            >*/}
                {/*                <path d="M0 0h24v24H0V0z" fill="none" />*/}
                {/*                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />*/}
                {/*            </svg>*/}
                {/*        </li>*/}
                {/*        <li className="inline-flex items-center">*/}
                {/*            <a href="#" className="text-gray-600 hover:text-blue-500">*/}
                {/*                Page 2*/}
                {/*            </a>*/}
                {/*            <svg*/}
                {/*                className="w-5 h-auto fill-current mx-2 text-gray-400"*/}
                {/*                xmlns="http://www.w3.org/2000/svg"*/}
                {/*                viewBox="0 0 24 24"*/}
                {/*            >*/}
                {/*                <path d="M0 0h24v24H0V0z" fill="none" />*/}
                {/*                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />*/}
                {/*            </svg>*/}
                {/*        </li>*/}
                {/*        <li className="inline-flex items-center">*/}
                {/*            <a href="#" className="text-gray-600 hover:text-blue-500 text-blue-500">*/}
                {/*                Page 3*/}
                {/*            </a>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</div>*/}

                <h1 className=" text-center text-4xl font-bolclassNameding-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                    <span className="text-blue-500">EuclassNamen data</span> in a single API request</h1>

                <div
                    className="container p-6 px-0 flex w-full flex-col mt-4 items-center justify-center text-center">
                    <div className="text-sm font-boldclassNameking-wider text-blue-600 uppercase">API Store Benefits</div>
                    <h2 className="max-w-2xl mt-3 teclassNamel font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">CZECH replublic Open data API in single place</h2><p
                    className="max-w-2xl py-4 teclassName leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">With
                    our REST API, you no longer have to deal with limited downloads, the latest data or data formats. We
                    are always online, fast and up to date!</p></div>

                    <div className="p-6">
                        {aa.length > 0 ? (
                            <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
                                {aa.map((item, index) => (
                                    <Link href={`/${a.params.country}/${addApiSuffix(item.data.catalog.publisher.name_url)  ?? ''}`} key={item.data.catalog.publisher.name_url}>
                                    <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
                                    <p className="text-2xl leading-normal">
                                {item.data.catalog.title?.en}
                                    <mark className="text-blue-800 bg-blue-100 rounded-md ring-blue-100 ring-4 dark:ring-blue-900 dark:bg-blue-900 dark:text-blue-200">
                                    Open Data
                                    </mark>
                                    </p>
                                    <p className="leading-normal pt-2">{truncateText(item?.data?.catalog?.description?.en || '')}</p>
                                    <p className="leading-normal ">{item.data.catalog.publisher.name || ""}</p>

                                    <div className="flex items-center mt-8 space-x-3">
                                    <div>
                                    <div className="text-lg font-medium">{item.data.catalog.title?.en}</div>
                                    </div>
                                    </div>
                                    </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <p>Array is empty</p>
                        )}
                    </div>

                <div className="pt-80">
                <Technology />
                </div>
            </Container>

        </div>
    )
}

<style>

</style>
