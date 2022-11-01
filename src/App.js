import Header from "./features/Header";
import { Container } from "./features/Container/styled";
import Tile from "./features/Tile";
import SkillList from "./features/SkillList";

function App() {
  return (
    <Container>
      <Header />
      <Tile
        title="My skillset includes 🛠️"
        content={<SkillList />}
      />
    </Container>
  );
};

export default App;
