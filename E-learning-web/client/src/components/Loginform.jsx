import React,{useState} from 'react';
import { Form,Button,Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Loginform = () => {
  const navigate = useNavigate();
  const [form,setForm] = useState({email:"",password:""});
  const [error,setError] = useState('');

  const hc = (e)=> {
    setForm({...form,[e.target.name]:e.target.value});
  }
  const hs = (e)=>{
    e.preventDefault();
    if(!form.email||!form.password){
      setError('All fields are required');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users'))||[];
    const user = users.find(u=>u.email=== form.email && u.password === form.password);

    if(user){
    localStorage.setItem('loggedinuser',JSON.stringify(user));
    alert('login sucessfully');
    navigate('/');
    } else {
      setError('invalid credentials');
    }
  }
  return <>
    <Form onSubmit={hs}>
    {error && <Alert variant='danger' >{error}</Alert>}
    <Form.Group className='mb-3'>
      <Form.Label>Email</Form.Label>
      <Form.Control type='email' name='email' onChange={hc}/>
    </Form.Group>
    <Form.Group className='mb-3'>
      <Form.Label>Password</Form.Label>
      <Form.Control type='password' name='password' onChange={hc}/>
    </Form.Group>
    <Button variant='primary' type='submit'>Login</Button>


    </Form>
  </>
}

export default Loginform