const initialState = {};

export const ReduxGameSettingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AFGSDF':
            return { ...state };
        default:
            return state;
    }
};
