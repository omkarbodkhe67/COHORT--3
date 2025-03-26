import React, { useState } from "react";
import { FaLinkedin, FaUserCircle, FaMoon, FaSun } from "react-icons/fa";
import { AiOutlineHome, AiOutlineMessage, AiOutlineLike } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";

const Linked = () => {
  const [posts, setPosts] = useState([
    { id: 1, user: "Omkar Bodkhe", text: "Excited to start a new project!", likes: 0, comments: [] },
  ]);
  const [newPost, setNewPost] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const addPost = () => {
    if (newPost.trim()) {
      setPosts([...posts, { id: posts.length + 1, user: "Omkar Bodkhe", text: newPost, likes: 0, comments: [] }]);
      setNewPost("");
    }
  };

  const likePost = (id) => {
    setPosts(posts.map(post => post.id === id ? { ...post, likes: post.likes + 1 } : post));
  };

  const addComment = (id, comment) => {
    if (comment.trim()) {
      setPosts(posts.map(post => post.id === id ? { ...post, comments: [...post.comments, comment] } : post));
    }
  };

  return (
    <div className={darkMode ? "bg-gray-900 text-white min-h-screen" : "bg-gray-100 min-h-screen"}>
      <div className="flex p-4 bg-white shadow-md justify-between items-center">
        <h1 className="text-2xl text-blue-700 font-bold flex items-center">
          <FaLinkedin className="mr-2" /> LinkedIn
        </h1>
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 bg-gray-200 rounded-full">
          {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-700" />}
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 p-4 bg-white shadow-md">
          <ul>
            <li className="flex items-center text-gray-700 cursor-pointer mb-4"><AiOutlineHome className="mr-2" /> Home</li>
            <li className="flex items-center text-gray-700 cursor-pointer mb-4"><MdWorkOutline className="mr-2" /> Jobs</li>
            <li className="flex items-center text-gray-700 cursor-pointer mb-4"><AiOutlineMessage className="mr-2" /> Messaging</li>
            <li className="flex items-center text-gray-700 cursor-pointer mb-4"><IoMdNotificationsOutline className="mr-2" /> Notifications</li>
          </ul>
        </div>

        {/* Feed */}
        <div className="w-1/2 p-4">
          <div className="bg-white p-4 rounded shadow-md mb-4 flex items-center">
            <FaUserCircle className="text-gray-500 text-2xl mr-2" />
            <input type="text" placeholder="Start a post..." className="flex-1 p-2 border rounded" value={newPost} onChange={(e) => setNewPost(e.target.value)} />
            <button onClick={addPost} className="bg-blue-600 text-white px-4 py-2 rounded ml-2">Post</button>
          </div>

          {posts.map((post) => (
            <div key={post.id} className="bg-white p-4 rounded shadow-md mb-4">
              <h3 className="font-bold text-gray-700 flex items-center">
                <FaUserCircle className="mr-2 text-gray-500" /> {post.user}
              </h3>
              <p className="text-gray-600 mt-2">{post.text}</p>
              <div className="flex items-center mt-2">
                <button onClick={() => likePost(post.id)} className="flex items-center text-gray-600 mr-4">
                  <AiOutlineLike className="mr-1" /> {post.likes}
                </button>
                <input type="text" placeholder="Comment..." className="border rounded p-1 flex-1" onKeyDown={(e) => e.key === 'Enter' && addComment(post.id, e.target.value)} />
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
        <div className="w-1/4 p-4 bg-white shadow-md">
          <h2 className="font-bold text-gray-700 mb-2">Job Listings</h2>
          <p className="text-gray-600">🔹 Frontend Developer - Google</p>
          <p className="text-gray-600">🔹 Backend Engineer - Amazon</p>
          <p className="text-gray-600">🔹 Data Analyst - Microsoft</p>
        </div>
      </div>
    </div>
  );
};

export default Linked;
