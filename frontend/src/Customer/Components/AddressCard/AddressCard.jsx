import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { createOrder } from '../../../StateManage/Order/action';
import { useNavigate } from 'react-router-dom';

const AddressCard = ({address,check}) => {

  const dispatch=useDispatch();
  const navigate=useNavigate(); 

  const handleDeliver=()=>{

    const orderData={address,navigate}  

    dispatch(createOrder(orderData))


  }
  return (
    <div>
        <div className='space-y-3'>
            <p className="font-semibold">{address?.firstName} {address?.lastName}</p>
            <p>{address?.streetAddress} , {address?.city} {address?.state},{address?.zipCode}</p>
            <div className='space-y-1'>
                <p className='font-semibold'>Phone Number</p>
                <p>{address?.mobile}</p>
            </div>
           { (check && <Button onClick={handleDeliver}  sx={{mt:2 ,bgcolor:"RGB(145 85 253)"}} size='large' variant='contained'>
                        Deliver Here

            </Button>)}
        </div>
    </div>
  )
}

export default AddressCard