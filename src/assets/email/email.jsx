import { useContext , useReducer , createContext} from 'react';
import {reducer} from './emailReducer';


export const EmailContext = createContext();

const SendEmailProvider = ({ children }) => {
  const initialState = {
    loading: false,
    message: null,
    error: null,
    start: false
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const sendEmail = async (data) => {
    const params = new URLSearchParams({
    userMail: 'adetona.fk@gmail.com',
    userName:'Faith'
    });

      try {
        const res = await fetch(`https://sendspear.onrender.com/api/message?${params}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        if (res.status === 200) {
          const responseData = await res.json(); 
          console.log(responseData)
          dispatch({
            type: 'SENDING_EMAIL_SUCCESS',
            payload: {
              message: responseData?.message 
            }
          });
        }else{
          dispatch({
            type: 'ERROR_SENDING_EMAIL',
            payload: {
              message: responseData?.message
            }
          });
        }
      } catch (error) {
        dispatch({
          type: 'ERROR_SENDING_EMAIL',
          payload: {
            message: 'error sending message'
          }
        });
      }
    }
  ;

  return (
    <EmailContext.Provider value={{ state, sendEmail }}>
      {children}
    </EmailContext.Provider>
  );
  };

export default SendEmailProvider;

   export const useEmail = () => {
       const context = useContext(EmailContext);
       if(context === undefined){
           throw new Error('useEmail must be used within a EmailProvider')
       }
       return context;
   }