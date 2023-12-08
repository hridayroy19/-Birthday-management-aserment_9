/* eslint-disable react/prop-types */


const Showdtls = ({cards}) => {
    const { name,card_img,id,description,price } = cards || {}
    return (
        <>
  {/* <figure><img className=" h-[50%] w-[50%] " src={card_img} alt="Shoes" /></figure> */}

  <div id="item1" className="carousel-item w-full">
    <img src={card_img} className="w-full h-96 " />
  </div> 
    <h2 className="card-title font-bold text-white  mt-6">
      {name}
      <div className="badge badge-secondary"> {price} </div>
    </h2>
    <p className="mb-10 mt-4">{description}</p>
    
  

            
  </>
    );
};

export default Showdtls;