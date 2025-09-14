import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMssg from "./WelcomeMssg";

const PostList = () => {
  let { postList, addInitialPosts } = useContext(PostListData);

  
  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  };



  return (
    <>
      {PostList.length === 0 && (
        <WelcomeMssg onGetPostClick={handleGetPostsClick} />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;
