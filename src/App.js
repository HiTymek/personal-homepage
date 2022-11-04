import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./features/Header";
import { Container } from "./features/Container/styled";
import BigTile from "./common/BigTile/index";
import SkillList from "./features/SkillList";
import NextToLearn from "./features/NextToLearn";
import Projects from "./features/Projects";
import Footer from "./features/Footer";
import { selectIsDarkTheme } from "./themeSlice";

function App() {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <>
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
          <Footer />
        </Container>
      </>
    </ThemeProvider>
  );
};

export default App;
