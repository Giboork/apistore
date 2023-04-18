'use client'

import {useEffect, useState} from 'react'



export default function NavbarClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  useEffect(() => {

    document.body.addEventListener('click', function(event: any) {
      if (event.target.classList.contains('modal-contact')) {
        (document.querySelector("#contact-us-desktop") as any).click();
      }
    });


  }, []);

  return (
    <nav className="container relative flex flex-wrap items-center justify-between p-8 pb-2 mx-auto lg:justify-between xl:px-0">
      <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
        <a
          className="flex items-center space-x-2 text-2xl font-medium dark:text-gray-100 hover:text-blue-500"
          href="/"
        >
          <span>
            <img src="/img/logo.svg" alt="N" height={48} className="w-12" />
          </span>
          <span>API Store ®</span>
        </a>
        <input type="checkbox" id="toggle-menu" className="hidden" />
        <label
          htmlFor="toggle-menu"
          onClick={handleToggleMobileMenu}
          className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
        >
          <svg
            className={`w-6 h-6 fill-current ${
              mobileMenuOpen ? 'hidden' : 'block'
            } open-icon`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
          </svg>
          <svg
            className={`w-6 h-6 fill-current ${
              mobileMenuOpen ? 'block' : 'hidden'
            } close-icon`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              ></path>
            </svg>
          </svg>
        </label>
        {mobileMenuOpen && (
          <div
            className="flex flex-wrap w-full my-5 lg:hidden"
            id="headlessui-disclosure-panel-2"
          >
            <a
              className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 dark:focus:bg-gray-800 focus:outline-none dark:focus:bg-trueGray-700"
              target="_blank"
              href="https://apitalks.freshstatus.io/"
            >
              API Avalibility
            </a>
            <a
              className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 dark:focus:bg-gray-800 focus:outline-none dark:focus:bg-trueGray-700"
              target="_blank"
              href="https://www.apitalks.com/public-apistore-en/"
            >
              About Apitalkss
            </a>
            <a
              className="modal-contact w-full px-6 py-2 mt-3 text-center text-white bg-blue-600 rounded-md lg:ml-5"
              id="contact-us-phone"
            >
              Contact us
            </a>
          </div>
        )}
      </div>

      <div className="hidden text-center lg:flex lg:items-center">
        <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
          <li className="mr-3 nav__item">
            <a
              className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:focus:bg-gray-800"
              target="_blank"
              href="https://apitalks.freshstatus.io/"
            >
              API Avalibility
            </a>
          </li>
          <li className="mr-3 nav__item">
            <a
              className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:focus:bg-gray-800"
              target="_blank"
              href="https://www.apitalks.com/public-apistore-en/"
            >
              About Apitalks
            </a>
          </li>
        </ul>{' '}
      </div>
      <div className="hidden mr-3 space-x-4 lg:flex nav__item">
        <a
          className="px-6 py-2 text-white bg-blue-600 rounded-md md:ml-5 cursor-pointer"
          data-sumome-listbuilder-id="eb223b39-5410-4aef-b588-ac2a462bdacf"
          id="contact-us-desktop"
        >
          Contact us
        </a>
      </div>
    </nav>
  )
}
