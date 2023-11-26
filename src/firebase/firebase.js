import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import app from "./app";

export const db = getFirestore(app);
export const storage = getStorage();
