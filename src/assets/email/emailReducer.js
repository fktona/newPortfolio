 export const reducer = (state , action) => {
    const { type , payload } = action;
    switch(type){
        case 'SEND_EMAIL':
            return {
                state
                
            };
        case 'SENDING_EMAIL':
            return {
                ...state,
                loading:true,
            
            };
        case 'SENDING_EMAIL_SUCCESS':
            return {
                ...state,
                loading:false,
                message:payload?.message,
                start:false
            };
        case 'ERROR_SENDING_EMAIL':
            return {
                ...state,
                message:payload?.message,
                loading:false,
                
            };
        default:
            return state
    }
}   
