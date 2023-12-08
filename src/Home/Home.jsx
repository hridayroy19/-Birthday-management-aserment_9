import { useLoaderData } from "react-router-dom";

import Banner from "../Components/banner/Banner";
import Service from "../Components/Survice/Service";
import Section from "../Components/Section/Section";
import Sectiontow from "../Components/Section/Sectiontow";


const Home = () => {

    const brithdays = useLoaderData()
    console.log(brithdays);
    return (
        <div>
            <Banner></Banner>
            <div className="items-center text-center"><h2 className="text-2xl mb-5 p-2 uppercase font-bold   "> our survice</h2>;</div>

            
            <div className="px-20 mt-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 " >

                {
                    brithdays.map(brithday =><Service key={brithday.id} brithdays={brithday} ></Service> )

                }
              
            </div>


            <div className="mt-2">  

                <Section></Section>
            </div>

            <div className="px-20 mt-2 mb-8 gap-2 ">
                <Sectiontow></Sectiontow>
            </div>
        </div>
    );
};

export default Home;