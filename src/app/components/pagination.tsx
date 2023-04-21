import Link from 'next/link'

interface PaginationProps {
  currentPage: number
  totalPages: number
  basePath: string
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  basePath,
}) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  const url = (pageNumber: number) => {
    const prefx = pageNumber === 1 ? '' : `?page=${pageNumber}`

    return `/${basePath}${prefx}`
  }

  return (
    <nav className="flex justify-center mt-4">
      <ul className="flex flex-wrap">
        {pageNumbers.map(pageNumber => (
          <li key={pageNumber} className="mx-1 my-1 sm:my-0">
            <Link href={url(pageNumber)} prefetch={false}>
              <button
                className={`${
                  pageNumber === currentPage
                    ? 'bg-indigo-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                } px-2 py-1 text-xs font-medium rounded-md`}
              >
                {pageNumber}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
