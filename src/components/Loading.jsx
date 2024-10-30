import logo from '../assets/logo.png';
import { TailSpin } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <img className="h-24 mb-4" src={logo} alt="Logo" />
      <TailSpin
        height="50"
        width="50"
        color="#993333"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loading;
