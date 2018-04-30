export default function (state = {type:'USER_LOGGED_OFF',payload:{displayName:''}}, action) {
    console.log('Action :: '+action);
    if(action.type === 'USER_LOGGED')
    {
        //return [state,action];
        return action;
    }
    
    return state;
}