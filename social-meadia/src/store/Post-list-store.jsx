import { createContext, useReducer } from "react";

const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostLIstProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,DEFAULT_POST_LIST
  );
  const addPost = () => {};
  const deletePost = () => {};

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  { ID: "1", TITLE: "", BODY: "", REACTION: "", USERID: "", TAGS: [] },
  { ID: "1", TITLE: "", BODY: "", REACTION: "", USERID: "", TAGS: [] },
];

export default PostLIstProvider;
