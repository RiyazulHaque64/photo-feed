import { TPhoto } from "@/types/photo";
import PhotoCard from "./PhotoCard";

const PhotoList = ({ photos }: { photos: TPhoto[] }) => {
  return (
    <div className="img-grid">
      {photos?.map((photo: TPhoto) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoList;
