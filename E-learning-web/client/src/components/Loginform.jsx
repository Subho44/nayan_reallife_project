import React,{useState} from 'react';
import { Form,Button,Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Loginform = () => {
  const navigate = useNavigate();
 const[email,setEmail] = useState("");


  const hs = (e)=>{
    e.preventDefault();
    if(!email) {
      alert("Enter email or mobile number");
      return;
    }
    localStorage.setItem("tempUser",email);
    alert("OTP SENT SUCCESSFULLY");
    navigate('/otp-verify');
  
    }
   
  return <>
    <Form onSubmit={hs}>
   
    <Form.Group className='mb-3'>
      <Form.Label>Email/Mobile</Form.Label>
      <Form.Control type='text'  placeholder="Enter email or mobile" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </Form.Group>
   
    <Button variant='primary' type='submit'>Send OTP</Button>


    </Form>
  </>
}

export default Loginform