import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

async function readData(id) {
  const docSnap = await getDoc(doc(db, "records", id));
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
}

export default readData;
