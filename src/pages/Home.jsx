import React, { useEffect, useState } from "react";
import "./Home.css";
import Count from "../firebase/Count";
import {Link} from 'react-router-dom'

const Home = () => {
  const [size, setSize] = useState(0);

  useEffect(() => {
    const size = async () => {
      const value = await Count();
      setSize(value);
    };
    size();
  }, []);

  return (
    <div className="Home">
      <h1>React Firebase</h1>
      <div className="info">
        <label htmlFor="records">Number of Records : </label>
        <input type="text" id="records" name="records" value={size} disabled />
      </div>
      <div className="buttons">
        <button className="hover">
          <Link to="/create">Create Record</Link>
        </button>
        {size !== 0 ? (
          <button className="hover">
            <Link to="/view">View Records</Link>
          </button>
        ) : (
          <button disabled>View Records</button>
        )}
      </div>
    </div>
  );
};

export default Home;
