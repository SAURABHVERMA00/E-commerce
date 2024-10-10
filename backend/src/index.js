const express=require('express');

const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.get('/',(req,res)=>{
    res.status(200).send({message:'Welcome to the Ecommerce controller'});
})


const authRouter=require('./routes/auth.routes.js');

app.use('/auth',authRouter);

const userRouter=require('./routes/user.routes.js');

app.use('/api/users',userRouter);
module.exports=app;