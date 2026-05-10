import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import type { LoadingBarRef } from "react-top-loading-bar";

import Home from "./Pages/Home";
import InfrastructurePage from "./Pages/Infrastructure";
import Achievements from "./Pages/Achievements";
import NavigationMenuDemo from "./components/Navbar";
import { Footer } from "./components/Footer";
import { StartupsPage } from "./Pages/startups/Startups";
import Tech10 from "./Pages/startups/Tech10";
import TechWithKgp from "./Pages/startups/TechWithKgp";
import DevCommunity from "./Pages/startups/DevCommunity";
import Chathurpravthan from "./Pages/startups/Chathurpravthan";
import EduTechSphere from "./Pages/startups/EduTechSphere";
import OpenPositions from "./Pages/TBI/Openpositions";
import Events from "./Pages/events/Events";
import Event18 from "./Pages/events/Event18";
import Event19 from "./Pages/events/Event19";
import Event20 from "./Pages/events/Event20";
import Event21 from "./Pages/events/Event21";
import Event22 from "./Pages/events/Event22";
import Event23 from "./Pages/events/Event23";
import Event24 from "./Pages/events/Event24";
import Event25 from "./Pages/events/Event25";
import Event26 from "./Pages/events/Event26";
import CertificationsPage from "./Pages/documents/Certificates";
import Documents from "./Pages/documents/Documents";
import Collaborations from "./Pages/documents/Collaborations";
import Nisp from "./Pages/documents/Nisp";
import Faculty from "./Pages/Faculty";
import TeamPage from "./Pages/Teams";
import MoEIICPage from "./Pages/moe-iic"
import NAINPage from "./Pages/nain/Nain";
import Nain1Page from "./Pages/nain/Nain1";
import Nain2Page from "./Pages/nain/Nain2";
import Nain2ProjectsPage from "./Pages/nain/Nain2Projects";
import ContactUsPage from "./Pages/Contact";
import EventsPage from "./Pages/Uba";
import AboutUs from "./Pages/About";

function App() {
  const loadingRef = useRef<LoadingBarRef | null>(null);
  const location = useLocation();

  // ▶ Start loading bar on route change
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    if (loadingRef.current) {
      loadingRef.current.continuousStart();
    }

    const timer = setTimeout(() => {
      loadingRef.current?.complete();
    }, 600);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* 🔵 Top Loading Bar */}
      <LoadingBar
        color="#3b82f6"
        height={4}
        shadow={false}
        ref={loadingRef}
      />

      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-background border-b w-full">
        <div className="flex w-full justify-center py-4">
          <NavigationMenuDemo />
        </div>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infrastructure" element={<InfrastructurePage />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/startups" element={<StartupsPage />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/about" element={<AboutUs/>}/>

        {/* FULL SEPARATE PAGES */}
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/collaborations" element={<Collaborations />} />
        <Route path="/nisp" element={<Nisp />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/moe-iic" element={<MoEIICPage />} />
        <Route path="/nain" element={<NAINPage />} />
        <Route path="/nain/nain1" element={<Nain1Page/>}/>
        <Route path="/nain/nain2" element={<Nain2Page/>}/>
        <Route path="/nain/nain2-projects" element={<Nain2ProjectsPage/>}/>
        
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/uba" element={<EventsPage />} />
        <Route path="/aboutus" element={<AboutUs />} />

        {/* Startup Detail Pages */}
        <Route path="/startups/tech10" element={<Tech10 />} />
        <Route path="/startups/techwithkgp" element={<TechWithKgp />} />
        <Route path="/startups/dev-community" element={<DevCommunity />} />
        <Route path="/startups/chathurpravthan" element={<Chathurpravthan />} />
        <Route path="/startups/edutechsphere" element={<EduTechSphere />} />

        {/* Events Pages */}
        <Route path="/events" element={<Events />} />
        <Route path="/events/2018" element={<Event18 />} />
        <Route path="/events/2019" element={<Event19 />} />
        <Route path="/events/2020" element={<Event20 />} />
        <Route path="/events/2021" element={<Event21 />} />
        <Route path="/events/2022" element={<Event22 />} />
        <Route path="/events/2023" element={<Event23 />} />
        <Route path="/events/2024" element={<Event24 />} />
        <Route path="/events/2025" element={<Event25 />} />
        <Route path="/events/2026" element={<Event26 />} />

        {/* TBI Pages */}
        <Route path="/tbi/open-positions" element={<OpenPositions />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
