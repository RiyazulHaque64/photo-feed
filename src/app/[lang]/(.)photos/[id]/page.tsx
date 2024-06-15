import Modal from "@/components/Modal";
import PhotoDetails from "@/components/PhotoDetails";

type TPhotoModalProps = {
  params: Record<string, any>;
};

const PhotoModal = ({ params: { id, lang } }: TPhotoModalProps) => {
  return (
    <Modal>
      <PhotoDetails id={id} lang={lang} />
    </Modal>
  );
};

export default PhotoModal;
