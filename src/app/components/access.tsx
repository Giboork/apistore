import Image from 'next/image'

import RevolgyLogo from '../img/Revolgy_Logo.svg'

interface Props {
  agencyName: any[]
}

export default function AccessBlock(props: Props) {
  const { agencyName } = props
  return (
    <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-blue-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
      <div className="flex-grow text-center lg:text-left">
        <h2 className="text-2xl font-medium lg:text-3xl">
          Get early access to {agencyName} API!
        </h2>

        <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
          Let us know and we will figure it out for you.
        </p>
      </div>
      <div className="flex-shrink-0 w-full text-center lg:w-auto">
        <a
          href="#"
          target="_blank"
          rel="noopener"
          id="early-access"
          className="inline-block py-3 mx-auto text-lg font-medium text-center text-blue-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 "
        >
          Get early access
        </a>
      </div>
    </div>
  )
}
