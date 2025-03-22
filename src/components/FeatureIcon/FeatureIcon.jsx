import iconsSpriteFeatures from '../../assets/icons.svg';
import css from "./FeatureIcon.module.css";
const FeatureIcon = ({ feature }) => {
    return (
        <div className={css.iconBox}>
            <svg className={css.icon} >
                <use href={`${iconsSpriteFeatures}#icon-${feature.toLowerCase()}`} />
            </svg>
            <span>{feature}</span>
        </div>
    );
};

export default FeatureIcon;