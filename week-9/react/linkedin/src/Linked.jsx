import React, { useState } from "react";
import { FaLinkedin, FaUserCircle, FaMoon, FaSun } from "react-icons/fa";
import { AiOutlineHome, AiOutlineMessage, AiOutlineLike, AiOutlineDelete } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";

const Linked = () => {
  const [posts, setPosts] = useState([
    { id: 1, user: "Omkar Bodkhe", text: "Excited to start a new project!", likes: 0, comments: [] },
  ]);
  const [newPost, setNewPost] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const addPost = () => {
    if (newPost.trim()) {
      setPosts([...posts, { id: Date.now(), user: "Omkar Bodkhe", text: newPost, likes: 0, comments: [] }]);
      setNewPost(""); // Clear input after posting
    }
  };

  const likePost = (id) => {
    setPosts(posts.map(post => post.id === id ? { ...post, likes: post.likes + 1 } : post));
  };

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const addComment = (id, comment, e) => {
    if (comment.trim()) {
      setPosts(posts.map(post => post.id === id ? { ...post, comments: [...post.comments, comment] } : post));
      e.target.value = ""; // Clear input after adding comment
    }
  };

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} min-h-screen`}>
      {/* Navbar */}
      <div className={`${darkMode ? "bg-gray-800" : "bg-white"} flex p-4 shadow-md justify-between items-center`}>
        <h1 className="text-2xl text-blue-700 font-bold flex items-center">
          <FaLinkedin className="mr-2" /> LinkedIn
        </h1>
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-600">
          {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-700" />}
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className={`${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} w-1/4 p-4 shadow-md`}>
          <ul>
            <li className="flex items-center cursor-pointer mb-4"><AiOutlineHome className="mr-2" /> Home</li>
            <li className="flex items-center cursor-pointer mb-4"><MdWorkOutline className="mr-2" /> Jobs</li>
            <li className="flex items-center cursor-pointer mb-4"><AiOutlineMessage className="mr-2" /> Messaging</li>
            <li className="flex items-center cursor-pointer mb-4"><IoMdNotificationsOutline className="mr-2" /> Notifications</li>
          </ul>
        </div>

        {/* Feed */}
        <div className="w-1/2 p-4">
          <div className={`${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} p-4 rounded shadow-md mb-4 flex items-center`}>
            <FaUserCircle className="text-gray-500 text-2xl mr-2" />
            <input type="text" placeholder="Start a post..." className="flex-1 p-2 border rounded text-black" value={newPost} onChange={(e) => setNewPost(e.target.value)} />
            <button onClick={addPost} className="bg-blue-600 text-white px-4 py-2 rounded ml-2">Post</button>
          </div>

          {posts.map((post) => (
            <div key={post.id} className={`${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} p-4 rounded shadow-md mb-4`}>
              <h3 className="font-bold flex items-center">
                <FaUserCircle className="mr-2 text-gray-500" /> {post.user}
              </h3>
              <p className="mt-2">{post.text}</p>
              <div className="flex items-center mt-2">
                <button onClick={() => likePost(post.id)} className="flex items-center text-gray-600 dark:text-gray-300 mr-4">
                  <AiOutlineLike className="mr-1" /> {post.likes}
                </button>
                <input type="text" placeholder="Comment..." className="border rounded p-1 flex-1 text-black"
                  onKeyDown={(e) => e.key === 'Enter' && addComment(post.id, e.target.value, e)} />
                <button onClick={() => deletePost(post.id)} className="ml-4 text-red-500">
                  <AiOutlineDelete />
                </button>
              </div>
              <div className="mt-2">
                {post.comments.map((comment, index) => (
                  <p key={index} className="text-gray-500 text-sm">💬 {comment}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Job Listings */}
        <div className={`${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} w-1/4 p-4 shadow-md`}>
          <h2 className="font-bold mb-2">Job Listings</h2>
          <p>🔹 Frontend Developer - Google</p>
          <p>🔹 Backend Engineer - Amazon</p>
          <p>🔹 Data Analyst - Microsoft</p>
        </div>
      </div>
    </div>
  );
};

export default Linked;
