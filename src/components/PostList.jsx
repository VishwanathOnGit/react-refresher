import Post from "./Post";
import classes from "./PostList.module.css";

function PostList() {
  return (
    <ul className={classes.posts}>
     <Post author="Vishwanath" body="React is Awesome!!!" />
     <Post author="Himesh" body="Vite is Awesome!!!" />
     <Post author="Rajesh" body="Webpack is Awesome!!!" />
    </ul>
  );
}

export default PostList;
