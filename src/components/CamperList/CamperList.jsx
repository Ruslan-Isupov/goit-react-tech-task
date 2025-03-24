import css from "./CamperList.module.css";
import CamperItem from "../CamperItem/CamperItem";
import { getAllCampers } from "../../redux/camperOps";
import { useDispatch, useSelector } from "react-redux";
import { incrementCurrentPage } from "../../redux/trucksSlice";
import {
  selectTrucks,
  selectLoader,
  selectError,
  selectCurrentPage,
  selectItemsPerPage,
  selectFiltersEquipment,
  selectFormType,
  selectLocation,
  selectHasLoadMore
} from "../../redux/selectors";
import filters from "../../utils/filters";

const CamperList = () => {
  const dispatch = useDispatch();

 
 
  const trucks = useSelector(selectTrucks);
  const loader = useSelector(selectLoader);
  const error = useSelector(selectError)
  const currentPage = useSelector(selectCurrentPage);
  const limit = useSelector(selectItemsPerPage);
  const location = useSelector(selectLocation);
  const equipment = useSelector(selectFiltersEquipment);
  const form = useSelector(selectFormType,);
  const hasLoadMore = useSelector(selectHasLoadMore);
  


  const handleLoadMore = async () => {
  
    dispatch(incrementCurrentPage());
     const params = filters({
      page: currentPage + 1,
      limit,
      location,
      equipment,
      form,
    });
    dispatch(getAllCampers(params));
  };

  return (
     <>
      {error ? (
        <div className={css.container}>
          <h2 className={css.title}>No Trucks Found</h2>
          <div>
            <p>No trucks found for your criteria</p>
            <p> Please, try enter other criterias</p>
          </div>
        </div>
      ) : (
       <div className={css.campersListWrapper}>
       <ul className={css.campersList}>
 
            {trucks.map((camper) => (
                    <li className={css.campersListItem} key={camper.id} >
                        <CamperItem camperDetails={camper} />
                    </li>
                ))}
            </ul>
            {/* {loader && <Loader />} */}
            {loader && "Завантаження"}
            {hasLoadMore && (
              <button className={css.btnMore} onClick={handleLoadMore} >
                {loader ? "Loading..." : "Load more"}
              </button>
            )}
    </div>
      )}
    </>
 );
};

export default CamperList;
