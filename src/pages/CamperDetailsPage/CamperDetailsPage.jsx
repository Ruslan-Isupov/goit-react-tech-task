
import CamperDetails from "../../components/CamperDetails/CamperDetails";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router";
import { useEffect } from "react";
import { NavLink } from "react-router";


import { selectCurrentCamper, selectLoader } from "../../redux/selectors";
import { getCamperById } from "../../redux/camperOps";
import css from "./CamperDetailsPage.module.css";





export default function CamperDetailsPage() {
  const dispatch = useDispatch();
  const truck = useSelector(selectCurrentCamper);
  const loader = useSelector(selectLoader);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCamperById(id));
  }, [dispatch, id]);

  return (
    <div className={css.mainWrapper}>
      {loader && "loading"}
      {truck && (
        <>
          <CamperDetails />
          <ul className={css.TruckDetails}>
            <li>
           
              <NavLink to="features">
                Features
              </NavLink>
            </li>
            <li>
            
                        <NavLink to="reviews">
                Reviews
              </NavLink>
            </li>
          </ul>
      
        </>
      )}
    </div>
  );
}