import Header from "./Header.tsx";
import "./Home.scss"
import AboutMe from "./Subpages/AboutMe.tsx";

function Home() {
  return (
    <div className="Homebackground">
      <Header />
      <AboutMe/>
    </div>
  );
}

export default Home;