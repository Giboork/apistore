import { mongoConnect } from './connect'

export const errorLog = async (status: number, url: string | null) => {
  const client = await mongoConnect()
  const connect = client.db('mydatabase1').collection('error_log')

  const result = await connect.insertOne({
    status,
    url,
  })
}
