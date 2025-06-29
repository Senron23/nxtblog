import mongoose from "mongoose";
const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required: [true, 'Blog title is required'],
        trim:true,
        minLength:2,
        maxLength:100,
    },
    author:{
        type:String,
        required: [true, 'Blog author is required'],
        trim:true,
        minLength:2,
        maxLength:100,
    },
    image:{
        type:String,
        required: [true, 'Blog image is required'],
        trim:true,
    },
    date:{
        type:Date,
        trim:true,
        default:Date.now(),
    },
    description:{
        type:String,
        required: [true, 'Blog description is required'],
        trim:true,
        minLength:2,
        maxLength:1000, 
    },
    category:{
        type:String,
        required: [true, 'Blog category is required'],
        trim:true,
        minLength:2,
        maxLength:100,
    },
    author_image:{
        type:String,
        required: [true,],
        trim:true,
    },
    content:{
        type:String,
        required: [true, 'Blog content is required'],
        trim:true,
    }
})

const Blog = mongoose.model('blogs',blogSchema);

export default Blog;