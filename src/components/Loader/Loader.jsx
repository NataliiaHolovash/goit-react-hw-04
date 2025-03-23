import { ClipLoader } from 'react-spinners';
import style from './Loader.module.css';

const Loader = () => {
  return (
    <div className={style.backdrop}>
      <ClipLoader
        color="#306cce"   
        size={80}         
        speedMultiplier={1} 
      />
    </div>
  );
};

export default Loader;
