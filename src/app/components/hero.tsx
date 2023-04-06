import Image from "next/image";
import Container from "./container";

import Technology from "./technology";

export default function Hero(props: any) {

    return (
        <>
            <Container className="flex flex-wrap ">
                <div className="flex items-center w-full lg:w-1/2">
                    <div className="max-w-2xl mb-8">
                        <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                            <span className="text-blue-500">European data</span> in a single API request
                        </h1>
                        <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                            Save development time and costs by using fast, scalable and reliable REST API interface to Europian Open Data.
                        </p>

                        <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener"
                                className="px-8 py-4 text-lg font-medium text-center text-white bg-blue-600 rounded-md ">
                                Check APIs
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full lg:w-1/2">
                    <div className="">
                        <Image
                            src="/img/hero.svg"
                            alt="API in building Illustration"
                            layout="responsive"
                            loading="eager"
                            width="616"
                            height="617"
                        />
                    </div>
                </div>
            </Container>
            <Container>
                <Technology />
            </Container>
        </>
    );
}
