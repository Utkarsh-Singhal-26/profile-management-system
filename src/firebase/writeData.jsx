import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "./firebase";
import { toast } from "react-toastify";
import { ShieldAlert, CheckCheck } from "lucide-react";

async function writeStorage(id, image, resume) {
  toast.loading("Uploading Image and Resume .....");
  try {
    const imageRef = ref(storage, `images/${id}`);
    await uploadBytes(imageRef, image);
    const imageURL = await getDownloadURL(imageRef);

    const resumeRef = ref(storage, `resume/${id}`);
    await uploadBytes(resumeRef, resume);
    const resumeURL = await getDownloadURL(resumeRef);

    toast.dismiss();
    return [imageURL, resumeURL];
  } catch (error) {
    throw error;
  }
}

async function writeData(id, data, image, resume) {
  if (!id || !data || (image === './upload.png') || !resume) {
    toast.error("Fill All Fields!", {
      icon: ({ theme, type }) => <ShieldAlert />,
      closeButton: false,
    });
    return;
  }
  try {
    const [imageURL, resumeURL] = await writeStorage(id, image, resume);
    await toast.promise(
      setDoc(doc(db, "records", id), {
        ...data,
        image: imageURL,
        resume: resumeURL,
      }),
      {
        pending: "Saving Record .....",
        success: {
          render() {
            return "Record Added Successfully!";
          },
          icon: ({ theme, type }) => <CheckCheck />,
          closeButton: false,
        },
        error: {
          render() {
            return "Error Adding Record. Please try again later.";
          },
          icon: ({ theme, type }) => <ShieldAlert />,
          closeButton: false,
        },
      }
    );

    window.location.href = "/";
  } catch (error) {
    toast.error("Error Adding Record. Please try again later.", {
      icon: ({ theme, type }) => <ShieldAlert />,
      closeButton: false,
    });
  }
}

export default writeData;
