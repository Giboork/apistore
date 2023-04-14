import { mongoConnect } from './connect'

export const errorLog = async (status: number, url: string) => {
  const client = await mongoConnect()
  const connect = client.db('mydatabase1').collection('erro_log')

  const result = await connect.insertOne({
    status,
    url,
  })
}
