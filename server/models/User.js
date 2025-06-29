import mongoose, { STATES } from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, 'username is required'],
        trim:true,
        minLength:2,
        maxLength:30,
    },
    email:{
        type:String,
        required:[true, 'user email is required'],
        unique:true,
        trim:true,
        lowercase:true,
        match:[/\S+@\S+\.\S+/, 'please fill avalid email address'],
    },
    password:{
        type:String,
        required:[true,'user pass is required'],
        minLength:6,
    }
}, {timestamps:true});


const User= mongoose.model('users',userSchema);

export default User;