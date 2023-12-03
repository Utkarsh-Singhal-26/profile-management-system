import React, { useEffect, useState } from "react";
import "./Create.css";
import { ChevronLeftCircle } from "lucide-react";
import { nanoid } from "nanoid";
import { Link, useParams } from "react-router-dom";
import Image from "../components/Image";
import Qualification from "../components/Qualification";
import writeData from "../firebase/writeData";
import readData from "../firebase/readData";
import deleteData from "../firebase/deleteData";
import { fileName } from "../utils/fileName";

const Create = () => {
  const { id } = useParams();
  const nanoID = nanoid();

  const [data, setData] = useState({
    name: "",
    contact: 0,
    email: "",
    address: "",
    resume_name: "",
  });
  const [qualification, setQualification] = useState([]);
  const [image, setImage] = useState("./upload.png");
  const [resume, setResume] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const record = await readData(id);
        if (record !== null) {
          setData({
            name: record.name || "",
            contact: record.contact || 0,
            email: record.email || "",
            address: record.address || "",
          });
          setQualification(record.qualification || []);
          setImage(record.image || "./upload.png");
          setResume(record.resume || null);
        } else {
          window.location.href = "/";
        }
      } catch (error) {
        console.error("Error fetching record:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const handleChange = (e, isNumber = false) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: isNumber ? Number(value) : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setResume(file);
    setData((prev) => ({ ...prev, resume_name: file.name }));
  };

  return (
    <div className="Create">
      <div className="topBar">
        <div>
          <Link to="/">
            <ChevronLeftCircle size={28} />
          </Link>
        </div>
        <h1>Create Records</h1>
      </div>
      <div className="top">
        <div className="left">
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="new-password"
            value={data.name}
            onChange={handleChange}
            className="second-column"
          />

          <label htmlFor="contact">Contact : </label>
          <input
            type="number"
            name="contact"
            id="contact"
            autoComplete="new-password"
            value={data.contact !== 0 ? data.contact : ""}
            onChange={(e) => handleChange(e, true)}
            className="second-column"
          />

          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="new-password"
            value={data.email}
            onChange={handleChange}
            className="second-column"
          />

          <label htmlFor="address">Address : </label>
          <input
            type="address"
            name="address"
            id="address"
            autoComplete="new-password"
            value={data.address}
            onChange={handleChange}
            className="second-column"
          />

          <label htmlFor="qualification">Qualification : </label>
          <Qualification qual={qualification} setQual={setQualification} />

          <label htmlFor="resume">Resume : </label>

          {resume ? (
            <div className="resume-name second-column">
              {fileName(data.resume_name)}
              <div className="create-buttons">
                <label htmlFor="resume" className="resume-input">
                  Update Resume
                </label>
                <input
                  type="file"
                  name="resume"
                  id="resume"
                  accept="application/pdf"
                  className="file"
                  onChange={handleFileChange}
                />
                <button className="hover">
                  <Link to={`${URL.createObjectURL(resume)}`} target="_blank">
                    View Resume
                  </Link>
                </button>
              </div>
            </div>
          ) : (
            <>
              <label htmlFor="resume" className="file-input second-column">
                Select File to Upload
              </label>
              <input
                type="file"
                name="resume"
                id="resume"
                accept="application/pdf"
                className="file"
                onChange={handleFileChange}
              />
            </>
          )}
        </div>

        <div className="right">
          <Image image={image} setImage={setImage} />
        </div>
      </div>

      <div className="bottom">
        <button
          className="hover-even"
          onClick={() =>
            writeData(id || nanoID, data, qualification, image, resume)
          }
        >
          Save Record
        </button>
        <button
          className="hover"
          onClick={() => deleteData(id || nanoID, true)}
        >
          Delete Record
        </button>
      </div>
    </div>
  );
};

export default Create;
