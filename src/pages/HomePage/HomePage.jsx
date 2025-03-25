import { useNavigate } from 'react-router-dom';
import css from "./HomePage.module.css";
const HomePage = () => {
 
     const navigate = useNavigate();

    const handleViewNowClick = () => {
        navigate('/catalog');
    };

  return (
    
     <div className={css.container}>
      <h1 className={css.title}>Campers of your dreams</h1>
      <p className={css.paragraph} >You can find everything you want in our catalog</p>
        <button className={css.heroBtn} onClick={handleViewNowClick}>View now</button>
        </div>
  
  );
};
export default HomePage;
