import Link from "next/link";

export default function Navbar() {
    const navigation = ["Datasets", "FAQs", "About Us"];

    return (

        <nav className="container relative flex flex-wrap items-center justify-between p-8 pb-2 mx-auto lg:justify-between xl:px-0">
            <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <a className="flex items-center space-x-2 text-2xl font-medium dark:text-gray-100 hover:text-blue-500" href="/"><span><img src="/img/logo.svg" alt="N" height={48} className="w-12" /></span><span>API Store ®</span></a><button aria-label="Toggle Menu" className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700" id="headlessui-disclosure-button-1" type="button"><svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" /></svg></button></div><div className="hidden text-center lg:flex lg:items-center"><ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex"><li className="mr-3 nav__item"><a className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:focus:bg-gray-800" href="/">Datasets</a></li><li className="mr-3 nav__item"><a className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:focus:bg-gray-800" href="/">FAQs</a></li><li className="mr-3 nav__item"><a className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:focus:bg-gray-800" href="/">About Us</a></li></ul></div><div className="hidden mr-3 space-x-4 lg:flex nav__item"><a className="px-6 py-2 text-white bg-blue-600 rounded-md md:ml-5" href="/">Contact us</a></div></nav>
    );
}
