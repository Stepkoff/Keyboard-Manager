import './styles/Global.sass'
import {Modal} from "@/shared/ui/Modal";
import {useSearchParams} from "react-router-dom";



export const App = () => {
  const [params, setSearchParams] = useSearchParams();

  const firstModalIsOpened = params.get('modal1') === 'opened' ?? false
  const secondModalIsOpened = params.get('modal2') === 'opened' ?? false

  console.log('modal1', firstModalIsOpened)
  console.log('modal2', secondModalIsOpened)

  const openModal1 = () => {
    setSearchParams((prevParams) => {
      prevParams.set('modal1', 'opened')
      return prevParams
    })
  }
  const openModal2 = () => {
    setSearchParams((prevParams) => {
      prevParams.set('modal2', 'opened')
      return prevParams
    })
  }

  const closeModal1 = () => {
    setSearchParams((prevParams) => {
      prevParams.set('modal1', 'closed')
      return prevParams
    })
  }

  const closeModal2 = () => {
    setSearchParams((prevParams) => {
      prevParams.set('modal2', 'closed')
      return prevParams
    })
  }


  // const [openModal, setOpenModal] = useState(false);
  // const [openModal2, setOpenModal2] = useState(false);

  return (
    <div className={'App'}>

      <button onClick={openModal1}>open modal</button>
      <Modal isOpened={firstModalIsOpened} onClose={closeModal1}>
        <h2 style={{marginBottom: '10px'}}>Modal 1</h2>
        <p style={{marginBottom: '10px'}}>(Press 'Esc' to close this modal)</p>
        <h4 style={{marginBottom: '10px'}}>
          Reload the page to make sure the modal state stays the same!
          Also when Esc pressed modals closed in the right order, even after page reload
        </h4>
        <div>
          <button onClick={openModal2}>Open modal 2</button>
          <Modal isOpened={secondModalIsOpened} onClose={closeModal2}>
            <h2 style={{marginBottom: '10px'}}>Modal 2</h2>
            <p style={{marginBottom: '10px'}}>(Press 'Esc' to close this modal)</p>
            <h4 style={{marginBottom: '10px'}}>
              Reload the page to make sure the modal state stays the same!
              Also when Esc pressed modals closed in the right order, even after page reload
            </h4>
          </Modal>
        </div>
      </Modal>

    </div>
  );
};
