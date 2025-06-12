import Header from "./Header.tsx";
import "./Home.scss"
import AboutMe from "./Subpages/AboutMe.tsx";
import Experience from "./Subpages/Experience.tsx";

function Home() {
  return (
    <div className="Homebackground">
      <Header />
      <AboutMe/>
      <Experience/>
    </div>
  );
}

export default Home;