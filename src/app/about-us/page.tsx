import { Inter } from 'next/font/google'
import Container from '../components/container'

const inter = Inter({ subsets: ['latin'] })

export default async function Home(a: any) {
  return (
    <div>
      <Container className="p-0 pb-5" p={0}>
        text text
      </Container>
    </div>
  )
}

;<style />
