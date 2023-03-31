import Container from "./container";
import ClientComponent from "./faqClient";
import Image from "next/image";

import RevolgyLogo from "./../img/Revolgy_Logo.svg";

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
                            width="616"
                            height="617"
                            alt="API in building Illustration"
                            layout="intrinsic"
                            loading="eager"
                        />
                    </div>
                </div>
            </Container>
            <Container>
                <div className="flex flex-col justify-center">
                    <div className="text-xl text-center text-gray-700 dark:text-white">
                        Build on <span className="text-blue-600">reliable</span> and <span className="text-blue-600">scalabe</span> technology{" "}
                    </div>

                    <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
                        <div className="pt-2 text-gray-400 dark:text-gray-400">
                            <Image
                                src={RevolgyLogo}
                                width="300"
                                height="80"
                                alt="Revolgy Logo"
                                layout="intrinsic"
                                loading="eager"
                            />
                        </div>
                        <div className="text-gray-400 dark:text-gray-400">
                            <Image
                                src="/img/Amazon_Web_Services_Logo.svg"
                                width="300"
                                height="80"
                                alt="Amazon Web Services Logo"
                                layout="intrinsic"
                                loading="eager"
                            />
                        </div>
                        <div className="text-gray-400 dark:text-gray-400">
                            <Image
                                src="/img/Google_Cloud_logo.svg"
                                width="300"
                                height="80"
                                alt="Google Cloud Logo"
                                layout="intrinsic"
                                loading="eager"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
