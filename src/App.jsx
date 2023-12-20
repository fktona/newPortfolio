import { useState } from 'react'
import './App.css'
import  Homepage from "./homepage"
import Nav from "./assets/components/nav"
import SendEmailProvider from './assets/email/email'
function App() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
//  const [contactNo, setContactNo] = useState('');
  const [message, setMessage] = useState('');


  return (
    <SendEmailProvider
    >
    <div className=" lg:px-[150px] md:px-[40px] px-6">
      {/* <Nav  /> */}
  <Homepage 
  name={name}
  setName={setName}
  email={email}
  setEmail={setEmail}
  // contactNo={contactNo}
  // setContactNo={setContactNo}
   message={message}
  setMessage={setMessage}
   />
    </div>
    </SendEmailProvider>
  )
}

export default App
