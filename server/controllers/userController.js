import User from '../models/User.js';

export const getUsers = async (req,res ,next)=>{
    try {
        const users=await User.find();
        res.status(200).json({
            success: true,
            message:'users fetched successfully',
            data:users
        })
    } catch (error) {
        next(error);
        
    }
}
export const getUser = async (req,res ,next)=>{
    try {
        const user=await User.findById(req.params.id).select('-password');

        if(!user){
            const error=new Error('User not found');
            error.statusCode=404;
            throw error;
        }
        res.status(200).json({
            success: true,
            message:'user fetched successfully',
            data:user
        })
    } catch (error) {
        next(error);
        
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const {username, email, password} = req.body;
  try {
    const response = await User.updateOne({_id: id}, {username, email, password});
    res.status(200).json({
        success: true,
        message: "Successfully updated user",
        data: response,
    });
  } catch (error) {
    next(error);
  }
}

export const deleteUser = async (req, res) => {
  try {
    const response = await User.deleteOne({_id: req.params.id});
    res.status(200).json({
        success: true,
        message: "Successfully deleted user",
        data: response,
    });
  } catch (error) {
    next(error);
  }
}