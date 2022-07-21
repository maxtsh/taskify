import { Routes, Route } from "react-router-dom";
import Header from "components/Header";
import NotFound from "containers/404";
import Routings from "utils/Routes";
import { Container } from "styles/Global";
import Sidebar from "components/Sidebar";
import Chat from "containers/Chat";

const Private: React.FC = () => {
  return (
    <Routes>
      {Routings.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <Container>
              <Sidebar />
              <div className="wrapper">
                <Header title={route.name} Icon={route.icon} />
                <route.component />
              </div>
              <Chat />
            </Container>
          }
        />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default Private;
