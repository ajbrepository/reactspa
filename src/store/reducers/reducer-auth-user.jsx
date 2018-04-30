export default function (state = {}, action) {
    console.log('Action :: '+action);
    if(action.type === 'USER_LOGGED')
    {
        return [...state,action];
    }
    
    return state;
}