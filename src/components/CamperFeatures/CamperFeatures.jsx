import { selectCurrentCamper } from "../../redux/selectors";
import { useSelector } from "react-redux";


import OptionsList from "../OptionsList/OptionList";
import VehicleDetailsList from "../VehicleDetailsList/VehicleDetailsList";
import BookingForm from "../BookingForm/BookingForm";


import css from "./CamperFeatures.module.css";
const CamperFeatures = () => {
  

 const truck = useSelector(selectCurrentCamper);
 console.log(truck)
  return (
    <div className={css.featuresContainer}>
      <div className={css.contentWrapper}>
        <div className={css.specificationListWrapper}>
          <OptionsList truck={truck} />
        </div>
        <div className={css.specificationListWrapper}>
          <h3 className={css.title}>Vehicle details</h3>
          <VehicleDetailsList truck={truck} />
        </div>
      </div>
      <BookingForm />
    </div>
  )
};

export default CamperFeatures;
