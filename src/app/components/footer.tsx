import Image from "next/image";
import Container from "./container";

export default function Footer() {
    const navigation = [
        "Datasets",
        "FAQs",
        "About Us",

    ];
    const legal = ["Terms", "Privacy", "Legal"];
    return (
        <div>
        <div
            className="container p-8 mx-auto xl:px-0 flex w-full flex-col mt-4 items-center justify-center text-center">
            <div className="text-sm font-bold tracking-wider text-blue-600 uppercase">FAQ</div>
            <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">Frequently
                Asked Questions</h2><p
            className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">Some
            basic informations about API Store ®.</p></div>

            <div className="container p-8 mx-auto xl:px-0 !p-0">
                <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
                    <div className="mb-5">
                        <button
                            className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200"
                            id="headlessui-disclosure-button-3" type="button" aria-expanded="true"
                            aria-controls="headlessui-disclosure-panel-4">
                            <span>How much does it cost to use our APIs?</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                 className="transform rotate-180 w-5 h-5 text-blue-500">
                                <path fillRule="evenodd"
                                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                      clipRule="evenodd" />
                            </svg>
                        </button>
                        <div className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300"
                             id="headlessui-disclosure-panel-4">Operation and development of APIs are currently fully
                            funded by company Apitalks and its usage is for free.
                        </div>
                    </div>
                    <div className="mb-5">
                        <button
                            className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200"
                            id="headlessui-disclosure-button-5" type="button" aria-expanded="true"
                            aria-controls="headlessui-disclosure-panel-6">
                            <span>Can I use it in a commercial project?</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                 className="transform rotate-180 w-5 h-5 text-blue-500">
                                <path fillRule="evenodd"
                                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                      clipRule="evenodd" />
                            </svg>
                        </button>
                        <div className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300"
                             id="headlessui-disclosure-panel-6">Yes, this you can.
                        </div>
                    </div>
                    <div className="mb-5">
                        <button
                            className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200"
                            id="headlessui-disclosure-button-7" type="button" aria-expanded="true"
                            aria-controls="headlessui-disclosure-panel-8"><span>How I will know that data in API were updated?</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                 className="transform rotate-180 w-5 h-5 text-blue-500">
                                <path fillRule="evenodd"
                                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                      clipRule="evenodd" />
                            </svg>
                        </button>
                        <div className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300"
                             id="headlessui-disclosure-panel-8">All important information such as time of last update,
                            license and other information are in response of each API call.
                        </div>
                    </div>
                    <div className="mb-5">
                        <button
                            className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200"
                            id="headlessui-disclosure-button-9" type="button" aria-expanded="true"
                            aria-controls="headlessui-disclosure-panel-10"><span>What happens in case we issue new version of API?</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                 className="transform rotate-180 w-5 h-5 text-blue-500">
                                <path fillRule="evenodd"
                                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                      clipRule="evenodd" />
                            </svg>
                        </button>
                        <div className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300"
                             id="headlessui-disclosure-panel-10">In case of major update that would not be compatible
                            with previous version of API, we keep for 30 days both versions so you will have enough time
                            to transfer to new version. We will inform you about the changes in advance by e-mail.
                        </div>
                    </div>
                </div>
            </div>

            <div className="container p-8 mx-auto xl:px-0 ">
                <div
                    className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-blue-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
                    <div className="flex-grow text-center lg:text-left"><h2
                        className="text-2xl font-medium lg:text-3xl">Didnt find the API you need?</h2><p
                        className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">Let us know and we will
                        figure it out for you.</p></div>
                    <div className="flex-shrink-0 w-full text-center lg:w-auto"><a href="#" target="_blank"
                                                                                   rel="noopener"
                                                                                   className="inline-block py-3 mx-auto text-lg font-medium text-center text-blue-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 ">Contact
                        us</a></div>
                </div>
            </div>

        <div className="relative">
            <Container>
                <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
                    <div className="lg:col-span-2">
                        <div>
                            {" "}
                                <a className="flex items-center space-x-2 text-2xl font-medium text-blue-500 dark:text-gray-100">
                  <span>
                    <img
                        src="/img/logo.svg"
                        alt="N"
                        width="32"
                        height="32"
                        className="w-8"
                    />
                  </span>
                                    <span>API Store ®</span>
                                </a>
                        </div>

                        <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
                            API Store provides access to European Open Data via scalable and reliable REST API interface.
                        </div>

                        <div className="mt-5">
                            <a
                                href="https://www.revolgy.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative block w-44">
                                <span>Powered by</span>
                                <span>
                  <Image
                      src="/img/Revolgy_Logo.svg"
                      layout="responsive"
                      alt="Powered by Revolgy"
                      width="300"
                      height="60"
                  />
                </span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
                            {navigation.map((item, index) => (
                                    <a key={index} className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:focus:bg-trueGray-700">
                                        {item}
                                    </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
                            {legal.map((item, index) => (
                                    <a key={index} className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:focus:bg-trueGray-700">
                                        {item}
                                    </a>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
                    Copyright © {new Date().getFullYear()}. Made with ♥ by Apitalks
                </div>
            </Container>

        </div>
        </div>
    );
}
