import '../Style/Loader.css';

const Loader = ({ mode }) => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="note"></div>
        <div className="note"></div>
        <div className="note"></div>
      </div>
      <div className={`loader-text text-${mode === 'light' ? 'dark' : 'light'}`}>
        Loading Notes
        <span style={{ backgroundColor: mode === 'light' ? 'black' : 'white' }} className="dot dot1"></span>
        <span style={{ backgroundColor: mode === 'light' ? 'black' : 'white' }} className="dot dot2"></span>
        <span style={{ backgroundColor: mode === 'light' ? 'black' : 'white' }} className="dot dot3"></span>
      </div>
    </div>
  );
};

export default Loader;
