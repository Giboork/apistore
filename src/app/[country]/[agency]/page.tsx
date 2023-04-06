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
import { mainLanguageText } from '@/app/tool/translate';
import NavigationBar from "../../components/navigationBar";
import { Metadata } from 'next/types';

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(a: any): Promise<Metadata> {
    const connect = await getDatasetCollection()
    const aa = await connect.findOne({
        'data.catalog.publisher.name_url':  removeApiSuffix(a.params.agency)
    })

    if(!aa) {
        return {}
    }

    return { title: `${aa.data.catalog?.publisher?.name} API - ${aa.data?.country?.label} - Open Data API | API Store`,

        description: 'Explore and preview European Open Data APIs at API.store. Our comprehensive API marketplace offers a variety of APIs to help developers build their applications quickly and easily.'
    }
}



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
            $project: {
                'data.catalog.publisher.name_url': 1,
                'data.catalog.publisher.name': 1,
                'data.title': 1,
                'data.description': 1,
                'data.catalog.modified': 1,
                'data.catalog.description': 1,
                'data.country.label': 1,
                'data.country.label_url': 1
            }
        },
        {
            $skip: startIndex
        },
        {
            $limit: limit
        },
    ]).toArray();



    const totalResults = await connect.count({
        'data.catalog.publisher.name_url': removeApiSuffix(a.params.agency),
    })

    const totalPages = Math.ceil(totalResults / limit)

    if(country.length === 0) {
        notFound()
    }

    const firstData = country[0].data

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(
            <li key={i} >
                <Link href={`/${a.params.country}/${a.params.agency}?page=${i}`}>
                    {i}
                </Link>
            </li>
        );
    }


    const links = [
        ['/', 'Home'],
        [ `/${addApiSuffix(firstData.country.label_url)}`, `${firstData.country.label} Data APIs`],
        [ ``, `${truncateText(firstData.catalog.publisher.name)}`],
    ];


    return (
        <div>
            <Container className="p-0 pb-5"  p={0}>
                <NavigationBar links={links} />
            </Container>


            <div>
                <Container>
                    <div className=" text-center items-center justify-center text-center">
                    <h1 className=" text-center text-4xl font-bolclassNameding-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                        <span className="text-blue-500">{firstData.catalog.publisher.name} </span> Open data API in a single place</h1>

                    <div className="pb-10 items-center justify-center text-center leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300  ">
                        <div className="max-w-3xl mx-auto text-center">
                        {(mainLanguageText(firstData.catalog.description))} datasets available on official portal for European data
                        </div>
                    </div>

                        <AccessBlock agencyName={firstData.catalog.publisher.name} />

                    <div
                        className="container p-8 mx-classNamexl:px-0 flex w-full flex-col mt-4 items-center justify-center text-center">
                        <div className="text-sm font-boldclassNameking-wider text-blue-600 uppercase">API Store Benefits</div>
                        <h2 className="max-w-2xl mt-3 teclassNamel font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">Open data Portal {firstData.country.label} Open Data API in development</h2>

                        <p
                        className="max-w-2xl py-4 teclassName leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">With
                            List of APIs we currently working on to bridge to life. Are you missin <br/> any? Let us know!</p></div>

                    </div>


                </Container>
                <Container>
                        {country.length > 0 ? (
                            <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
                                {country.map((item, index) => (
                                    <TestimonialBase
                                        key={index}
                                        modified={formatISODate(item.data.catalog.modified || "")}
                                        title={mainLanguageText(item.data?.title)}
                                        publisher={truncateText(mainLanguageText(item.data?.description))}
                                        publisherUrl={addApiSuffix(
                                            item.data.catalog.publisher.name_url || ""
                                        )}
                                        itemUrl={`/${a.params.country}/${a.params.agency}/${addApiSuffix(item.data.title?.en_url)}`}
                                    />
                                ))}
                            </div>
                        ) : (
                            <p>Array is empty</p>
                        )}
                </Container>
                <Container className="p-0 pb-5"  p={0}>
                <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    basePath={`${a.params.country}/${a.params.agency}`}
                />
                </Container>
                <div className="pt-80">
                    <Technology />
                </div>

            </div>


        </div>
    );
}

<style />
