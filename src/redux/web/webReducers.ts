import { IFormWeb } from "types/Form";
import { webTypes } from "../types";

interface IInitialState {
    originalWebs: IFormWeb[];
    webs: IFormWeb[];
}

const initialState: IInitialState = {
    originalWebs: [],
    webs: [],
};

const webReducers = (state = initialState, action: any) => {
    const { type, payload } = action;

    switch (type) {
        case webTypes.getWebs:
            return payload;

        case webTypes.pushWeb:
            return {
                ...state,
                originalWebs: [...state.originalWebs, payload],
                webs: [...state.webs, payload],
            };
        case webTypes.removeWeb:
            return payload;

        default:
            return state;
    }
};

export default webReducers;
