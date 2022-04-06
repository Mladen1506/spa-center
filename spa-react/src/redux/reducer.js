const initialState = {
    nesto: 'bla bla'
};

const rootReducer = (state = initialState, action) => {
    const paylaod = action.payload;
    switch (action.type) {
        case 'SOME_ACTION':
            return state;

        default:
            return state;
    }

};

export default rootReducer;