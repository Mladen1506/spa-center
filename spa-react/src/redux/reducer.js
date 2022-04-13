import { DRAWER_TOGGLE, ROUTE_SET } from "./actions";

const initialState = {
    route: 'HOME',
    drawerOpened: false,
};

const rootReducer = (state = initialState, action) => {
    const payload = action.payload;

    switch (action.type) {
        case ROUTE_SET:
            return {
                ...state,
                route: payload,
                drawerOpened: false
            };

        case DRAWER_TOGGLE:
            let drawerOpened = true;
            if (state.drawerOpened) {
                drawerOpened = false;
            }
            return {
                ...state,
                drawerOpened
            };

        default:
            return state;
    }

};

export default rootReducer;