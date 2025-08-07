import React,{useState} from 'react';
import { Form,Button,Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Registerform = () => {
  const navigate = useNavigate();
  const [form,setForm] = useState({name:"",email:"",password:""});
  const [error,setError] = useState('');

  const hc = (e)=> {
    setForm({...form,[e.target.name]:e.target.value});
  }
  const hs = (e)=>{
    e.preventDefault();
    if(!form.name||!form.email||!form.password){
      setError('All fields are required');
      return;
    }
    const existingusers = JSON.parse(localStorage.getItem('users'))||[];
    const userExists = existingusers.find(x=>x.email=== form.email);

    if(userExists){
      setError('user already registerd');
    } else {
      existingusers.push(form);
      localStorage.setItem('users',JSON.stringify(existingusers));
      localStorage.setItem('loggedinuser',JSON.stringify(form));
      navigate('/login');
    }
  }
  return <>
    <Form onSubmit={hs}>
    {error && <Alert variant='danger' >{error}</Alert>}
    <Form.Group className='mb-3'>
      <Form.Label>Name</Form.Label>
      <Form.Control type='text' name='name' onChange={hc}/>
    </Form.Group>
    <Form.Group className='mb-3'>
      <Form.Label>Email</Form.Label>
      <Form.Control type='email' name='email' onChange={hc}/>
    </Form.Group>
    <Form.Group className='mb-3'>
      <Form.Label>Password</Form.Label>
      <Form.Control type='password' name='password' onChange={hc}/>
    </Form.Group>
    <Button variant='primary' type='submit'>Register</Button>


    </Form>
  </>
}

export default Registerform