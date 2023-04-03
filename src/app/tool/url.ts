export const addApiSuffix = (url: string) => `${url  }-api`;

export const removeApiSuffix = (url: string) => url.replace("-api", "");
