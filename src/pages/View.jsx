import React, { useEffect, useState } from "react";
import "./View.css";
import { ChevronLeftCircle } from "lucide-react";
import listData from "../firebase/listData";
import { Link, useNavigate } from "react-router-dom";

const View = () => {
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);
  const [redirected, setRedirected] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recordsElements = await listData({
          onCreateClick: handleClick,
          navigate,
        });
        setRecords(recordsElements);
      } catch (error) {
        console.error("Error fetching records:", error);
      }
    };

    fetchData();
  }, [navigate]);

  useEffect(() => {
    if (records.length === 0 && !redirected) {
      navigate("/");
      setRedirected(true);
    }
  }, [navigate, records, redirected]);

  const handleClick = (id) => {
    navigate(`/create/${id}`);
  };

  return (
    <div className="View">
      <div className="topBar">
        <div>
          <Link to="/">
            <ChevronLeftCircle size={28} />
          </Link>
        </div>
        <h1>View Records</h1>
      </div>
      <table>
        <thead className="View--header">
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Image</th>
          </tr>
        </thead>

        <tbody className="View--body">{records}</tbody>
      </table>
    </div>
  );
};

export default View;
