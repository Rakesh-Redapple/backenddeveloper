const jwt= require('jsonwebtoken');
const authenticationMiddleware= async(req,res,next)=>{
    const authHeader=req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(400).json({msg:'token not found'});
    }

    const token=authHeader.split(' ')[1];
    try{
        const decoded=jwt.verify(token,process.env.JWTKEY);
        const {id,username}=decoded;
        req.user={id,username};
        next();
              }catch(err){
                 return res.status(500).json({Error:err.message})
              }
}



module.exports=authenticationMiddleware