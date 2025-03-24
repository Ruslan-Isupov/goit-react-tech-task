import { useState } from "react";
import { useDispatch } from "react-redux";

import css from "./CampersFilters.module.css";
import icons from "../../assets/icons.svg";

import {
  setLocation,
  toggleFilters,
  setFormType,
} from "../../redux/filtersSlice";

const CampersFilters = () => {
  const equipmentOptions = {
    AC: false,
    automatic: false,
    kitchen: false,
    TV: false,
    bathroom: false,
  };
  const type = [
    { name: "Van", value: "van" },
    { name: "Fully Integrated", value: "fullyintegrated" },
    { name: "Alcove", value: "alcove" },
  ];

  const [locationTrucks, setLocationTrucks] = useState("");
  const [selectedEquipment, setSelectedEquipment] = useState(equipmentOptions);
  const [vehicleType, setVehicleType] = useState("");

  const dispatch = useDispatch();
  const options = Object.keys(selectedEquipment);

  const handleEquipmentChange = (e) => {
    const { name, checked } = e.target;
    setSelectedEquipment((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleTypeClick = (value) => {
    if (vehicleType === value) {
      setVehicleType("");
    } else {
      setVehicleType(value);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    // dispatch(resetCurrentPage());
    // dispatch(getAllCampers());
    dispatch(setLocation(locationTrucks));
    dispatch(toggleFilters(selectedEquipment));
    dispatch(setFormType(vehicleType));
  };

  return (
    <form className={css.form} onSubmit={handleSearch}>
      <div className={css.locationInputWrapper}>
        <label className={css.locLabel} htmlFor="location-select">
          Location
        </label>
        <div className={css.inputBox}>
          <svg className={css.locationIcon}>
            <use href={`${icons}#icon-map`} />
          </svg>
          <input
            className={css.customInput}
            type="text"
            placeholder="City"
            value={locationTrucks}
            onChange={(e) => setLocationTrucks(e.target.value)}
          />
        </div>
      </div>

      <p className={css.filtersTitle}>Filters</p>

      <div className={css.equipmentContainer}>
        <p className={css.text}>Vehicle equipment</p>
        <hr className={css.line} />
        <ul className={css.equipmentList}>
          {options.map((item) => (
            <li key={item} className={css.listItem}>
              <label
                className={`${css.label} ${
                  selectedEquipment[item] ? css.checked : ""
                }`}
              >
                <input
                  className={css.input}
                  type="checkbox"
                  id={`equipment-${item}`}
                  name={item}
                  checked={selectedEquipment[item]}
                  onChange={handleEquipmentChange}
                />
                <div className={css.contentWrapper}>
                  <svg width={32} height={32}>
                    <use href={`${icons}#icon-${item.toLowerCase()}`} />
                  </svg>
                  <span>{item}</span>
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className={css.vehicleTypeContainer}>
        <p className={css.text}>Vehicle type</p>
        <hr className={css.line} />
        <ul className={css.equipmentList}>
          {type.map(({ name, value }) => (
            <li key={value} className={css.listItem}>
              <label
                className={`${css.label} ${
                  vehicleType === value ? css.checked : ""
                }`}
              >
                <input
                  className={css.input}
                  type="radio"
                  name="vehicleType"
                  value={value}
                  aria-label={name}
                  onClick={() => handleTypeClick(value)}
                />
                <div className={css.contentWrapper}>
                  <svg width={32} height={32}>
                    <use href={`${icons}#icon-${value}`} />
                  </svg>
                  <span>{name}</span>
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <button type="submit" className={css.searchButton}>
        Search
      </button>
    </form>
  );
};

export default CampersFilters;
