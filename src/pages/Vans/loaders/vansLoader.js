import { getVans } from "../../../api";

const loader = () => {
  return getVans();
};
export default loader;