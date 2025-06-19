import Footer from "./Footer.tsx";
import "./Home.scss"
import AboutMe from "./Subpages/AboutMe.tsx";
import Experience from "./Subpages/Experience.tsx";
import Projects from "./Subpages/Projects.tsx";

function Home() {
  return (
    <div className="Homebackground">
      <AboutMe/>
      <Experience/>
      <Projects/>
      <Footer />
    </div>
  );
}

export default Home;