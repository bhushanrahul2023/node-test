const {Router}=require("express");
const CryptoJs=require("crypto-js");
const { createUser,login } = require("../controllers/userController");
const userRouter=new Router();
userRouter.post("/createUser",async(req,res)=>{
    try{
     const newUser=await  createUser(req);
     res.send(newUser) 
    }catch(error){
        res.send(error.message)
    }
})
userRouter.post("/login",async(req,res)=>{
    try{
       
        const data=await login(req);
        res.send(data);
       
}catch(error){
    res.send(error.message)
}
})
userRouter.get("/users",async(req,res)=>{
    try{
        if(!req.isAuth){
            throw new Error("user not logged in");
        }
    const userData=await User.findById(req.userId);
    res.send(userData);
    }catch(error){
        res.send(error.message)
    }
})

userRouter.patch("/updateUser",async(req,res)=>{
    try{
        if(!req.isAuth){
            throw new Error("user not logged in")
        }
        const data={...req.body};
        delete data.id;
        const altereduser=await User.findByIdAndUpdate(req.body.id,{...data});
        res.send(altereduser);
    }
    catch(error){
        res.send(error.message);
    }
});
userRouter.delete("/deleteUser",async(req,res)=>{
    try{
        const user=await user.findByIdAndDelete(req.body.id);
        res.send(user);
    }catch(error){
        res.send(error.message);
    }
})
module.exports=userRouter;