import Image from "next/image";
import Container from "./container";


import benefitOneImg from "./../img/benefit-one.png";

const benefitOne = {
    title: "Fast, scalable and reliable solution",
    desc: "With our REST API, you no longer have to deal with limited downloads, the latest data or data formats. We are always online, fast and up to date!",
    image: benefitOneImg,
    bullets: [
        {
            title: "Unlimited requests",
            desc: "With your private API key, you will get rid of all limits and restrictions with data consumption.",
        },
        {
            title: "Always available",
            desc: "We are using scalable cloud solution for providing our APIs. We refresh data on regular bases based on your need. We keep track of versions so you do not have to.",
        },
        {
            title: "Fits right into your use case",
            desc: "You can connect our API directly in your application to query and filter data as you need instead downloading full datasets and store them within your infrastructure.",
        },
    ],
};



export default function Benefits(props: any) {
    benefitOne

    return (
        <>
            <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
                <div
                    className={`flex items-center justify-center w-full lg:w-1/2 g:order-1`}>
                    <div>
                        <Image
                            src={benefitOne.image}
                            width="640"
                            height="420"
                            alt="Benefits"
                            layout="intrinsic"
                            placeholder="blur"
                        />
                    </div>
                </div>

                <div
                    className={`flex flex-wrap items-center w-full lg:w-1/2 lg:justify-end`}>
                    <div>
                        <div className="flex flex-col w-full mt-4">
                            <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                                {benefitOne.title}
                            </h3>

                            <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                                {benefitOne.desc}
                            </p>
                        </div>

                        <div className="w-full mt-5">
                            {benefitOne.bullets.map((item, index) => (
                                <Benefit key={index} title={item.title} >
                                    {item.desc}
                                </Benefit>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

function Benefit(props: any) {
    return (
        <>
            <div className="flex items-start mt-8 space-x-3">
                <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-blue-500 rounded-md w-11 h-11 ">

                </div>
                <div>
                    <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                        {props.title}
                    </h4>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                        {props.children}
                    </p>
                </div>
            </div>
        </>
    );
}
