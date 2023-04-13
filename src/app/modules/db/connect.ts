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

export const mongoConnect = async (): Promise<MongoClient> => {
    if (!client) {
        // const uri = 'mongodb://localhost'
        const uri = 'mongodb+srv://apistore:EbM8bK0E7kv2t1PE@cluster-apistore.twb1g.mongodb.net'
        client = await MongoClient.connect(uri, { useNewUrlParser: true } as any);
    }

    return client;
};

export const getDatasetCollection = async (): Promise<Collection<Dataset>> => {
    if (!datasetCollection) {
        const client = await mongoConnect();
        datasetCollection = client.db('mydatabase1').collection<Dataset>('dataset_full');
    }

    return datasetCollection;
};


