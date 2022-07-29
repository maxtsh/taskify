import { useState } from "react";
import { BiBell } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { Container } from "./Header.styles";
import type { IProps } from "./Header.types";

const Header: React.FC<IProps> = ({ title, Icon }) => {
  const [open, setOpen] = useState(false);

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
            src="/assets/avatar.jpg"
            className="right-item-avatar"
            alt="Avatar"
          />
        </div>
        <div
          className={open ? "hamburger open" : "hamburger"}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </Container>
  );
};
export default Header;
