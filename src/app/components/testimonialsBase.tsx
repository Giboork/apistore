import Link from 'next/link';
import { FC } from "react";



export interface TestimonialCardProps {
    title: string;
    description: string;
    publisher: string;
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
                                                       description,
                                                       publisher,
                                                       publisherUrl,
                                                       itemUrl,
                                                   }) => {
    return (
        <Link href={`${itemUrl}`}>
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
                <p className="text-2xl leading-normal">
                    {title || "text"}
                        <mark className="text-blue-800 bg-blue-100 rounded-md ring-blue-100 ring-4 dark:ring-blue-900 dark:bg-blue-900 dark:text-blue-200">
                            Open Data
                        </mark>
                </p>
                <p className="leading-normal pt-2">{description}</p>
                <p className="leading-normal ">{publisher}</p>

                <div className="flex items-center mt-8 space-x-3">
                    <div>
                        <div className="text-lg font-medium">{title}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default TestimonialBase
