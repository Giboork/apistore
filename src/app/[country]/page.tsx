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

const inter = Inter({ subsets: ['latin'] })

export default async function Home(a: any) {
    const uri = 'mongodb://localhost:27017';
    console.log(uri, 'uriuri')

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


    return (
        <div>

            <Container>
                <h1 className=" text-center text-4xl font-bolclassNameding-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                    <span className="text-blue-500">EuclassNamen data</span> in a single API request</h1>

                <div
                    className="container p-8 mx-classNamexl:px-0 flex w-full flex-col mt-4 items-center justify-center text-center">
                    <div className="text-sm font-boldclassNameking-wider text-blue-600 uppercase">API Store Benefits</div>
                    <h2 className="max-w-2xl mt-3 teclassNamel font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">CZECH replublic Open data API in single place</h2><p
                    className="max-w-2xl py-4 teclassName leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">With
                    our REST API, you no longer have to deal with limited downloads, the latest data or data formats. We
                    are always online, fast and up to date!</p></div>
            </Container>

            <Container>
                    <div>
                        {aa.length > 0 ? (
                            <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
                                {aa.map((item, index) => (
                                    <TestimonialsBase
                                        key={item.data.catalog.publisher.name_url}
                                        title={item.data.catalog.title?.en}
                                        description={item?.data?.catalog?.description.en}
                                        publisher={item.data.catalog.publisher.name || ""}
                                        publisherUrl={addApiSuffix(
                                            item.data.catalog.publisher.name_url || ""
                                        )}
                                        itemUrl={`${a.params.country}/${addApiSuffix(item.data.catalog.publisher.name_url)  ?? ''}`}
                                    />
                                ))}
                            </div>
                        ) : (
                            <p>Array is empty</p>
                        )}
                    </div>
            </Container>

        </div>
    )
}

<style>

</style>
