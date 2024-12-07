const userModel = require('../models/userSchema');
const emailValidator =require('email-Validator');

const signup = async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;
  console.log(name, email, password, confirmPassword);
  if(!email || !password || !confirmPassword || !name) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required',
    });
  }

  const validEmail = emailValidator.validate(email);
  if(!validEmail) {
    return res.status(400).json({
      success: false,
      message: 'Invalid email format',
    })
  }

  if(password!==confirmPassword) {
    return res.status(400).json({
      success: false,
      message: 'Passwords do not match',
    });
  }

  try {
    const userInfo = userModel(req.body);
    const result = await userInfo.save();


    return res.status(200).json({
      succuess: true,
      data: result,
    });

  } catch (e) {
    if (e.code===11000){
     return res.status(400).json({
     success: false,
     message: 'Account already exists with provided email',
     });
    }
   return res.status(500).json({
    success: false,
    message: e.message,
  });
  }

}

const signin= async(req,res) =>{
 const {email, password} = req.body;

 if(!email || !password){
return res.status(400).json({success: false, 
  message:"every field is mandatory"
})
 }
 const user = await userModel
  .findOne({email})
  .select('+password');

  if(!user || user.password !== password){

    return res.status(400).json({
      success: false,
      message: 'Invalid email or password', 
    })

  }
}

module.exports = {
  signup,
  signin
}