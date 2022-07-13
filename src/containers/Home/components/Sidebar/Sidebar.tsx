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
  return (
    <Container>
      <div className="top">
        <div className="logobox">
          <div className="logobox-logo">
            <div className="logobox-logo-img">
              <img src="/public/assets/logo.png" alt="logo" />
            </div>
            <h3 className="logobox-logo-title">Taskify</h3>
          </div>
          <CgArrowsV />
        </div>
        <div className="nav">
          <ul className="nav-list">
            <li className="nav-list-item">
              <GoDashboard className="nav-list-item-icon" /> Dashboard
            </li>
            <li className="nav-list-item">
              <VscGear className="nav-list-item-icon" /> Settings
            </li>
            <li className="nav-list-item">
              <RiLineChartLine className="nav-list-item-icon" /> All Activities
            </li>
          </ul>
        </div>
        <div className="access">
          <ul className="access-list">
            <li className="access-list-item active">
              <BsPlayFill className="access-list-item-icon-1" />
              <GiCheckMark className="access-list-item-icon-2" /> Daily Tasks
            </li>
            <li className="access-list-item">
              <BsPlayFill className="access-list-item-icon-1" />
              <FaRegHandshake className="access-list-item-icon-2" /> Meetings
            </li>
            <li className="access-list-item">
              <BsPlayFill className="access-list-item-icon-1" />
              <GrResources className="access-list-item-icon-2" /> Resources
            </li>
            <li className="access-list-item">
              <BsPlayFill className="access-list-item-icon-1" />
              <BsCalendarDate className="access-list-item-icon-2" />{" "}
              Availability
            </li>
            <li className="access-list-item">
              <BsPlayFill className="access-list-item-icon-1" />
              <SiCodeproject className="access-list-item-icon-2" /> Projects
            </li>
            <li className="access-list-item">
              <BsPlayFill className="access-list-item-icon-1" />
              <SiInternetarchive className="access-list-item-icon-2" /> Archive
            </li>
            <li className="access-list-item">
              <BsPlayFill className="access-list-item-icon-1" />
              <GiBrain className="access-list-item-icon-2" /> Brainstroming
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
