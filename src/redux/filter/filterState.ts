import { filterTypes } from "../types";

export const updateFilterValue = (inputValue: string) => {
    return {
        type: filterTypes.updateValue,
        payload: inputValue.toLowerCase(),
    };
};
