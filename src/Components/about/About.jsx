import { useLoaderData } from "react-router-dom";
import Bloge from "./Bloge";

const About = () => {


const bloges = useLoaderData()
console.log(bloges);

    return (
        <div>
          <div>
          <img className="  w-full h-[400px] " src="https://i.ibb.co/TgMyGck/stylish-bright-532963-2985.jpg" alt="" />

       
          </div>

          <div> <h2 className="items-center text-center text-5xl mt-8 mb-7">The Article</h2></div>

          <div className="px-20 mt-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 " >

{
    bloges.map(bloge =><Bloge key={bloge.id} bloges={bloge} ></Bloge> )

}

</div>

<div>
    
    <h2 className="text-6xl text-center mb-4 mt-12 items-center font-bold">We Wait for Your Attendance </h2>
    <p className="items-center  text-center gap-2"> Birthdays are more than just another day  on the calendar; they are a celebration of life <br />
    a reminder of all the adventures  we have had, and a promise of more to come. Whether you are <br />
     turning 5 or 50, each 
     birthday marks a unique chapter in your journey. In this blog, <br />
      we explore the significance of birthdays and how to make them truly memorable.</p>

        <p className="text-center p-2 rounded-lg justify-center items-center text-orange-300 border mt-14 mb-56 bg-primary w-36 ml-[43%] ">  Attendance</p> 
    </div>

        </div>
    );
};

export default About;