import { BsThreeDots, BsArrowsMove } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import { Container } from "./Task.styles";

const Task: React.FC = () => {
  return (
    <Container>
      <div className="head">
        <div className="head-emoji">🤗</div>
        <div className="head-icons">
          <BsArrowsMove className="head-icons-move" />
          <BsThreeDots className="head-icons-dots" />
        </div>
      </div>
      <div className="body">
        <p className="body-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsum
          ut incidunt.
        </p>
      </div>
      <div className="footer">
        <div className="footer-date">
          <IoTimeOutline className="footer-date-icon" />
          <p className="footer-date-text">Jul 22</p>
        </div>
        <div className="footer-avatars">
          <img className="footer-avatars-img" src="/public/assets/avatar.jpg" />
          <img
            className="footer-avatars-img"
            src="/public/assets/avatar-2.png"
          />
          <img
            className="footer-avatars-img"
            src="/public/assets/avatar-3.jpg"
          />
        </div>
      </div>
    </Container>
  );
};
export default Task;
