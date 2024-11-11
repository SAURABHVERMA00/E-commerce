import React, { useEffect } from 'react'
import {Button, Grid, TextField} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, register } from '../../StateManage/Authentication/action';
const RegisterForm = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const jwt=localStorage.getItem("jwt");
    const {auth} = useSelector(store=>store);
    
    useEffect(()=>{
     
      if(jwt){
        dispatch(getUser(jwt));
      }

    },[jwt,auth.jwt]);


    const handleSubmit=(e)=>{
      e.preventDefault();   
      
      const data= new FormData(e.currentTarget);

      const userData={
        firstName:data.get('firstName'),
        lastName:data.get('lastName'),
        email:data.get('email'),
        password:data.get('password'),
      }

      dispatch(register(userData))
      
     
    }
  return (
    <div>
        <form onSubmit={handleSubmit} >
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                
                <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First name"
                    fullWidth
                    autocomplete="given-name"
                />

            </Grid>
            <Grid item xs={12} sm={6}>
                
                <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    fullWidth
                    autocomplete="given-name"
                />

            </Grid>
            <Grid item xs={12} >
                
                <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    autocomplete="email"
                />

            </Grid>
            <Grid item xs={12} >
                
                <TextField
                    required
                    id="password"
                    name="password"
                    label="Password"
                    fullWidth
                    autocomplete="password"
                    type="password"
                />

            </Grid>

            <Grid item xs={12} >
                
              <Button 
              className='bg-[#9155FD]  w-full'
              type='submit'
              variant='contained'
              size='large'
              sx={{padding:".8rem 0", bgcolor:"#9155FD"}}
              >
                Register
              </Button>

            </Grid>
            
            

        </Grid>
        </form>

        <div className='flex justify-center flex-col items-center'>
           <div className='py-3 flex items-center '>
            <p>Already have an account?</p>
            <Button onClick={()=>navigate("/login")} className='ml-5' size='small'>Login</Button>
           </div>
        </div>
    </div>
  )
}

export default RegisterForm