import Blog from "../models/Blog.js";

export const createBlog = async (req, res, next) => {
  try {
    const response = await Blog.create(req.body);
    res.status(200).json({
      success: true,
      message: "Successfully created blog",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllBlogs = async (req, res, next) => {
  try {
    const response = await Blog.find({}).sort({date:-1});
    res.status(200).json({
      success: true,
      message: "Successfully fetched all blogs",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

export const getBlogById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const response = await Blog.findById(id);
    res.status(200).json({
      success: true,
      message: `Successfully fetched blog with id ${id}`,
      data: response,
    });
  }
  catch (error) {
    next(error);
  }
}

export const updateBlog = async (req, res,next) => {
  const { id } = req.params;
  try {
    const response = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "Successfully updated blog",
      data: response,
    });
  }
  catch (error) {
    next(error);
  }
}

export const deleteBlog = async (req, res, next) => {
  const { id } = req.params;
  try {
    const response = await Blog.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfully deleted blog",
      data: response,
    });
  }
  catch (error) {
    next(error);
  }
}