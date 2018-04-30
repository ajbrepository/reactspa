export const storeActiveUser = (user) => {
    return {
        type: 'USER_LOGGED',
        payload: user
    }
};
