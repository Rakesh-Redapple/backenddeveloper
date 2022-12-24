const express= require('express');
const dotenv=require('dotenv');
dotenv.config({path:'./.env'});
const userRouter=require('./routes/user');
const app=express();
const port=process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api/v1',userRouter);

app.listen(port,()=>{
    console.log(`Server is running on port:${port}`);
})