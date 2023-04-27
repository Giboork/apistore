import { Metadata } from 'next'
import { config } from '../config'
import { truncateString } from '../tool/string'

interface HeadOptions {
  title?: string
  description?: string
  fullPath?: string
}

interface OpenGraphConfig {
  title: string
  description: string
  images: string[]
  url: string
}

interface HeadConfig {
  title: string
  description: string
  openGraph: OpenGraphConfig
}

const baseHead = ({
  fullPath = '',
  title = 'API Store - Open European Data API',
  description = 'Explore and preview European Open Data APIs at API.store. Our comprehensive API marketplace offers a variety of APIs to help developers build their applications quickly and easily.',
}: HeadOptions): Metadata => {
  const titleTrun = title
  const descriptionTrun = truncateString(description, 150)

  return {
    title: titleTrun,
    description: descriptionTrun,
    openGraph: {
      type: 'article',
      title: titleTrun,
      description: descriptionTrun,
      images: [`${config.webUrl}/img/logo.svg`],
      url: `${config.webUrl}`,
    },
  }
}

export { baseHead }
