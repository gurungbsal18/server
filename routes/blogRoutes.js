import express from "express";
import {
  addBlog,
  deleteBlog,
  editBlog,
  viewAllBlogs,
  viewSingleBlog,
} from "../controller/blogController.js";

const route = express.Router();

route.post("/add", addBlog);
route.get("/blogs", viewAllBlogs);
route.get("/blogs/:id", viewSingleBlog);
route.put("/blogs/:id", editBlog);
route.delete("/blogs/:id", deleteBlog);

export default route;
