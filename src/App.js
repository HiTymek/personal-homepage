import Header from "./features/Header";
import { Container } from "./features/Container/styled";
import BigTile from "./common/BigTile/index";
import SkillList from "./features/SkillList";
import NextToLearn from "./features/NextToLearn";
import Projects from "./features/Projects";

function App() {
  return (
    <Container>
      <Header />
      <BigTile
        title="My skillset includes 🛠️"
        content={<SkillList />}
      />
      <BigTile
        title="What I want to learn next 🚀"
        content={<NextToLearn />}
      />
      <Projects />
    </Container>
  );
};

export default App;
