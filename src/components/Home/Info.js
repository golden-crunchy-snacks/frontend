import logo from "../../assets/img/logo.png";
const Info = ({ text }) => {
  return (
    <div className="info">
      <div className="info__container">
        <p className="info__description">{text}</p>
      </div>
    </div>
  );
};

export default Info;
