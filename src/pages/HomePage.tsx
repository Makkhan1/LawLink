import Hero from "../components/Hero";
import Lawyers from "../components/Lawyers";
import Services from "../components/Services";
import lawyersData from '../assets/data/lawyers.json';

const HomePage: React.FC = ()=>{
    return (
        <>
        <Hero />
        <section id="services"> 
          <Services />
        </section>
        <Lawyers lawyersData={lawyersData.lawyers} />
        </>
    );
}

export default HomePage;