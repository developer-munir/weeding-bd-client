import './App.css';
import toast, { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
// const notify = () => toast("Here is your toast.");

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      
      <Toaster />
    </div>
  );
}

export default App;
