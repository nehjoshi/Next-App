import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

export const addPost = async (formData) => {
    "use server";
    const { title, desc, slug, userId } = Object.fromEntries(formData);
    console.log(title, desc, slug, userId);

    try {
        await connectToDb();
        const newPost = new Post({title, desc, slug, userId});
        await newPost.save();
        console.log("Saved to DB");
        revalidatePath("/blog");
    } catch (err) {
        console.log(err)
        return { error: "Something went wrong" }
    }
}