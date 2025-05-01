import React, { useState } from "react";
import { useFetch } from "./hooks/useFetch";

const UseFetchHook = () => {
  const [currentPost, setCurrentPost] = useState(1);
  const { finalData, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + currentPost,
    10
  );

  if (loading) {
    return;
    <div>Loading.......</div>;
  }
  return (
    <div>
      <button onClick={() => setCurrentPost(1)}>1</button>
      <button onClick={() => setCurrentPost(2)}>2</button>
      <button onClick={() => setCurrentPost(3)}>3</button>
      <br />

      {JSON.stringify(finalData)}
    </div>
  );
};

export default UseFetchHook;
