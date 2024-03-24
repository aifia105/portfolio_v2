import AboutMe from "@/components/AboutMe";
import Hero from "../components/Hero";
import Contact from "@/components/Contact";



export default function Home() {
  return (
    <main>
    <div id="home">
    <Hero/>
    </div>
    <div id="about">
    <AboutMe/>
    </div>
   <div id="contact">
   <Contact/>
   </div>
    </main>
  );
}
