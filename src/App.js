import Header from "./features/Header";
import { Container } from "./features/Container/styled";
import BigTile from "./common/BigTile/index";
import SkillList from "./features/SkillList";
import NextToLearn from "./features/NextToLearn";

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
    </Container>
  );
};

export default App;
