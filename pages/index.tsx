export const revalidate = 10

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { MongoClient } from 'mongodb'
import Link from 'next/link'
import styles from './page.module.css'
import { getDatasetCollection } from '../src/app/modules/db/connect'
import { addApiSuffix } from '../src/app/tool/url'
import Hero from '../src/app/components/hero'
import SectionTitle from '../src/app/components/sectionTitle'
import Benefits from '../src/app/components/benefits'
import Testimonials from '../src/app/components/testimonials'
import userTwoImg from '../../public/img/flags/eu.svg'
import Container from '../src/app/components/container'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import type { Metadata } from 'next'
import { baseHead } from '../src/app/modules/head'
// import GtmEventClient from '../src/app/components/gtmEvent'
import Layout from '../src/app/layout'

export async function generateMetadata(): Promise<Metadata> {
  return baseHead({
    description:
      'Explore European Open Data APIs at API Store. Open Data API marketplace to help developers build their applications quickly and easily.',
    title: 'European open data in a single API request',
  })
}

export default function Home({
  aa,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <div>
        <Hero />

        <SectionTitle
          pretitle="API Store Benefits"
          title="Our API makes data accessible without limitation in format usable in your application"
        >
          With our REST API, you no longer have to deal with limited downloads,
          the latest data or data formats. We are always online, fast and up to
          date!
        </SectionTitle>
        <Benefits />

        <div id="apis">
          <SectionTitle
            pretitle="Available Datasets"
            title="Open Data APIs in development"
          >
            List of APIs we are currently working on to bring to life. Are you
            missing any? Let us know!
          </SectionTitle>

          <Container>
            <div>
              {aa.length > 0 ? (
                <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
                  {aa.map((item, index) => (
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
                          List of {item?.data?.country?.label} agencies
                          providing Open data
                        </p>

                        <Avatar
                          image={`img/flags/${item?.data?.country?.id}.svg`}
                          name={item?.data?.country?.label}
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p>Array is empty</p>
              )}
            </div>
          </Container>
        </div>

        {/* <GtmEventClient customEvent={{ type: 'homepage' }} /> */}
      </div>
    </Layout>
  )
}

function Mark(props: any) {
  return (
    <mark className="text-blue-800 bg-blue-100 rounded-md ring-blue-100 ring-4 dark:ring-blue-900 dark:bg-blue-900 dark:text-blue-200">
      {props.children}
    </mark>
  )
}

function Avatar(props: any) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="30"
          alt="Avatar"
          layout="responsive"
        />
      </div>
      <div>
        <div className="text-lg font-medium underline">
          {props.name} Agencies &gt;
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const connect = await getDatasetCollection()
  const aa = await connect
    .aggregate([
      {
        $match: {
          'data.country.label': { $ne: null },
        },
      },
      {
        $group: {
          _id: '$data.country.label',
          data: { $first: '$data' },
        },
      },
      {
        $project: {
          'data.country': 1,
          _id: 0,
        },
      },
      {
        $sort: { 'data.country.label': 1 },
      },
    ])
    .toArray()

  return {
    props: {
      aa,
    },
  }
}
