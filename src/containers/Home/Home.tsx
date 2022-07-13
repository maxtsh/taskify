import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Chat from "./components/Chat";
import { Container } from "./Home.styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Main />
      <Chat />
    </Container>
  );
};
export default Home;
