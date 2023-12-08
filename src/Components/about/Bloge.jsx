

const Bloge = ({bloges}) => {
    const {name,image,title}=bloges
    return (


<>




        <div>
           <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title"> {name} </h2>
    <p>{title}</p>
    
  </div>
</div>
        </div>

   



        
        </>

    );
};

export default Bloge;