import { BsPlus } from "react-icons/bs";
import Task from "components/Task";
import { Container } from "./Home.styles";

const Home: React.FC = () => {
  return (
    <Container>
      <div className="heading">
        <p className="heading-text">
          Click <span className="heading-text-new">+ New</span> to create new
          list and wait for project manager card.
        </p>
      </div>
      <div className="tasks">
        <div className="tasks-item">
          <div className="tasks-item-head">
            <h4 className="tasks-item-head-title">To Do</h4>
            <p className="tasks-item-head-count">3</p>
          </div>
          <div className="tasks-item-list">
            <Task />
            <Task />
            <Task />
            <div className="tasks-item-list-add">
              <BsPlus className="tasks-item-list-add-icon" />
            </div>
          </div>
        </div>
        <div className="tasks-item">
          <div className="tasks-item-head">
            <h4 className="tasks-item-head-title">In Progress</h4>
            <p className="tasks-item-head-count">1</p>
          </div>
          <div className="tasks-item-list">
            <Task />
            <Task />
            <div className="tasks-item-list-add">
              <BsPlus className="tasks-item-list-add-icon" />
            </div>
          </div>
        </div>
        <div className="tasks-item">
          <div className="tasks-item-head">
            <h4 className="tasks-item-head-title">Complete</h4>
            <p className="tasks-item-head-count">5</p>
          </div>
          <div className="tasks-item-list">
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <div className="tasks-item-list-add">
              <BsPlus className="tasks-item-list-add-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="tasklist"></div>
    </Container>
  );
};
export default Home;
