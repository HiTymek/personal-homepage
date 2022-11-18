import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./features/Header";
import { Container } from "./features/Container/styled";
import BigTile from "./common/BigTile/index";
import SkillList from "./features/SkillList";
import NextToLearn from "./features/NextToLearn";
import Footer from "./features/Footer";
import { selectTheme } from "./themeSlice";
import Portfolio from "./features/Portfolio";

function App() {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
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
          <Portfolio />
          <Footer />
        </Container>
      </>
    </ThemeProvider>
  );
};

export default App;
