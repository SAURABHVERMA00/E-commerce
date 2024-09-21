import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'
import { color } from '../Product/FilterData'

const step=[
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out for Delivery",
    "Delivered"

]
const OrderTracker = ({activeStep}) => {
  return (
    <div className='w-full'>
        <Stepper activeStep={activeStep} alternativeLabel>
            {step.map((label) => (
                <Step key={label}>
                    <StepLabel sx={{color:"#9155FD" , fontSize:"44px"}}>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    </div>
  )
}

export default OrderTracker