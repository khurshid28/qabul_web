import React from "react";
import hokimiyatLogo from "../assets/hokimiyat-2.png";
import Profile from "../components/profile";

import Modal from "@material-ui/core/Modal";
import QabulForm from "../components/qabul_form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [open, setOpen] = React.useState(false);

  function notify (msg) {
    toast.success(msg, { autoClose: 5000 })
  };



  const handleClose = () => {
    setOpen(false);
  };

  
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="flex flex-col items-center pb-4 justify-start min-h-[720px]">
      <div className="px-4 py-2 lg:px-8 h-[120px] flex flex-row w-full">
        <img
          src={hokimiyatLogo}
          alt="Mirzo Ulug'bek"
          className="h-[120px] scale-[2] bg-transparent"
        />
      </div>

      <Profile handleOpen={handleOpen} handleClose={handleClose} />
      <ToastContainer />

      <Modal
        onClose={handleClose}
        open={open}
        className="flex flex-col"
        style={{
          // position: "absolute",
          // minHeight: 400,
          
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
          width: "100%",
          margin: "auto",
          padding: "2%",
        }}
      >
        <QabulForm handleClose={handleClose} notify={notify}/>
       
      </Modal>
    
    </div>


  );
}
