import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import './Fruits.css'
const Fruits = () => {
  const [fruits,setFruits] = useState([]);
  
  useEffect(()=>{
    fetch('./AllItems.json')
    .then(res=> res.json())
    .then(data=>setFruits(data.slice(0,4)))
  },[])
  return (
    <div>
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4 g-4">
      {
       fruits.map(fruit=><div className='all-fruits'>
        <div className="fruit">
             <div className="col">
             <div class="card-group shadow-lg rounded">
  <div class="card border-end text-start ">
    <img src={fruit.img} class="card-img-top" alt="..."/>
    <div class="card-body ">
      <p class="card-text">{fruit.description}</p>
      <span>{fruit.categories}</span>
      <hr />
      <div class="d-flex justify-content-between">
      <div className="price-section">
      <Rating className='rating text-warning'
                     emptySymbol="far fa-star text-warning"
                     fullSymbol="fas fa-star text-warning"
                     readonly
                     initialRating={fruit.ratings} > 
                     </Rating>
      <p className='text-danger fw-bold'>${fruit.Newprice}</p>
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
       </div>)
     }
      </div>
    </div>
    </div>
  );
};

export default Fruits;