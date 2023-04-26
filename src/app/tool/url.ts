export const addApiSuffix = (url: string) => `${url}-api`

export const removeApiSuffix = (url: string) => {
    const lastIndex = url.lastIndexOf('-api');
    if (lastIndex !== -1) {
        return url.slice(0, lastIndex) + url.slice(lastIndex + 4);
    }
    return url;
};
