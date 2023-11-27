import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "./firebase";

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
    throw error;
  }
}

async function writeData(id, data, image, resume) {
  if (!id || !data || !image || !resume) {
    return alert("Fill All Fields.");
  }
  try {
    const [imageURL, resumeURL] = await writeStorage(id, image, resume);
    await setDoc(doc(db, "records", id), {
      ...data,
      image: imageURL,
      resume: resumeURL,
    });

    window.location.href = "/";
  } catch (error) {
    console.error("Error Adding : ", error);
  }
}

export default writeData;
