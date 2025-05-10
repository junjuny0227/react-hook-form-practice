import { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <div>
      {children}
      <ToastContainer />
    </div>
  );
};

export default Provider;
