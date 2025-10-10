import Nav from "./Component/Nav";
import Hero from "./Component/Hero";
import About from "./Component/About"
import Card from "./Component/Card"

import Footer from "./Component/Footer"
import HireForm from "./Component/HireForm"
import Projects from "./Component/Projects"
import Service from "./Component/Servies"
import Tech  from "./Component/Tech"

import Certificates from "./Component/Certificates";
import Testimonials from "./Component/Testimonal";
import ContactForm from "./Component/HireForm";

export default function Home() {
  return (
    <>
    <Nav/>
    <Hero/>
    <Certificates/>
    {/* <Card/> */}
    <Projects/>
    <Tech/>
    <ContactForm/>
    {/* <Testimonials/> */}
    <Footer/>
    </>
  );
}
