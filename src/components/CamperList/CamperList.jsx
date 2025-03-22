import css from "./CamperList.module.css";
import CamperItem from "../CamperItem/CamperItem";
import { useEffect } from "react";
import { getAllCampers } from "../../redux/camperOps";

import { useDispatch, useSelector } from "react-redux";
// import { appendTrucks ,incrementCurrentPage} from "../../redux/trucksSlice";
import { incrementCurrentPage } from "../../redux/trucksSlice";
import {
  selectTrucks,
  selectLoader,
  // selectError,
  selectCurrentPage,
  selectItemsPerPage,
  // incrementCurrentPage,
} from "../../redux/selectors";

const CamperList = () => {
  const dispatch = useDispatch();

  const trucks = useSelector(selectTrucks);
  const loader = useSelector(selectLoader);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);

  useEffect(() => {
    dispatch(getAllCampers({ page: currentPage, limit: itemsPerPage }));
  }, [dispatch, currentPage, itemsPerPage]);

  const loadMore = async () => {
    dispatch(incrementCurrentPage());
  };

  return (
    <div className={css.campersListWrapper}>
       <ul className={css.campersList}>
 
            {trucks.map((camper) => (
                    <li className={css.campersListItem} key={camper.id} >
                        <CamperItem camperDetails={camper} />
                    </li>
                ))}
      </ul>
        <button className={css.btnMore} onClick={loadMore} >
         {loader ? "Loading..." : "Load more"}
        </button>
        
    </div>
  );
};

export default CamperList;
