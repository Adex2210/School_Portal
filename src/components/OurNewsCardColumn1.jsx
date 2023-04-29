import React from 'react'
import EventsCard from './EventsCard'
import EventCard_Img from './EventCard_Img'

const OurNewsCardColumn1 = () => {
  return (
   <>
        <div className="d-flex flex-column gap-3" style={{width: '33.3%'}}>
        <EventsCard
        cardstyle={{ width: "100%" }}
          classes="our-news"
          classesStyle={{backgroundColor: '#74CEE4'}}
          img="pic/bg-image-4.jpg"
          h5Classes="card-title py-3 text-uppercase px-3"
          h5Style={{ marginBottom: '0px', backgroundColor: '#74CEE4' }}
          time_container="time-container-none"
          country_container="country-container-none"
          days_time="none"
          days_time_icon="fas fa-user my-auto"
          title="our school anniversary"
          styles={{ backgroundColor: "#74CEE4" }}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat alias veniam tempora."
          btn="read more"
          btnstyle={{ backgroundColor: "#6FC4D9", textTransform: 'capitalize' }}
        ></EventsCard>
        <EventsCard
        cardstyle={{ width: "100%" }}
          classes="our-news"
          classesStyle={{backgroundColor: '#6fc191'}}
          img="pic/bg-image-4.jpg"
          h5Classes="card-title py-3 text-uppercase px-3"
          h5Style={{ marginBottom: '0px', backgroundColor: '#6fc191' }}
          time_container="time-container-none"
          country_container="country-container-none"
          days_time="none"
          days_time_icon="fas fa-user my-auto"
          title="our school anniversary"
          styles={{ backgroundColor: "#6fc191" }}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat alias veniam tempora."
          btn="read more"
          btnstyle={{ backgroundColor: "#6AB78A", textTransform: 'capitalize' }}
        ></EventsCard>
         <EventCard_Img
          cardstyle={{ width: "100%" }}
          classes="our-news"
          classesStyle={{ backgroundColor: "#EC774B" }}
          img="pic/bg-image-4.jpg"
          h5Classes="card-title py-3 text-uppercase px-3"
          h5Style={{ marginBottom: "0px", backgroundColor: "#EC774B" }}
          time_container="time-container-none"
          country_container="country-container-none"
          days_time="none"
          days_time_icon="fas fa-user my-auto"
          title="our school anniversary"
        ></EventCard_Img>
        </div>
   </>
  )
}

export default OurNewsCardColumn1