import { Post, User } from "./models";
import { connectToDb } from "./utils";

export const getPosts = async () => {
    try {
        await connectToDb();
        const response = await Post.find();
        return response;
    }
    catch(err) {
        console.log(err);
        throw new Error("Failed to get posts!");
    }
}
export const getPost = async (slug) => {
    try {
        await connectToDb();
        const post = await Post.findOne({slug});
        return post;
    }
    catch(err) {
        console.log(err);
        throw new Error("Failed to get post!");
    }
}
export const getUsers = async () => {
    try {
        await connectToDb();
        const users = await User.find();
        return users;
    }
    catch(err) {
        console.log(err);
        throw new Error("Failed to get users!");
    }
}
export const getUser = async (id) => {
    try {
        await connectToDb();
        const user = await User.findById(id)
        return response;
    }
    catch(err) {
        console.log(err);
        throw new Error("Failed to get user!");
    }
}