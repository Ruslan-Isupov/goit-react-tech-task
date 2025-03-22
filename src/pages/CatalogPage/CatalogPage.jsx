import CamperList from "../../components/CamperList/CamperList";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <div className={css.wrapper}>
      <CamperList />
    </div>
  );
};
export default CatalogPage;
