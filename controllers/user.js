const jwt=require('jsonwebtoken');
const signup=async(req,res)=>{
 try{
    const id= new Date().getTime();
    const{username,password}=req.body;
    if(!username && !password){
        return res.status(400).json({msg:'username and password not found'})
    }
    const token=jwt.sign({id,username},process.env.JWTKEY,{expiresIn:'1d'});
    console.log(id);
    res.status(200).json({msg:'signup done!',token})

 }catch(err){
    console.log(err);
 }
}

const login=async(req,res)=>{
    try{
       res.status(200).json({msg:'login done!'})
   
    }catch(err){
       console.log(err);
    }
   }

   const dashboard=async(req,res)=>{

      console.log(req.user);
//     try{
//       const authHeader=req.headers.authorization;
//       if(!authHeader|| !authHeader.startsWith('Bearer ')){
//      return  res.status(400).json({msg:'No token provided!'})
//       }
//       const token=authHeader.split(' ')[1];
//       try{
// const decoded=jwt.verify(token,process.env.JWTKEY);
// console.log(decoded);
//       }catch(err){
//          return res.status(500).json({Error:err.message})
//       }
//       console.log(token)
//       res.status(200).json("go to dash board");
   
//     }catch(err){
//        console.log(err);
//     }
   }




   module.exports={signup,login,dashboard}