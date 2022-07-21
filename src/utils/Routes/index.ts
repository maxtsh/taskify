import { SiCodeproject, SiInternetarchive } from "react-icons/si";
import { BsCalendarDate } from "react-icons/bs";
import { GrResources } from "react-icons/gr";
import { GiCheckMark, GiBrain } from "react-icons/gi";
import { FaRegHandshake } from "react-icons/fa";
import { IconType } from "react-icons";
import Home from "containers/Home/Lazy";
import Meetings from "containers/Meetings/Lazy";
import Resources from "containers/Resources/Lazy";
import BrainStorm from "containers/Brainstrom/Lazy";
import Availability from "containers/Availability/Lazy";
import Archive from "containers/Archive/Lazy";
import AllProjects from "containers/AllProjects/Lazy";

export interface Route {
  name: string;
  exact: boolean;
  path: string;
  component: React.FC;
  icon: IconType;
}

const Routes: Route[] = [
  { name: "Tasks", exact: true, path: "/", component: Home, icon: GiCheckMark },
  {
    name: "Meetings",
    exact: true,
    path: "/meetings",
    component: Meetings,
    icon: FaRegHandshake,
  },
  {
    name: "Resources",
    exact: true,
    path: "/resources",
    component: Resources,
    icon: GrResources,
  },
  {
    name: "Brain Storming",
    exact: true,
    path: "/brainstorm",
    component: BrainStorm,
    icon: GiBrain,
  },
  {
    name: "Availability",
    exact: true,
    path: "/availability",
    component: Availability,
    icon: BsCalendarDate,
  },
  {
    name: "Archive",
    exact: true,
    path: "/archive",
    component: Archive,
    icon: SiInternetarchive,
  },
  {
    name: "All Projects",
    exact: true,
    path: "/projects",
    component: AllProjects,
    icon: SiCodeproject,
  },
];

export default Routes;
