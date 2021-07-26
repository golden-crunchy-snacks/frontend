import React, { useState } from "react";
import { AiOutlineMinuis, AiOutlinePlus } from "react-icons";

const Trade = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="trade__card">
      <header className="trade__header">
        <h4 className="trade__subHeading">{title}</h4>
        <button
          className="trade__button"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? "-" : "+"}
        </button>
      </header>
      {showInfo && <p className="trade__paragraph">{info}</p>}
    </article>
  );
};

export default Trade;
