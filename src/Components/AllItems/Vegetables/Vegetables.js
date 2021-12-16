
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';

const Vegetables = () => {
  const [vegetables,setVegetables] = useState([]);
  
  useEffect(()=>{
    fetch('./AllItems.json')
    .then(res=> res.json())
    .then(data=>setVegetables(data.slice(8,12)))
  },[])
  return (
    <div>
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4 g-4">
      {
       vegetables.map(vegetable=><div className='all-fruits'>
        <div className="fruit">
          <div className="col">
             <div class="card-group shadow-lg rounded">
                <div class="card border-end text-start ">
                   <img src={vegetable.img} class="card-img-top" alt="..."/>
                     <div class="card-body ">
                       <p class="card-text">{vegetable.description}</p>
                        <span >{vegetable.categories}</span>
                        
                    <hr />
                  <div class="d-flex justify-content-between">
                <div className="price-section">
             <Rating className='rating text-warning'
                     emptySymbol="far fa-star text-warning"
                     fullSymbol="fas fa-star text-warning"
                     readonly
                     initialRating={vegetable.ratings} > 
                     </Rating>
           <p className='text-danger fw-bold'>${vegetable.Newprice}</p>
      </div>
     <div className="button-section">
        <button><i class="fas fa-shopping-basket me-2"></i> ADD</button>
           </div>
               </div>
                   </div>
                       </div>
                          </div>
                     </div> 
                 </div>
            </div>)}
        </div>
    </div>
  </div>
  );
};

export default Vegetables;