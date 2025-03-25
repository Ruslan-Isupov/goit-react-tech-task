
import CamperDetails from "../../components/CamperDetails/CamperDetails";
import Loader from '../../components/Loader/Loader'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Link, Outlet, useParams } from "react-router-dom";
import clsx from "clsx";


import { selectCurrentCamper, selectLoader } from "../../redux/selectors";
import { getCamperById } from "../../redux/camperOps";
import css from "./CamperDetailsPage.module.css";


  const getLinkClass = (path) => {
    return clsx(css.link, {
      [css.active]: location.pathname === path,
    });
  };

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
      {/* {loader && "loading"} */}
       {loader && <Loader loading={loader}/>}
      {truck && (
        <>
          <CamperDetails />
          <ul className={css.TruckDetails}>
            <li>
           
               <Link
                  className={getLinkClass(`/catalog/${id}/features`)}
                  to={`/catalog/${id}/features`}
                >
                  Features
                </Link>
            </li>
            <li>
            
               <Link
                  className={getLinkClass(`/catalog/${id}/reviews`)}
                  to={`/catalog/${id}/reviews`}
                >
                  Reviews
                </Link>
            </li>
          </ul>
        <Outlet />
        </>
      )}
    </div>
  );
}