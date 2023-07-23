import './styles/Global.sass'
import {useState } from "react";
import {Modal} from "@/shared/ui/Modal";

export const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  return (
    <div className={'App'}>

      <button onClick={() => setOpenModal(true)}>open modal</button>
      <Modal isOpened={openModal} onClose={() => setOpenModal(false)}>
        <h2>Modal 1</h2>
        <h3>(Press 'Esc' to close this modal)</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, enim.</p>
        <div>
          <button onClick={() => setOpenModal2(true)}>Open modal 2</button>
          <Modal isOpened={openModal2} onClose={() => setOpenModal2(false)}>
            <h2>Modal 2</h2>
            <h3>(Press 'Esc' to close this modal)</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dicta facere hic minus molestiae molestias nihil nobis, quae quas quis sequi ut voluptate? Asperiores assumenda ipsa modi nisi nostrum numquam.</p>
          </Modal>
        </div>
      </Modal>

    </div>
  );
};
