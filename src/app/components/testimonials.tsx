import Image from 'next/image'
import Link from 'next/link'
import Container from './container'

import userOneImg from '../../../public/img/flags/cz.svg'
import userTwoImg from '../../../public/img/flags/eu.svg'
import userThreeImg from '../../../public/img/flags/nl.svg'
import { Dataset } from '../modules/db/interface'
import { addApiSuffix } from '../tool/url'

export default function Testimonials(a: { aa: any[] }) {
  return (
    <Container>
      <div>
        {a.aa.length > 0 ? (
          <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
            {a.aa.map((item, index) => (
              <Link
                  prefetch={false}
                href={addApiSuffix(item.data?.country?.label_url) ?? ''}
                key={index}
              >
                <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
                  <p className="text-2xl leading-normal ">
                    {item?.data?.country?.label} <Mark>Open Data</Mark>
                  </p>
                  <p className="leading-normal ">
                    List of {item?.data?.country?.label} agencies providing Open
                    data
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p>Array is empty</p>
        )}
      </div>
    </Container>
  )
}

function Mark(props: any) {
  return (
    <mark className="text-blue-800 bg-blue-100 rounded-md ring-blue-100 ring-4 dark:ring-blue-900 dark:bg-blue-900 dark:text-blue-200">
      {props.children}
    </mark>
  )
}
