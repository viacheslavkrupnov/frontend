import { ReactComponent as AddProject } from "../Modal/IconButton/addProject.svg";
import { useState } from "react";
import ModalCreateSprint from "../ModalCreateSprint";
import s from "./SingleSprint.module.css";

const RenameSprint = ({ id, renameSprint }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className={s.hederSprint__title}>
        <h2 className={s.hederSprint}>Project 1</h2>
        <button
          className={s.penBtn}
          type="sabmit"
          aria-label="rename"
          onClick={renameSprint}
        ></button>
        <button
          onClick={toggleModal}
          aria-label={"create sprint"}
          className={s.create__sprint}
        >
          <AddProject />
        </button>
        <p className={s.text}>Створити спринт</p>
      </div>
      {!showModal && <ModalCreateSprint onClick={toggleModal} />}

      <div>
        <p className={s.hederSprint__text}>
          Короткий опис проекту, якщо він є, розміщуєтсья тут. Ширина тектового
          блоку
        </p>
      </div>
    </>
  );

  // return (
  //     <>
  //         <div className={s.hederSprint__title}>
  //         <div>
  //             <input tupe="text" naame="" placeholder="" value=""></input>
  //             <label></label>
  //         </div>
  //         <button className={s.penBtn} type="sabmit" aria-label="rename"
  //               onClick={renameSprint}>
  //             </button>
  //             <button
  //               // onClick={toggleModal}
  //               aria-label={"create sprint"}
  //               className={s.create__sprint}
  //             >
  //               <AddProject />
  //             </button>
  //             <p className={s.text}>Створити спринт</p>
  //           </div>

  //         <div>
  //           <p className={s.hederSprint__text}>Короткий опис проекту, якщо він є, розміщуєтсья тут. Ширина тектового блоку</p>
  //         </div>
  //         </>
  //     )
};

export default RenameSprint;
