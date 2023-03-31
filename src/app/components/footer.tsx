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
                                rel="noopener"
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
    );
}
