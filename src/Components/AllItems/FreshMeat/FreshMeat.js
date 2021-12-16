
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';

const FreshMeat = () => {
  const [freshMeats,setFreshMeats] = useState([]);
  
  useEffect(()=>{
    fetch('./AllItems.json')
    .then(res=> res.json())
    .then(data=>setFreshMeats(data.slice(28,32)))
  },[])
  return (
    <div>
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4 g-4">
      {
       freshMeats.map(freshMeat=><div className='all-fruits'>
        <div className="fruit">
          <div className="col">
             <div class="card-group shadow-lg rounded">
                <div class="card border-end text-start ">
                   <img src={freshMeat.img} class="card-img-top" alt="..."/>
                     <div class="card-body ">
                       <p class="card-text">{freshMeat.description}</p>
                        <span >{freshMeat.categories}</span>
                    <hr />
                  <div class="d-flex justify-content-between">
                <div className="price-section">
             <Rating className='rating text-warning'
                     emptySymbol="far fa-star text-warning"
                     fullSymbol="fas fa-star text-warning"
                     readonly
                     initialRating={freshMeat.ratings} > 
                     </Rating>
           <p className='text-danger fw-bold'>${freshMeat.Newprice}</p>
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

export default FreshMeat;