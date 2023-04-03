import { MongoClient, Collection } from 'mongodb';

interface Dataset {
    _id: string;
    data: {
        catalog: {
            publisher: {
                name: string;
                name_url: string;
            };
        };
        country: {
            label: string;
            label_url: string;
        };
        title: {
            cs: string;
            en: string;
        };
    };
}

let client: MongoClient;
export let datasetCollection: Collection<Dataset>;

const mongoConnect = async (): Promise<MongoClient> => {
    if (!client) {
        const uri = 'mongodb+srv://doadmin:65g7H4P912TNJU3Y@db-mongodb-fra1-51989-bc9817ed.mongo.ondigitalocean.com/admin?tls=true&authSource=admin'
        client = await MongoClient.connect(uri, { useNewUrlParser: true } as any);
    }

    return client;
};

export const getDatasetCollection = async (): Promise<Collection<Dataset>> => {
    if (!datasetCollection) {
        const client = await mongoConnect();
        datasetCollection = client.db('a').collection<Dataset>('asd');
    }

    return datasetCollection;
};


