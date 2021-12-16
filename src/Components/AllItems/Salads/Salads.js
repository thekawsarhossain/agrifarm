import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';

const Salads = () => {
  const [salads,setSalads] = useState([]);
  
  useEffect(()=>{
    fetch('./AllItems.json')
    .then(res=> res.json())
    .then(data=>setSalads(data.slice(4,8)))
  },[])
  return (
    <div>
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4 g-4">
      {
       salads.map(salad=><div className='all-fruits'>
        <div className="fruit">
             <div className="col">
             <div class="card-group shadow-lg rounded">
  <div class="card border-end text-start ">
    <img src={salad.img} class="card-img-top" alt="..."/>
    <div class="card-body ">
      <p class="card-text">{salad.description}</p>
      <span >{salad.categories}</span>

      <hr />
      <div class="d-flex justify-content-between">
      <div className="price-section">
      <Rating className='rating text-warning'
                     emptySymbol="far fa-star text-warning"
                     fullSymbol="fas fa-star text-warning"
                     readonly
                     initialRating={salad.ratings} > 
                     </Rating>
      <p className='text-danger fw-bold'>${salad.Newprice}</p>
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

export default Salads;