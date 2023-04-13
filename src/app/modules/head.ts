import { config } from "../config";

interface HeadOptions {
    title?: string;
    description?: string;
}

interface OpenGraphConfig {
    title: string;
    description: string;
    images: string[];
    url: string;
}

interface HeadConfig {
    title: string;
    description: string;
    openGraph: OpenGraphConfig;
}

const baseHead = ({ title, description }: HeadOptions): HeadConfig => {
    const titleDef = "API Store - Open European Data API";
    const descDef =
        "Explore and preview European Open Data APIs at API.store. Our comprehensive API marketplace offers a variety of APIs to help developers build their applications quickly and easily.";

    return {
        title: title || titleDef,
        description: description || descDef,
        openGraph: {
            title: titleDef,
            description: description || descDef,
            images: [`${config.webUrl}/path/to/your/image.jpg`],
            url: `${config.webUrl}`,
        },
    };
};

export { baseHead };
