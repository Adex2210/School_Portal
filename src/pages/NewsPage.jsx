import React from "react";
import OurNews from "../components/newsPageComponents/OurNews";
import Previous_Next_Btn from "../components/generalComponents/Previous_Next_Btn";
import Footer from "../components/footerComponents/Footer";
import Parallax from "../components/generalComponents/Parallax";
import PagesNavbar from "../components/navbarComponents/PagesNavbar";

const NewsPage = () => {
  return (
    <>
    <PagesNavbar/>
      <div className="mx-aut" style={{ width: "100%", height: "100vh" }}>
      <Parallax
          classes="bg"
          styles={{
            height: "60%",
            backgroundImage:
              'url("pic/gallary8.jpg"), linear-gradient(rgba(72, 72, 178, 0.5), rgba(116, 116, 124, 0.8))',
            backgroundPosition: "100% 45%",
          }}
          inner_classes="activities activities-white-color"
          name="BLOG MASONRY"
          content="ARCHIVE WITH MASONRY STYLE"
          hrStyle={{ backgroundColor: "white" }}
        />
        <div className="center-div">
          <OurNews></OurNews>
          <Previous_Next_Btn></Previous_Next_Btn>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default NewsPage;
