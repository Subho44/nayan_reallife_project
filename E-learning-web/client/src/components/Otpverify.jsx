import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Form,Button,Container,Card } from 'react-bootstrap';

const Otpverify = () => {
    const [otp,setOtp] = useState("");
    const navigate = useNavigate();

    const hv = (e)=> {
        e.preventDefault();
        //default otp
        if(otp === "1234") {
            localStorage.setItem("isloggedin",true);
            localStorage.setItem("user",localStorage.getItem("tempUser"));
            localStorage.removeItem("tempUser");
            navigate('/dashboard');
        } else {
            alert("Invalid OTP TRY AGAIN");
        }
    }
  return <>
     <Form onSubmit={hv}>
       
        <Form.Group className='mb-3'>
          <Form.Label>Enter OTP</Form.Label>
          <Form.Control type='text'  placeholder="Enter OTP" value={otp} onChange={(e)=>setOtp(e.target.value)}/>
        </Form.Group>
       
        <Button variant='success' type='submit'>Verify OTP</Button>
    
    
        </Form>
  </>
}

export default Otpverify