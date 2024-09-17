import React from 'react'
import { Avatar,Box, Grid, Rating } from '@mui/material'
const ProductReviewCard = () => {
  return (
    <div className=''>
        <Grid container spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box >
                    <Avatar className='text-white ' sx={{width:56,height:56 ,bgcolor:"#9155fd"}}/> 
                </Box>

            </Grid>
            <Grid item xs={9}>
                <div className='space-y-2'>
                    <div>
                        <p className='font-semibold text-lg'>Raam</p>
                        <p className='opacity-70'>April 5, 2024</p>

                    </div>

                </div>
                <Rating name="half-rating" value={3.5}  readOnly precision={.5} />
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </Grid>
        </Grid>
    </div>
  )
}

export default ProductReviewCard