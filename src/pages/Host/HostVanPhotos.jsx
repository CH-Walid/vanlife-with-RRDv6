import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const {van: {name, imageUrl}} = useOutletContext();
  
  return (
    <img src={imageUrl} alt={name} className="host-van-detail-image" />
  )
}
export default HostVanPhotos