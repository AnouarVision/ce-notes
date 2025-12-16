import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import NavbarMobile from "./Navbar/NavbarMobile";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      {children}
      <Footer />
    </>
  );
}
