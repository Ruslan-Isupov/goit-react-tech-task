import css from "./CamperItem.module.css";
import { Link } from "react-router-dom";
import FeatureIcon from "../FeatureIcon/FeatureIcon";
import icons from "../../assets/icons.svg";


const CamperItem = ({ camperDetails }) => {
  const features = [];
  if (camperDetails.AC) features.push("AC");
  if (camperDetails.TV) features.push("TV");
  if (camperDetails.kitchen) features.push("Kitchen");
  if (camperDetails.bathroom) features.push("Bathroom");

  return (
    <>
      <img
        className={css.img}
        src={camperDetails.gallery[0].thumb}
        alt={camperDetails.name}
        width={292}
        height={320}
      />
      <div>
        <div className={css.mainInfo}>
          <p className={css.title}>{camperDetails.name} </p>
          <div className={css.wrapperItem}>
            <p className={css.price}>€{camperDetails.price}</p>

            <button>
              <svg
                width={24}
                height={24}
                className={css.icon}
                aria-label="Add to favorites"
              >
                <use href={`${icons}#icon-heart`} />
              </svg>
            </button>
          </div>
        </div>

        <div className={css.wrapperItemRating}>
          <div className={css.item}>
            <svg width={16} height={16} aria-label="Rating">
              <use href={`${icons}#icon-star`} />
            </svg>
            <p className={css.camperPar}>
              {" "}
              {`${camperDetails.rating}(${camperDetails.reviews.length} Reviews)`}{" "}
            </p>
          </div>
          <div className={css.itemLocation}>
            <svg width={16} height={16} aria-label="Location">
              <use href={`${icons}#icon-map`} />
            </svg>

            <p className={css.camperPar}> {camperDetails.location} </p>
          </div>
        </div>

        <p className={css.description}>
          {camperDetails.description.slice(0, 80) + "..."}
        </p>
        <ul className={css.listIcon}>
          {features.map((feature) => (
            <FeatureIcon key={feature} feature={feature} />
          ))}
        </ul>

        <Link className={css.btnShowMore} to={`/catalog/${camperDetails.id}`}>
          Show more
        </Link>
      </div>
    </>
  );
};

export default CamperItem;
