export const storeActiveUser = (user) => {
    console.log("Removing Active User: ", (user?user.displayName:null));
    return {
        type: 'USER_LOGGED',
        payload: user
    }
};
