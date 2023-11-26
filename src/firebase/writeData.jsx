import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "./firebase";
import { useNavigate } from "react-router-dom";

async function writeStorage(id, image, resume) {
  try {
    const imageRef = ref(storage, `images/${id}`);
    await uploadBytes(imageRef, image);
    const imageURL = await getDownloadURL(imageRef);

    const resumeRef = ref(storage, `resume/${id}`);
    await uploadBytes(resumeRef, resume);
    const resumeURL = await getDownloadURL(resumeRef);

    return [imageURL, resumeURL];
  } catch (error) {
    console.log("error");
  }
}

async function writeData(id, data, image, resume) {
  const navigate = useNavigate();
  try {
    const [imageURL, resumeURL] = await writeStorage(id, image, resume);
    await setDoc(doc(db, "records", id), {
      ...data,
      image: imageURL,
      resume: resumeURL,
    });

    navigate("/");
  } catch (error) {
    console.error("Error Adding : ", error);
  }
}

export default writeData;
