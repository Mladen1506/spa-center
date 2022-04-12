// ACTION TYPES

export const ROUTE_SET = 'ROUTE_SET';
export const DRAWER_TOGGLE = 'DRAWER_TOGGLE';



// ACTION CREATORS AND THUNK-s

export const actionRouteSet = (route) => {
    return {
        type: ROUTE_SET,
        payload: route
    };
};

export const actionDrawerToggle = (route) => {
    return {
        type: DRAWER_TOGGLE,
        payload: route
    };
};