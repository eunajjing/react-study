import React from "react";
import "./WaitingList.css";

const WaitingItem = ({ text, entered, onEnter, onLeave }) => {
  return (
    <li>
      <div className={`text ${entered ? "entered" : ""}`}>{text}</div>
      <div className="buttons">
        <button onClick={onEnter}>입장</button>
        <button onClick={onLeave}>나감</button>
      </div>
    </li>
  );
};

const WaitingList = ({
  input,
  onChange,
  onCreate,
  waitingList,
  onEnter,
  onLeave
}) => {
  return (
    <div className="WaitingList">
      <h2>대기자</h2>
      <form>
        <input value={input} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <ul>
        {waitingList.map(item => (
          <WaitingItem 
            key={item.id}
            text={item.name}
            entered={item.entered}
            onEnter={() => onEnter(item.id)}
            onLeave={() => onLeave(item.id)}
          />
		)
	}
	</ul>
    </div>
  );
};

export default WaitingList;
