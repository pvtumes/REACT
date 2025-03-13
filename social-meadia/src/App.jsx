import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";
import PostList from "./components/PostList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {" "}
      <div className="app-container">
        <Sidebar></Sidebar>

        <div className="content">
          <Header></Header>
          <CreatePost></CreatePost>
          <PostList></PostList>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
