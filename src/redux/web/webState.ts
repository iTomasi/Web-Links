import getWebs from "axiosSrc/web/getWebs";
import { webTypes } from "reduxSrc/types";

export const updateInitialValues = async () => {
    const { data, error } = await getWebs();

    if (error)
        return {
            type: "@web_asdjaskdl",
        };

    return {
        type: webTypes.getWebs,
        payload: {
            originalWebs: data,
            webs: data,
        },
    };
};

export const pushWebArray = (obj: any) => {
    return {
        type: webTypes.pushWeb,
        payload: obj,
    };
};

export const updateWebArray = ({ newData, originalWebs, websArray }: any) => {
    const findIndexOriginal = originalWebs.findIndex(
        (web: any) => web._id === newData._id
    );
    const findIndex = websArray.findIndex(
        (web: any) => web._id === newData._id
    );

    if (findIndex === -1 || findIndexOriginal === -1)
        return { type: "@web_asdjxdl" };

    originalWebs[findIndexOriginal] = newData;
    websArray[findIndex] = newData;

    return {
        type: webTypes.updateWeb,
        payload: {
            originalWebs,
            webs: websArray,
        },
    };
};

export const removingWebPage = ({ webId, originalWebs, websArray }: any) => {
    const filteringOriginalWebs = originalWebs.filter(
        (web: any) => web._id !== webId
    );
    const filteringWebs = websArray.filter((web: any) => web._id !== webId);

    return {
        type: webTypes.removeWeb,
        payload: {
            originalWebs: filteringOriginalWebs,
            webs: filteringWebs,
        },
    };
};
