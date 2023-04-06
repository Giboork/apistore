import Link from 'next/link';
import { FC } from "react";



export interface TestimonialCardProps {
    title: string;
    publisher: string;
    modified: string;
    publisherUrl: string;
    itemUrl: string;
}


function Mark(props: any) {
    return (
        <mark className="text-blue-800 bg-blue-100 rounded-md ring-blue-100 ring-4 dark:ring-blue-900 dark:bg-blue-900 dark:text-blue-200">
            {props.children}
        </mark>
    );
}
const TestimonialBase: FC<TestimonialCardProps> = ({
                                                       title,
                                                       publisher,
                                                       modified,
                                                       publisherUrl,
                                                       itemUrl,
                                                   }) => (
    <Link href={`${itemUrl}`}>
        <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal break-all">
                <span className="truncate-100">{title || "text"} </span>
                <span>
                <mark className="text-blue-800 bg-blue-100 rounded-md ring-blue-100 ring-4 dark:ring-blue-900 dark:bg-blue-900 dark:text-blue-200 whitespace-nowrap">
                    Open Data
                </mark>
            </span>
            </p>
            <p className="leading-normal break-all">{publisher}</p>
            <p className="leading-normal break-all">Issued on {modified}</p>
            <div className="flex items-center mt-8 space-x-3">
                <div>
                    <div className="text-lg font-medium break-all underline">{title} details &gt;</div>
                </div>
            </div>
        </div>
    </Link>

);

export default TestimonialBase
