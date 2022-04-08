// ACTION TYPES

export const ROUTE_SET = 'ROUTE_SET';



// ACTION CREATORS AND THUNK-s

export const actionRouteSet = (route) => {
    return {
        type: ROUTE_SET,
        payload: route
    };
};