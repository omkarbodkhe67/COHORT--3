import React, { useEffect, useState } from 'react';

const Feed = () => {
  const [currTab, setCurrTab] = useState("1");
  const [tabData, setTabData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching data for tab:", currTab);
    
    setLoading(true); // Reset loading state before fetching new data

    fetch(`https://jsonplaceholder.typicode.com/todos/${currTab}`)
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const json = await res.json();
        setTabData(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });

  }, [currTab]);

  return (
    <div>
      <button onClick={() => setCurrTab("1")}
        style={{ color: currTab === "1" ? "red" : "black" }}>
        Todo 1
      </button>

      <button onClick={() => setCurrTab("2")}
        style={{ color: currTab === "2" ? "red" : "black" }}>
        Todo 2
      </button>

      <button onClick={() => setCurrTab("3")}
        style={{ color: currTab === "3" ? "red" : "black" }}>
        Todo 3
      </button>

      <button onClick={() => setCurrTab("4")}
        style={{ color: currTab === "4" ? "red" : "black" }}>
        Todo 4
      </button>

      <h3>Todo Title:</h3>
      {loading ? "Loading..." : tabData.title}
    </div>
  );
}

export default Feed;
