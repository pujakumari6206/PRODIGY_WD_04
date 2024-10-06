import React, { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import LanguageKnown from "./components/LanguageKnown/LanguageKnown";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Project";
import Certificates from "./components/Certificates/Certificates";
import SelectedCertificate from "./components/Certificates/SelectedCertificate";
import Footer from "./components/Footer/Footer";

import "./App.scss";

function App() {
  const [isLargeCertificate, setIsLargeCertificate] = useState(false);
  const [passedImage, setPassedImage] = useState(null);
  const [sourceOfImage, setSourceOfImage] = useState(null);

  const showSelectedCertificate = (imagePassed, imageSource) => {
    setIsLargeCertificate(true);

    setPassedImage(imagePassed);
    setSourceOfImage(imageSource);
  };

  const hideSelectedCertificate = () => {
    setIsLargeCertificate(false);
  };

  return (
    <div className="container">
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <LanguageKnown></LanguageKnown>
      <Skills></Skills>
      <Projects></Projects>
      <Certificates
        onShowLargeCertificate={showSelectedCertificate}
      ></Certificates>
      {isLargeCertificate && (
        <SelectedCertificate
          certificateToShow={sourceOfImage}
          imageValue={passedImage}
          onHideSelectedCertificate={hideSelectedCertificate}
        />
      )}
      <Footer></Footer>
    </div>
  );
}

export default App;
