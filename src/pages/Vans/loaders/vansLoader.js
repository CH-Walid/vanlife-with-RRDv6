import { getHostVans, getVans } from "../../../api";

const loader = () => {
  return getVans();
};
export default loader;

export const vanDetailLoader = ({params}) => {
  const {id} = params;
  return getVans(id)
}

export const hostVansLoader = () => {
  return getHostVans();
}

export const hostVansDetailLoader = ({params}) => {
  return getHostVans(params.id);
}