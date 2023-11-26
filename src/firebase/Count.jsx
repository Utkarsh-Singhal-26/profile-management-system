import { collection, getCountFromServer } from "firebase/firestore";
import { db } from "./firebase";

async function Count() {
  const querySnapshot = await getCountFromServer(collection(db, "records"));
  const size = querySnapshot.data().count;
  return size;
}

export default Count;
