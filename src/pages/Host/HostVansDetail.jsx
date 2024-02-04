import { useParams } from "react-router-dom"

const HostVansDetail = () => {
  const {id} = useParams();
  return (
    <div>HostVansDetail for van id : {id}</div>
  )
}
export default HostVansDetail