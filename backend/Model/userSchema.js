const mongoose = require('mongoose');

const {Schema} = mongoose;


const userSchema = new Schema({
   name:{
    type: 'string',
    required: [true, 'username name is required'],
    minLength:[5, 'username must be at least 5 characters'],
    maxLength:[50, 'username must be at least 50 characters'],
    trim: true,
   },
   email:{
    type: 'string',
    required: [true, 'email is required'],
    unique: true,
    lowercase: true,
    unique:[true, 'email must be unique'],

    
   },
   password:{
    type: 'string',
    select:false,
   },
   forgotPassword:{
    type: 'string',
   },
   forgotPasswordExpiredDate:{
    type: Date,
   }

},{
    timestamps: true,
 
});

const userModel =mongoose.model('user',userSchema);

module.exports = userModel;