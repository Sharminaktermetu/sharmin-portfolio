import Header from "../../Shared/Header";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="w-10/12 mx-auto">
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            </div>
            
        </div>
    );
};

export default Home;