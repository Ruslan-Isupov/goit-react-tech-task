import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";
import { appendTrucks } from "../../redux/trucksSlice";
import { getAllCampers } from "../../redux/camperOps";

import css from "./CampersFilters.module.css";
import iconsSpritePath from "../../assets/icons.svg";

const CatalogFilters = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState("");
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [vehicleType, setVehicleType] = useState("");

  const equipmentOptions = ["AC", "Automatic", "Kitchen", "TV", "Bathroom"];
  const vehicleTypes = ["Van", "Fully Integrated", "Alcove"];

  const iconMapping = {
    AC: "icon-ac",
    Automatic: "icon-diagram",
    Kitchen: "icon-kitchen",
    TV: "icon-tv",
    Bathroom: "icon-bathroom",
    Van: "icon-van",
    "Fully Integrated": "icon-integrated",
    Alcove: "icon-alcove",
  };

  const vehicleTypeMapping = {
    Van: "van",
    "Fully Integrated": "fullyIntegrated",
    Alcove: "alcove",
  };

  const handleEquipmentChange = (option) => {
    setSelectedEquipment((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleVehicleTypeChange = (type) => {
    setVehicleType((prevType) => (prevType === type ? "" : type));
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    dispatch(setFilter({ key: "location", value: location }));
    dispatch(setFilter({ key: "equipment", value: selectedEquipment }));
    dispatch(setFilter({ key: "type", value: vehicleType }));

    const params = {
      ...(location && { location }),
      ...(vehicleType && { form: vehicleTypeMapping[vehicleType] }),
      ...(selectedEquipment.includes("AC") && { AC: true }),
      ...(selectedEquipment.includes("TV") && { TV: true }),
      ...(selectedEquipment.includes("Kitchen") && { kitchen: true }),
      ...(selectedEquipment.includes("Bathroom") && { bathroom: true }),
      ...(selectedEquipment.includes("Automatic") && {
        autoTransmission: true,
      }),
    };

    try {
      const data = await getAllCampers(params);
      dispatch(appendTrucks(data.items));
    } catch (error) {
      console.error("Error fetching vehicles:", error);
    }
  };

  return (
    <form className={css.form} onSubmit={handleSearch}>
      <div className={css.locationInputContainer}>
        <label className={css.locLabel} htmlFor="location-select">
          Location
        </label>
        <div className={css.selectWrapper}>
          <svg className={css.locationIcon}>
            <use href={`${iconsSpritePath}#icon-map`} />
          </svg>
          {/* <select
          className={css.customSelect}
          id="location-select"
          value={selectedLocation}
          onChange={handleChange}
        >
          <option value="">City</option>
          {citiList.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select> */}
          <input
            className={css.customSelect}
            type="text"
            // className={css.locationInput}
            placeholder="City"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/*               
                <svg className={css.locationIcon}>
                    <use href={`${iconsSpritePath}#icon-map`} />
                </svg>
                <input
                    type="text"
                    className={css.locationInput}
                    placeholder="Ukraine, Kyiv"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                /> */}
      </div>

      <p className={css.filtersTitle}>Filters</p>
      <div className={css.equipmentContainer}>
        <p className={css.text}>Vehicle equipment</p>
         <hr className={css.line} />
        <ul className={css.inputsWrapper}>
          {equipmentOptions.map((option) => (
            <li key={option} className={css.listItem}>
              {/* <label
              className={`${css.label} ${filters[item] ? css.checked : ""}`}
            > */}
              <label htmlFor={`equipment-${option}`} className={css.label}>
                <input
                  className={css.input}
                  type="checkbox"
                  id={`equipment-${option}`}
                  name="equipment"
                  value={option}
                  checked={selectedEquipment.includes(option)}
                  onChange={() => handleEquipmentChange(option)}

                  // onClick={() => handleClick(value)}
                />
                <div className={css.contentWrapper}>
                  <svg width={32} height={32}>
                    <use href={`${iconsSpritePath}#${iconMapping[option]}`} />
                  </svg>
                  <span>{option}</span>
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className={css.vehicleTypeContainer}>
        <p className={css.text}>Vehicle type</p>
         <hr className={css.line} />
        <ul className={css.inputsWrapper}>
          {vehicleTypes.map((type) => (
            <li key={type} className={css.listItem}>
              {/* <label
              className={`${css.label} ${
                selectedFormType === value ? css.checked : ""
              }`}
            ></label> */}
              <label htmlFor={`vehicleType-${type}`} className={css.label}>
                <input
                  className={css.input}
                  type="radio"
                  id={`vehicleType-${type}`}
                  name="vehicleType"
                  value={type}
                  aria-label={type}
                  checked={vehicleType === type}
                  onClick={() => handleVehicleTypeChange(type)}
                />
                <div className={css.contentWrapper}>
                  <svg width={32} height={32}>
                    <use href={`${iconsSpritePath}#${iconMapping[type]}`} />
                  </svg>
                  <span>{type}</span>
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

export default CatalogFilters;
