import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from "@/scenes/SignIn";
import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import OurClasses from "@/scenes/ourClasses";
import Benefits from "@/scenes/benefits";
import ContactUs from "@/scenes/contactUs";
import Footer from "@/scenes/footer";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [showSignIn, setShowSignIn] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        if (!showSignIn) {
          setSelectedPage(SelectedPage.Home);
        }
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showSignIn]);

  const handleSignInClick = () => {
    console.log("SignInButton clicked, simple test");
    setShowSignIn(true);  // Function to trigger showing the sign-in form
  };

  const handleSignInSuccess = () => {
    setShowSignIn(false);
    setSelectedPage(SelectedPage.Home);  // Assuming you have a state management for page navigation
  };


  return (
    <Router>
    <div className="app bg-gray-20">
    {showSignIn ? (
        <>
         <SignIn
  onSignInSuccess={handleSignInSuccess}
  setSelectedPage={setSelectedPage}
/>
        </>
      ) : (
        <>
      {isTopOfPage && <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        onSignInClick={handleSignInClick}
      />}
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
      </>
      )}
      </div>
    </Router>
  );
}

export default App;
