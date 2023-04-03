import Image from "next/image";

import RevolgyLogo from "../img/Revolgy_Logo.svg";

export default function technology() {

    return (
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
    );
}
