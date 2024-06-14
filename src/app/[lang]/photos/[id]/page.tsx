import PhotoDetails from "../../../../components/PhotoDetails";

type TPhotoDetailsPageProps = {
  params: Record<string, any>;
};

const PhotoDetailsPage = ({ params: { id, lang } }: TPhotoDetailsPageProps) => {
  return <PhotoDetails id={id} lang={lang} />;
};

export default PhotoDetailsPage;
