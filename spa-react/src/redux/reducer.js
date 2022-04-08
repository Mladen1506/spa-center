import { ROUTE_SET } from "./actions";

const initialState = {
    route: 'HOME',
    nesto: 'bla bla',
};

const rootReducer = (state = initialState, action) => {
    const payload = action.payload;

    switch (action.type) {
        case ROUTE_SET:
            return {
                ...state,
                route: payload
            };

        default:
            return state;
    }

};

export default rootReducer;