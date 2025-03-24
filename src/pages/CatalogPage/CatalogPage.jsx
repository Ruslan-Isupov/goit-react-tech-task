import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCampers } from "../../redux/camperOps";
import CampersFilters from "../../components/CampersFilters/CampersFilters";
import CamperList from "../../components/CamperList/CamperList";
import css from "./CatalogPage.module.css";

import {
  selectItemsPerPage,
  selectFiltersEquipment,
  selectFormType,
  selectLocation,
} from "../../redux/selectors";
import filters from "../../utils/filters";
import { resetCurrentPage } from "../../redux/trucksSlice";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const limit = useSelector(selectItemsPerPage);
  const location = useSelector(selectLocation);
  const equipment = useSelector(selectFiltersEquipment);
  const form = useSelector(selectFormType);

  useEffect(() => {
    dispatch(resetCurrentPage());
    const params = filters({
      page: 1,
      limit,
      location,
      equipment,
      form,
    });
    dispatch(getAllCampers(params));
  }, [dispatch, limit, location, equipment, form]);

  return (
    <div className={css.wrapper}>
         
      <CampersFilters />
      <CamperList />
      </div>
   
  );
};
export default CatalogPage;
