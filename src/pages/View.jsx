import React, { useEffect, useState } from "react";
import "./View.css";
import { ChevronLeftCircle } from "lucide-react";
import listData from "../firebase/listData";
import { Link, useNavigate } from "react-router-dom";

const View = () => {
  const navigate = useNavigate();
  const [records, setRecords] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recordsElements = await listData({
          onCreateClick: handleClick,
        });
        setRecords(recordsElements);
      } catch (error) {
        console.error("Error fetching records:", error);
      }
    };

    fetchData();
  }, [navigate]);

  useEffect(() => {
    if (!records) return;
    if (records.length === 0) {
      navigate("/");
      setRedirected(true);
    }
  }, [navigate, records]);

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
            <th>Options</th>
          </tr>
        </thead>

        <tbody className="View--body">{records}</tbody>
      </table>
    </div>
  );
};

export default View;
