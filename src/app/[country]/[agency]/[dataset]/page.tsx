import {getDatasetCollection} from "../../../modules/db/connect";
import {removeApiSuffix} from "../../../tool/url";


export default async function Home(a: any) {
    const connect = await getDatasetCollection()
    const country = await connect.findOne({"data.title.en_url": removeApiSuffix(a.params.dataset) } ) as any ;

  return (
      <div className="array-container">
          <h1> {country.data.title.en}</h1>
          <div className="array-container">
              {JSON.stringify(country.data)}
          </div>
      </div>



  )
}

<style>

</style>
