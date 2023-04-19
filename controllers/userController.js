const users=require("../model/userScheme");
const {gensalt,hash,compare}=require("bcrypt");
const CryptoJs=require('crypto-js');



const createUser=async (req)=>{
    try{
   const checkEmail=await users.find({email:body.email});
   if(checkEmail.length){
    throw new Error("Email already registered")
   }
   const checkPhone=await users.find({phone:body.email});
   if(checkPhone.length){
    throw new Error("Phone already registered")
   }
   const checkUsername=await users.find({username:body.email});
   if(checkUsername.length){
    throw new Error("Username already registered")
   }
   const salt=await gensalt()
   const hashedPassword=await hash(body.password,salt);
   const data=await users.create({
    ...body,
    createdAt:new Date(),
    updatedAt:new Date(),
    password:hashedPassword,
   });
   return data;

    }catch(error){
        return error.messsage
    }

};

const login=async({body})=>{
    try{
        const {email,password}=body;
        const checkEmail=await users.find({email});
        if(!checkEmail.length){
           throw new Error("email Not registered")

    }
    const {password:hashedPass}=checkEmail[0];
    const checkPass=await compare(password,hashedPass);
    if(checkPass){
        const token=CryptoJs.AES.encrypt(JSON.stringify(
            {
             userId:checkEmail[0]._id,
             email:checkEmail[0].email,
            }
        ),
        "Random Secret key e.g. wertujbdf3t4232525757f"
        ).toString();
     res.send({
        token,
        userId:checkEmail[0]._id,
        email:checkEmail[0].email,
     });
    }else{
        throw new Error("wrong credentials");
    }
   
    }catch(error){
        res.send(error.message)
    }
}
module.exports={createUser};