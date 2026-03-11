import Link from 'next/link'
import { MdOutlineError } from 'react-icons/md'

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <MdOutlineError className="text-red-500 text-8xl mb-4" />
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="mb-4">Page Not Found</p>

      <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded">
        Back Home
      </Link>
    </div>
  )
}

export default NotFound