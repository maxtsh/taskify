import { BiBell } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { Container } from "./Header.styles";
import type { IProps } from "./Header.types";

const Header: React.FC<IProps> = ({ title, Icon }) => {
  return (
    <Container>
      <div className="left">
        <Icon className="left-icon" />
        <h3 className="left-title">{title}</h3>
      </div>
      <div className="right">
        <div className="right-item">
          <BsSearch className="right-item-search" />
        </div>
        <div className="right-item">
          <p className="right-item-count">5</p>
          <BiBell className="right-item-notif" />
        </div>
        <div className="right-item">
          <img
            src="/public/assets/avatar.jpg"
            className="right-item-avatar"
            alt="Avatar"
          />
        </div>
      </div>
    </Container>
  );
};
export default Header;
