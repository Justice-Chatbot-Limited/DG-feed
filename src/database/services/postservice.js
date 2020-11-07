import db from '../models';
const Posts = db.posts;

class Postservices {
    static allPosts = async (user_id) => {
        const post = await Posts.findAll({
            where: { user_id }
        });
        if (!post) return null;
        return post;
    }
    static onePost = async (post_id) => {
        const post = await Posts.findOne({ where: { post_id } });
        if (!post) return null;
        return post;
    }
  
    static createPost = async (post) => {
        const newPost = await Posts.create(post);
        if (!newPost) return null;
        return newPost;
    }
}
export default Postservices;