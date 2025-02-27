import Blogs from "../model/blogModel.js";

export const addBlog = async (req, res) => {
  try {
    const newBlog = new Blogs(req.body);

    const saveData = await newBlog.save();
    res.status(200).json(saveData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const viewAllBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.find();
    if (!blogs) {
      res.status(400).json("Blog not found");
    }
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const viewSingleBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const singleBlog = await Blogs.findById(blogId);
    if (!singleBlog) {
      res.status(400).json("Blog not found");
    }
    res.status(200).json(singleBlog);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const editBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const singleBlog = await Blogs.findByIdAndUpdate(blogId);
    if (!singleBlog) {
      res.status(400).json("Blog not found");
    }
    const editBlog = await Blogs.findByIdAndUpdate(blogId, req.body, {
      new: true,
    });
    res.status(200).json(editBlog);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const singleBlog = await Blogs.findByIdAndDelete(blogId);
    if (!singleBlog) {
      res.status(400).json("Blog not found");
    }
    const toDeleteBlog = await Blogs.findByIdAndDelete(blogId);
    // res.status(200).json(toDeleteBlog, "Blog deleted successfully");
    res.status(200).json("Blog deleted successfully");
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
