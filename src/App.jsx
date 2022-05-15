import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Qualities } from "./components/qualities";
import Nav from "./components/nav/nav";
import { Sidebar } from "./components/Sidebar/Sidebar";
import Expertise from "./components/expertise/expertise";
import Showcase from "./components/showcase/showcase";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  function setToggle(open){
    setIsOpen(open);
    console.log("was toggled! " + isOpen)
  }

  return (
    <div>
      {/*<Navigation data={landingPageData.Navigation}/>*/}
      <Nav openState = {isOpen} toggleSideBar = { () => setToggle(!isOpen)}/>
      <Sidebar openState = {isOpen} toggle = { () => setToggle(!isOpen)}/>
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Showcase/>
      <Expertise/>
      {/*<Services data={landingPageData.Services} />*/}
      <Qualities data={landingPageData.Features} />
      {/*<Gallery data={landingPageData.Gallery}/> */}
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
