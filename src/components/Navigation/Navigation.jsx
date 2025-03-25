import { NavLink } from "react-router-dom";
 import travelTrucks from "../../assets/travelTrucks.svg";
import css from "./Navigation.module.css";
const Navigation = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink className={css.logoStyledLink} to="/">
           <img src={travelTrucks} alt="logo" className={css.logo} />
        </NavLink>
         <div className={css.menu}>
        <NavLink className={css.styledLink} to="/">
          Home
        </NavLink>
        <NavLink className={css.styledLink} to="/catalog">
          Catalog
          </NavLink>
          </div>
      </nav>
    </header>
  );
};
export default Navigation;
