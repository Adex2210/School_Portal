import React from "react";
import Footer from "../components/footerComponents/Footer";
import TeachersType from "../components/teachersPageComponents/TeachersType";
import ActivitiesHeader from "../components/generalComponents/ActivitiesHeader";
import BlueHouseTeachersCard from "../components/teachersPageComponents/BlueHouseTeachersCard";
import OrangeHouseTeachersCard from "../components/teachersPageComponents/OrangeHouseTeachersCard";
import Parallax from "../components/generalComponents/Parallax";
import Parallax3 from "../components/generalComponents/Parallax3";
import PagesNavbar from "../components/navbarComponents/PagesNavbar";

const TeachersPage = () => {
  return (
    <>
    <PagesNavbar/>
      <div
        className="teachers-container mx-aut"
        style={{ width: "100%", height: "100vh" }}
      >
        <Parallax
          classes="bg other_parallax"
          styles={{
            height: "60%",
            backgroundImage: 'url("pic/teacher17.avif"), linear-gradient(rgba(72, 72, 178, 0.5), rgba(116, 116, 124, 0.8))',
            backgroundPosition: '100% 10%'
          }}
          inner_classes="activities activities-white-color"
          name="our teacher"
          content="know our best educator"
          hrStyle={{ backgroundColor: "white" }}
        />
        <div className="center-div mt-4">
          <div className="teachers_type d-flex w-100 gap-4">
            <TeachersType
              container_style={{
                height: "160px",
                width: "33.3%",
                backgroundColor: "#74cee4",
                borderRadius: "5px",
              }}
              icon="fas fa-1 shadow"
              userFeedbackName="PEDAGOGICAL STUDY"
              feedbackContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius eum dolor tempora fuga aliquam tenetur."
            />
            <TeachersType
              container_style={{
                height: "160px",
                width: "33.3%",
                backgroundColor: "#6fc191",
                borderRadius: "5px",
              }}
              icon="fas fa-2 shadow"
              userFeedbackName="ASSISTANCE TO DISABLED"
              feedbackContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius eum dolor tempora fuga aliquam tenetur."
            />
            <TeachersType
              container_style={{
                height: "160px",
                width: "33.3%",
                backgroundColor: "#edbf47",
                borderRadius: "5px",
              }}
              icon="fas fa-3 shadow"
              userFeedbackName="MONTESSORI TEACHING"
              feedbackContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius eum dolor tempora fuga aliquam tenetur."
            />
          </div>

          <ActivitiesHeader
            classes="activities activities-color"
            name="orange house"
            content="FULL TIME · AGE: 3-6 YEARS OLD"
            hrStyle={{ backgroundColor: "orange" }}
          />
          <div className="d-flex gap-lg-4 gap-md-4 w-100 flex-wrap position-relative">
            <OrangeHouseTeachersCard
              img="pic/teacher10.jpg"
              bodyClassName="orange-body-main col-lg-7 col-md-12 orange d-flex"
              teacherName="juliet margaret"
              to_where="/aboutThisTeacher"
              para="/aboutThisTeacher"
            />
            <OrangeHouseTeachersCard
              img="pic/teacher9.jpg"
              bodyClassName="orange-body-main col-lg-7 col-md-12 skyblue d-flex"
              teacherName="lucy faith"
              to_where="/aboutThisTeacher"
              para="/aboutThisTeacher"
            />
            <OrangeHouseTeachersCard
              img="pic/teacher5.png"
              bodyClassName="orange-body-main col-lg-7 col-md-12 yellow d-flex"
              teacherName="john smith"
              to_where="/aboutThisTeacher"
              para="/aboutThisTeacher"
            />
            <OrangeHouseTeachersCard
              img="pic/teacher8.jpg"
              bodyClassName="orange-body-main col-lg-7 col-md-12 purple d-flex"
              teacherName="oluwaseun adewale"
              to_where="/aboutThisTeacher"
              para="/aboutThisTeacher"
            />
          </div>
        </div>
        <Parallax3
          classes="bg image3"
          styles={{ height: "40%", backgroundImage: "url(pic/bg-image-4.jpg)" }}
        />
        <div className="center-div mt-4">
          <ActivitiesHeader
            classes="activities activities-color"
            name="blue house"
            content="FULL TIME · AGE: 0-3 YEARS OLD"
            hrStyle={{ backgroundColor: "orange" }}
          />
          <div className="card-group gap-4">
            <BlueHouseTeachersCard
              teacherName="promise joy"
              img="pic/teacher1.jpg"
              cardstyle={{ width: "18rem" }}
              classes="our-events"
              h5Classes="card-title skyblue py-3 text-center text-uppercase px-3"
              h5Style={{ marginBottom: "0px" }}
              title="A DAY IN THE PARK"
              styles={{ backgroundColor: "#F9F9F9" }}
              content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequuntur dicta non try to eat everyday."
              iconStyle={{ backgroundColor: "#74cee4" }}
            />
            <BlueHouseTeachersCard
              teacherName="wale ayefele"
              img="pic/teacher12.png"
              cardstyle={{ width: "18rem" }}
              classes="our-events"
              h5Classes="card-title yellow py-3 text-center text-uppercase px-3"
              h5Style={{ marginBottom: "0px" }}
              title="A DAY IN THE PARK"
              styles={{ backgroundColor: "#F9F9F9" }}
              content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequuntur dicta non try to eat everyday."
              iconStyle={{ backgroundColor: "#edbf47" }}
            />
            <BlueHouseTeachersCard
              teacherName="george ramsey"
              img="pic/teacher11.jpg"
              cardstyle={{ width: "18rem" }}
              classes="our-events"
              h5Classes="card-title orange py-3 text-center text-uppercase px-3"
              h5Style={{ marginBottom: "0px" }}
              title="A DAY IN THE PARK"
              styles={{ backgroundColor: "#F9F9F9" }}
              content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequuntur dicta non try to eat everyday."
              iconStyle={{ backgroundColor: "#ec774b" }}
            />
            <BlueHouseTeachersCard
              teacherName="evelyn rose"
              img="pic/teacher7.jpg"
              cardstyle={{ width: "18rem" }}
              classes="our-events"
              h5Classes="card-title pink py-3 text-center text-uppercase px-3"
              h5Style={{ marginBottom: "0px" }}
              title="A DAY IN THE PARK"
              styles={{ backgroundColor: "#F9F9F9" }}
              content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequuntur dicta non try to eat everyday."
              iconStyle={{ backgroundColor: "#e16c6c" }}
            />
          </div>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
};

export default TeachersPage;
