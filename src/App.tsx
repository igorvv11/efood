import CardList from "./components/CardList";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { GlobalCss } from "./styles";

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <Hero />
      <CardList />
    </>
  );
}

export default App;
