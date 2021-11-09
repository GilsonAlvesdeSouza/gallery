import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import { v4 as createId } from "uuid";
import { storage } from "../libs/firebase";
import { Photo } from "../types/Photo";

export const getAll = async (): Promise<Photo[]> => {
    let list: Photo[] = [];

    const imagesFolder = ref(storage, "images");
    const photoList = await listAll(imagesFolder);

    for (const i in photoList.items) {
        let photoUrl = await getDownloadURL(photoList.items[i]);

        list.push({
            name: photoList.items[i].name,
            url: photoUrl
        });
    }
    return list;
};

export const insert = async (file: File) => {
    if(["image/jpeg", "image/png", "image/jpg"].includes(file.type) ){
        let randomName = createId();
        let newFile = ref(storage, `images/${randomName}`);

        let upload = await uploadBytes(newFile, file);
        let photoUrl = await getDownloadURL(upload.ref);

        return {
            name: upload.ref.name,
            url: photoUrl,
        } as Photo;
    }

    return new Error("Formato ou tipo de arquivo não permitido");
};