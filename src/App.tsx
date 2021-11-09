import { FormEvent, useEffect, useState } from "react";
import * as C from "./App.styles";
import Loader from "./components/Loader";
import PhotoItem from "./components/PhotoItem";
import * as Photos from "./services/photos";
import { Photo } from "./types/Photo";


function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [upload, setUpload] = useState(false);

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);

      setPhotos(await Photos.getAll());

      setLoading(false);
    }
    getPhotos();
  }, [])

  const handlePhotoList = () => {
    return photos.map((item: Photo, index: any) => <PhotoItem key={`photo-${index}`} item={item} />);
  }

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const file = formData.get('image') as File;

    if (file && file.size > 0) {
      setUpload(true);
      let result = await Photos.insert(file);
      setUpload(false);

      if(result instanceof Error){
        alert(`${result.name} - ${result.message}`);
      }else{
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setPhotos(newPhotoList);
      }
    }

  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>

        <C.UploadForm method="POST" onSubmit={handleFormSubmit}>
          <input type="file" name="image" />
          <input type="submit" value="Enviar" />
          {upload && "Enviando..." }
        </C.UploadForm>

        {loading && <Loader />}

        {!loading && photos.length > 0 &&
          <C.PhotoList>
            {handlePhotoList()}
          </C.PhotoList>
        }

        {!loading && photos.length === 0 &&
          <C.ScreenWarning>
            <div className="emoji">😕️</div>
            <>Não há fotos cadastradas.</>
          </C.ScreenWarning>
        }
      </C.Area>
    </C.Container>
  )
}

export default App;