import { useEffect, useState } from "react";
import * as C from "./App.styles";
import * as Photos from "./services/photos"
import { Photo } from "./types/Photo";
import Loader from "./components/Loader"


function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([])

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);

      setPhotos(await Photos.getAll());

      setLoading(false);
    }
    getPhotos();
  }, [])

  const handlePhotoList = () => {
    return photos.map((item, index) => <div key={`photoList-${index}`}>{item.name}</div>);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>
        {/* Area de upload */}
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

export default App