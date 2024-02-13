const bcrypt = require("bcrypt");
const userModel = require("../model/userSchema");

const userDetails = async (req, res) => {
  const { name, email, address, password } = req.body.data;
  console.log(req.body);
  const salt = 10;
  console.log(salt);
  const hashPassword = bcrypt.hashSync( password,salt);
  console.log(hashPassword)

  try {
    // check user email is already registered
    const userData = await userModel.findOne({ email: email });
    if (userData) {
      return res.json({
        status: "error",
        message: "This email is already registered.",
      });
    } else {
      const userData = new userModel({
        name,
        email,
        address,
        password:hashPassword,
      });
     //create and save data to database
      userData.save();
      res.json({
        status: "ok",
        _id: userData._id,
        message: "User Signup Successfully!",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: "Duplicae email or Network error" });
  }
};

const getUserDetails=async(req,res)=>{
    try{
        let users= await userModel.find();
        // find the all user details from backend
        if(users){
        // send all users to frontend  
         res.json({status:"ok",users:users})
        }else{
            console.log("no userrs found");
            res.json({status:"error",users:"users not found"})
        }

    }catch(err){
        res.json({status:"error",error:"Data not find"})
        console.log(err);
    }

};

const getEditUser= async(req,res)=>{
    try{
        console.log(req.params.id)
        // access id from client side and find the specified data
        const user= await userModel.findOne({_id:req.params.id});
        // console.log(user)
        if(!user){
            res.json({status:"error",message:"user not found"})
        }
        else{
            // pass data to frontend
            res.json({status:"ok",message:"user found",userData:user})
        }
    }catch(err){
            console.log("user not found with the edit id ");
            res.status(400).json({status:"error",message:"oops errror"})
    }
}

const updateUsers=async(req,res)=>{
    try{
        // access updating data from client side
        const {name,email,address}=req.body.editData;
        console.log(name,email,address)
        // find specified users
        let user=await userModel.findOne({_id:req.params.id})
        console.log(user,"is there is the error")
        console.log(req.params.id)
        if(user){  
            const update=await userModel.findOneAndUpdate({_id:req.params.id},
                {
                    $set:{
                        name,
                        email,
                        address
                    }
                })// update user and saved the data
                console.log(update,"user updated")
            res.json({status:"ok",message:"user updated",userexists:false})
        }else{
            console.log("user already regsiterd")
            res.json({status:"error",message:"user already registerd",userexists:true})
        }
    }catch(err){
        console.log("update catch errror")
        res.json({status:"error",error:"update error"})
    }
}
const deleteUsers=async(req,res)=>{
    try{     // delete the user data from database
            await userModel.deleteOne({_id:req.params.id});
            console.log(req.params.id)
            res.json({status:"ok",message:"user deleted"})
    }catch(err){
            console.log("user nto found")
            res,json({status:"error",error:"something sent wrong"})
    }
}

const SearchUser=async(req,res)=>{
    // access the user texting value to the backend
    const getValue=req.params.userValue;
    console.log(getValue)
    try{
        const users=await userModel.find({
            "$or": [
                {
                    name: { $regex: getValue }
                },
                {
                    address: { $regex: getValue }
                }
            ]
        })// find the specified data using regex
        console.log(users)
        res.json({status:"ok",message:"user found",users})

    }catch(err)
    {
        res.json({status:"error",message:"no user found"})
    }
}


module.exports={
    userDetails,getUserDetails,getEditUser,updateUsers,deleteUsers,SearchUser
}










