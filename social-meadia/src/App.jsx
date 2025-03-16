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
import PostLIstProvider from "../src/store/Post-list-store"

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      
      <PostLIstProvider>
        <div className="app-container">
          <Sidebar
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          ></Sidebar>

          <div className="content">
            <Header></Header>
            {selectedTab === "Home" ? (
              <PostList></PostList>
            ) : (
              <CreatePost></CreatePost>
            )}

            <Footer></Footer>
          </div>
        </div>
      </PostLIstProvider>
    </>
  );
}

export default App;
