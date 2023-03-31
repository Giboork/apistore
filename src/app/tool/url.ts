export const addApiSuffix = (url: string) => {
   return  url + "-api";
};

export const removeApiSuffix = (url: string) => {
    return  url.replace("-api", "");
};
