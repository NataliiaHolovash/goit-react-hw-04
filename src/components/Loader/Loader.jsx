import ReactLoading from 'react-loading';
import style from './Loader.module.css';

const Loader = () => {
  return (
    <div className={style.backdrop}>
      <ReactLoading
        type="spin"
        color="#306cce"
        height={80}
        width={80}
      />
    </div>
  );
};

export default Loader;
