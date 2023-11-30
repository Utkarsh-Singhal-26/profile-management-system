import { doc, deleteDoc, getDocs, collection } from "firebase/firestore";
import { db, storage } from "./firebase";
import { deleteObject, ref } from "firebase/storage";

async function deleteData(id) {
  const deleteImgRef = ref(storage, `images/${id}`);
  const deleteResumeRef = ref(storage, `resume/${id}`);

  try {
    if (deleteObject(deleteImgRef) && deleteObject(deleteResumeRef)) {
      await deleteDoc(doc(db, "records", id));

      const snapshot = await getDocs(collection(db, "records"));
      if (snapshot.docs.length === 0) {
        window.location.href = "/";
      } else {
        window.location.reload();
      }
    }
  } catch (error) {
    console.error("Error Deleting: ", error);
  }
}

export default deleteData;
