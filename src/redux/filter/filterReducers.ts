import { filterTypes } from "../types";

const initialState = {
    value: "",
    sortBy: "",
};

const filterReducers = (state = initialState, action: any) => {
    const { type, payload } = action;

    switch (type) {
        case filterTypes.updateValue:
            return {
                ...state,
                value: payload,
            };

        default:
            return state;
    }
};

export default filterReducers;
