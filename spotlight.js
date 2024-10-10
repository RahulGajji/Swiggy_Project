
const swiggyrestaurents = [{


 restimage : 'project2-images/rest-image-1.avif',
 restdiscount : '40',
 restdiscountmoney : '100',
 restname : 'La Pino\'s Pizza',
 ratingicon : 'project2-images/icon.jpeg',
 ratingpoints : '4.5',
 arrivaltime : '40-45 ',
 restvarities : 'Pizzas, Pastas, Burgers',
 restlocation : 'Attapur' 


},

{


  restimage : 'project2-images/rest-image-2.avif',
  restdiscount : '50',
  restdiscountmoney : '199',
  restname : 'UBQ by Barbeque Nation',
  ratingicon : 'project2-images/icon.jpeg',
  ratingpoints : '3.6',
  arrivaltime : '30-45 ',
  restvarities : 'North Indian, Barbecue, meals',
  restlocation :'Attapur' 

},
{



  restimage : 'project2-images/rest-image-3.avif',
  restdiscount : '60',
  restdiscountmoney : '99',
  restname : 'The Good Bowl',
  ratingicon : 'project2-images/icon.jpeg',
  ratingpoints : '3.9',
  arrivaltime : '10-25 ',
  restvarities : 'South Indian, meals',
  restlocation :'LB Nagar' 


},

{


  restimage : 'project2-images/rest-image-4.avif',
  restdiscount : '45',
  restdiscountmoney : '169',
  restname : 'Burger King',
  ratingicon : 'project2-images/icon.jpeg',
  ratingpoints : '4.1',
  arrivaltime : '25-30 ',
  restvarities : 'Burgers, American',
  restlocation :'Kothpet' 





},

{

  restimage : 'project2-images/rest-image-5.avif',
  restdiscount : '50',
  restdiscountmoney : '100',
  restname : 'AI Rabea AI Arabi',
  ratingicon : 'project2-images/icon.jpeg',
  ratingpoints : '4.4',
  arrivaltime : '30-35 ',
  restvarities : 'Araban, Lebanse',
  restlocation :'Mehdipatnam' 



},


{


  restimage : 'project2-images/rest-image-6.avif',
  restdiscount : '70',
  restdiscountmoney : '499',
  restname : 'McDonald\'s',
  ratingicon : 'project2-images/icon.jpeg',
  ratingpoints : '4.3',
  arrivaltime : '35-40 ',
  restvarities : 'Burgers, Beverages',
  restlocation :'Humayan Nagar' 






},

{

  restimage : 'project2-images/rest-image-7.avif',
  restdiscount : '20',
  restdiscountmoney : '50',
  restname : 'Agra Sweeets Banjara',
  ratingicon : 'project2-images/icon.jpeg',
  ratingpoints : '4.4',
  arrivaltime : '20-25 ',
  restvarities : 'Araban, Lebanse',
  restlocation :'Rambagh Colony' 






},



{

  restimage : 'project2-images/rest-image-8.avif',
  restdiscount : '15',
  restdiscountmoney : '299',
  restname : 'Mozo Pizza 2X Toppings',
  ratingicon : 'project2-images/icon.jpeg',
  ratingpoints : '4.3',
  arrivaltime : '15-25 ',
  restvarities : 'Italian, Fst Food, Deserts',
  restlocation :'Mehdipatnam' 



}






];


let dispHTML = '';
swiggyrestaurents.forEach(restaurent => {

dispHTML += `<div class="restaurent-container">
 
    <div class="rest-image">

      <img class="rest-image" src="${restaurent.restimage}">
      <div class="rest-discount">

        ${restaurent.restdiscount}% OFF UPTO ₹${restaurent.restdiscountmoney}

      </div>
    </div>

    <div class="rest-information">
      <p class="rest-name">${restaurent.restname}</p>
      <div class="rating-timearrival-container">
    
               <div class="rating-container">
             
                   <img class="rating-icon" src="project2-images/icon.jpeg">

               </div>

               <div class="rating-points">

                   ${restaurent.ratingpoints}

               </div>
             
               <div class="arrivaltime-container">
                     &bull; ${restaurent.arrivaltime} mins

               </div>

      </div>
      <p class="rest-varities">${restaurent.restvarities}...</p>
      <p class="rest-location">${restaurent.restlocation}</p>

    </div>





  </div> `


  document.querySelector('.spotlight-slider-container').innerHTML = dispHTML;


})



/**working of varities buttons */

function leftscroll() {

  document.getElementById('varityslider').scrollBy({
    left: -500,
    behavior:"smooth"
  });

 }


 
 function rightscroll() {

document.getElementById('varityslider').scrollBy({
  left: 500,
  behavior:"smooth"
});

}


function leftscrollspotlight() {

  document.getElementById('spotlightslider').scrollBy({
    left: -500,
    behavior:"smooth"
  });

 }


 function rightscrollspotlight() {

  document.getElementById('spotlightslider').scrollBy({
    left: 500,
    behavior:"smooth"
  });
  
  }







