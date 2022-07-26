import { useLocation, Link } from "react-router-dom";
import { CgArrowsV } from "react-icons/cg";
import { GoDashboard } from "react-icons/go";
import { VscGear } from "react-icons/vsc";
import { SiCodeproject, SiInternetarchive } from "react-icons/si";
import { BsPlayFill, BsCalendarDate, BsPlus } from "react-icons/bs";
import { GrResources } from "react-icons/gr";
import { GiCheckMark, GiBrain } from "react-icons/gi";
import { FaRegHandshake } from "react-icons/fa";
import { RiLineChartLine } from "react-icons/ri";
import { Container } from "./Sidebar.styles";
import Button from "components/Button";

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <div className="top">
        <div className="logobox">
          <div className="logobox-logo">
            <div className="logobox-logo-img">
              <img src="/assets/logo.png" alt="logo" />
            </div>
            <h3 className="logobox-logo-title">Taskify</h3>
          </div>
          <CgArrowsV />
        </div>
        <div className="nav">
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/">
                <GoDashboard className="nav-list-item-icon" /> Dashboard
              </Link>
            </li>
            <li className="nav-list-item">
              <Link to="/settings">
                <VscGear className="nav-list-item-icon" /> Settings
              </Link>
            </li>
            <li className="nav-list-item">
              <Link to="/history">
                <RiLineChartLine className="nav-list-item-icon" /> All
                Activities
              </Link>
            </li>
          </ul>
        </div>
        <div className="access">
          <ul className="access-list">
            <li
              className={`access-list-item ${pathname === "/" ? "active" : ""}`}
            >
              <Link to="/">
                <BsPlayFill className="access-list-item-icon-1" />
                <GiCheckMark className="access-list-item-icon-2" /> Daily Tasks
              </Link>
            </li>
            <li
              className={`access-list-item ${
                pathname === "/meetings" ? "active" : ""
              }`}
            >
              <Link to="/meetings">
                <BsPlayFill className="access-list-item-icon-1" />
                <FaRegHandshake className="access-list-item-icon-2" /> Meetings
              </Link>
            </li>
            <li
              className={`access-list-item ${
                pathname === "/resources" ? "active" : ""
              }`}
            >
              <Link to="/resources">
                <BsPlayFill className="access-list-item-icon-1" />
                <GrResources className="access-list-item-icon-2" /> Resources
              </Link>
            </li>
            <li
              className={`access-list-item ${
                pathname === "/availability" ? "active" : ""
              }`}
            >
              <Link to="/availability">
                <BsPlayFill className="access-list-item-icon-1" />
                <BsCalendarDate className="access-list-item-icon-2" />
                Availability
              </Link>
            </li>
            <li
              className={`access-list-item ${
                pathname === "/projects" ? "active" : ""
              }`}
            >
              <Link to="/projects">
                <BsPlayFill className="access-list-item-icon-1" />
                <SiCodeproject className="access-list-item-icon-2" /> Projects
              </Link>
            </li>
            <li
              className={`access-list-item ${
                pathname === "/archive" ? "active" : ""
              }`}
            >
              <Link to="/archive">
                <BsPlayFill className="access-list-item-icon-1" />
                <SiInternetarchive className="access-list-item-icon-2" />
                Archive
              </Link>
            </li>
            <li
              className={`access-list-item ${
                pathname === "/brainstorm" ? "active" : ""
              }`}
            >
              <Link to="/brainstorm">
                <BsPlayFill className="access-list-item-icon-1" />
                <GiBrain className="access-list-item-icon-2" /> Brainstroming
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <Button type="primary" size="small" to="#">
          New Project <BsPlus className="buttom-btnicon" />
        </Button>
      </div>
    </Container>
  );
};
export default Sidebar;
