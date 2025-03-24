import { useSelector } from "react-redux";

import { selectFiltersEquipment, selectFormType } from "../../redux/selectors";

import { Options } from "./Options";
import icons from "../../assets/icons.svg";
import css from "./OptionsList.module.css";

export default function SpecificationList({ truck }) {
  const specifications = Options(truck);
  const equipment = useSelector(selectFiltersEquipment);
  const type = useSelector(selectFormType);

  return (
    <ul className={css.specificationList}>
      {specifications
        .filter((specification) => specification.condition)
        .map((specification) => (
          <li
            key={`${truck.id}-${specification.id}`}
            className={`${css.specificationListItem} ${
              equipment[specification.id] || type === specification.id
                ? css.active
                : ""
            }`}
            >
                <div>
           <svg height={20} width={20} className={css.icon}>
        <use href={`${icons}#icon-${specification.icon}`} />
                    {specification.text}
                    </svg>
                    </div>
          </li>
        ))}
    </ul>
  );
}