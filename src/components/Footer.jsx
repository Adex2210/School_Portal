import React from "react";
import FooterHeader from "./FooterHeader";
import OurTagBtn from "./OurTagBtn";
import FooterGallary from "./FooterGallary";
import FooterReachBtn from "./FooterReachBtn";



const Footer = () => {
  return (
    <>
      <div
        className=" w-100"
        style={{ backgroundColor: "#495052", padding: "50px 0px" }}
      >
        <div className="top-footer mx-auto d-flex gap-4 w-75">
          <div className="each-footer" style={{ width: "25%" }}>
            <FooterHeader headerName="our primary school"></FooterHeader>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae quam voluptatibus itaque aspernatur veniam officiis.
            </div>
            <div className="d-flex mt-3 gap-3">
              <FooterReachBtn></FooterReachBtn>
              <FooterReachBtn></FooterReachBtn>
              <FooterReachBtn></FooterReachBtn>
            </div>
          </div>
          <div className="each-footer" style={{ width: "25%" }}>
            <FooterHeader headerName="our tag"></FooterHeader>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex gap-3 flex-wrap w-100">
                <OurTagBtn btn_txt="teacher"></OurTagBtn>
                <OurTagBtn btn_txt="baby"></OurTagBtn>
                <OurTagBtn btn_txt="kids"></OurTagBtn>
                <OurTagBtn btn_txt="nursery"></OurTagBtn>
                <OurTagBtn btn_txt="primary"></OurTagBtn>
                <OurTagBtn btn_txt="secondary"></OurTagBtn>
                <OurTagBtn btn_txt="teacher"></OurTagBtn>
                <OurTagBtn btn_txt="baby"></OurTagBtn>
                <OurTagBtn btn_txt="kids"></OurTagBtn>
              </div>
            </div>
          </div>
          <div className="each-footer" style={{ width: "25%" }}>
            <FooterHeader headerName="school gallary"></FooterHeader>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex gap-3">
                <FooterGallary img="pic/1.jpg" cover="Image 1"></FooterGallary>
                <FooterGallary img="pic/2.png" cover="Image 2"></FooterGallary>
                <FooterGallary img="pic/3.png" cover="Image 3"></FooterGallary>
              </div>
              <div className="d-flex gap-3">
                <FooterGallary img="pic/5.png" cover="Image 4"></FooterGallary>
                <FooterGallary
                  img="pic/avatar.png"
                  cover="Image 5"
                ></FooterGallary>
                <FooterGallary
                  img="pic/img.png"
                  cover="Image 6"
                ></FooterGallary>
              </div>
            </div>
          </div>
          <div className="each-footer" style={{ width: "25%" }}>
            <FooterHeader headerName="contact us"></FooterHeader>
          </div>
        </div>

        <div className="mx-auto d-flex gap-4 w-75"></div>
      </div>
    </>
  );
};

export default Footer;
