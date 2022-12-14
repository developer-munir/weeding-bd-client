import './App.css';
import toast, { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
// const notify = () => toast("Here is your toast.");

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="min-h-[100vh] font-serif overflow-hidden">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
