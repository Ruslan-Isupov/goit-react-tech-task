import { PuffLoader } from "react-spinners";
import css from './Loader.module.css';




const Loader = ({ loading }) => {
  return (
    <div className={css.loader}>
      <PuffLoader color="#db3734" loading={loading} size={80} />
    </div>
  );
};

export default Loader;

