const signup = (req,res,next) =>{ 
    const {name, email, password, confirmPassword}=req.body;
    console.log(ame, email, password, confirmPassword);
  return res.status(200).json({
    succuess: true,
    data:{

    }
  })
}

module.exports ={
  signup
}