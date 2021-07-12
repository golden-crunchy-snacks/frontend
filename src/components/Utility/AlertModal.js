// Packages
import { ImCross } from "react-icons/im";

const AlertModal = ({ alertModalMessage, alertModal, setAlertModal }) => {
  return (
    alertModal && (
      <div className="alert-modal-container">
        {alertModalMessage}{" "}
        <ImCross
          className="exit-alert-modal"
          onClick={() => setAlertModal(false)}
        />
      </div>
    )
  );
};

export default AlertModal;
