import Link from 'next/link'

interface Props {
  links: any[]
}

export default function NavigationBar(props: Props) {
  const { links } = props
  return (
    <div className="bg-white flex items-center flex-wrap border-t border-gray-100">
      <ul className={`flex items-center mt-2 ${'md:pl-0 pl-8'}`}>
        <li className="inline-flex items-center mr-2">
          <Link href="/" className="text-gray-800 hover:text-blue-500">
            <svg
              className="w-5 h-auto fill-current mx-2 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
            </svg>
          </Link>
        </li>
        {links.map(([link, title], index) => (
          <li
            className={`inline-flex items-center ${
              index === links.length - 2
                ? 'md:inline-flex'
                : 'hidden md:inline-flex'
            }`}
            key={index}
          >
            <Link
                prefetch={false}
              href={link}
              className={` ${
                index === links.length - 1
                  ? 'text-blue-500'
                  : 'hover:text-blue-500'
              }`}
            >
              {title}
            </Link>
            {index !== links.length - 1 && (
              <svg
                className={`w-5 h-auto fill-current mx-2 text-gray-400 ${
                  index === links.length - 2 ? 'hidden md:inline-flex' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
              </svg>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
