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
