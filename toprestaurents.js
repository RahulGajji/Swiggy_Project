const toprestaurents = [


{
    toprestimage : 'project2-images/top-rest-1.avif',
    toprestname : 'Chineese Kitchen',
    toprestpoints : '4.8',
    toprestarrival : '30-50',
    toprestvarities : 'Manchuira,Crispy noodiles, Meatballs',
    toprestlocation : 'Kukatpally'

},

{

  toprestimage : 'project2-images/top-rest-2.avif',
  toprestname : 'Ovenstory Pizza',
  toprestpoints : '4.9',
  toprestarrival : '25-30',
  toprestvarities : 'Pizzas, Burgers',
  toprestlocation : 'Vnastalipuram'

},

{
  toprestimage : 'project2-images/top-rest-3.avif',
  toprestname : 'Kritunga Restaurent',
  toprestpoints : '4.5',
  toprestarrival : '10-25',
  toprestvarities : 'Chicken biryani, Starters',
  toprestlocation : 'Kukatpally'
},

{
  toprestimage : 'project2-images/top-rest-4.avif',
  toprestname : 'Bakewell Cake House',
  toprestpoints : '4.5',
  toprestarrival : '40-50',
  toprestvarities : 'Bakery, Sweets',
  toprestlocation : 'Tolichowki'
},
{
  toprestimage : 'project2-images/top-rest-5.avif',
  toprestname : 'Balaji Dhaba Exclusive',
  toprestpoints : '4.1',
  toprestarrival : '30-35',
  toprestvarities : 'North Indian, Biryani, Chinese',
  toprestlocation : 'Krishna Nagar'
},
{
  toprestimage : 'project2-images/top-rest-6.avif',
  toprestname : 'Pulla Reddy Sweets',
  toprestpoints : '4.6',
  toprestarrival : '25-30',
  toprestvarities : 'Sweets, Desserts, Snacks',
  toprestlocation : 'Mehdipatnam'
},
{
  toprestimage : 'project2-images/top-rest-7.avif',
  toprestname : 'Stop  Go',
  toprestpoints : '4.3',
  toprestarrival : '35-40',
  toprestvarities : 'Bakery, Snacks, Beverages',
  toprestlocation : 'Lakdikapul'
},
{
  toprestimage : 'project2-images/top-rest-8.avif',
  toprestname : 'Kwality Walls Frozen Dessert',
  toprestpoints : '4.6',
  toprestarrival : '30-35',
  toprestvarities : 'ice cream, Desserts ',
  toprestlocation : 'Charminar'
},
{
  toprestimage : 'project2-images/top-rest-9.avif',
  toprestname : 'Hotel SVM GRand',
  toprestpoints : '4.3',
  toprestarrival : '30-35',
  toprestvarities : 'South Indian, North Indian',
  toprestlocation : 'Attapur'
},
{
  toprestimage : 'project2-images/top-rest-10.avif',
  toprestname : 'Subway',
  toprestpoints : '3.9',
  toprestarrival : '30-35',
  toprestvarities : 'Salads, Snacks, Desserts',
  toprestlocation : 'Rambagh Colony'

},
{
  toprestimage : 'project2-images/top-rest-11.avif',
  toprestname : 'Pista House Tea',
  toprestpoints : '4.6',
  toprestarrival : '35-40',
  toprestvarities : 'Tandoor, Biryani, Chinese',
  toprestlocation : 'Uppal'

}, 
{
  toprestimage : 'project2-images/top-rest-4.avif',
  toprestname : 'Smoky Docky',
  toprestpoints : '4.3',
  toprestarrival : '35-40',
  toprestvarities : 'Lebanese, Shawarma, Salads',
  toprestlocation : 'Masab Tank'
}
];


let disphtml2 = '';
toprestaurents.forEach(toprestaurent => {

  disphtml2 += ` <div class="div-image  col-7 col-sm-6 col-md-4 col-lg-3 pb-3">
              <img class="top-rest-image" src="${toprestaurent.toprestimage}">
  
              <div class="col-12 d-none d-sm-block">
                  <p class="rest-name">${toprestaurent.toprestname}</p>
                  <div class="rating-timearrival-container">
      
                  <div class="rating-container">
                
                      <img class="rating-icon" src="project2-images/icon.jpeg">
      
                  </div>
      
                  <div class="rating-points">
      
                  ${toprestaurent.toprestpoints}
      
                  </div>
                
                  <div class="arrivaltime-container">
                        &bull; ${toprestaurent.toprestarrival} mins
      
                  </div>
      
          </div>
                  <p class="rest-varities">${toprestaurent.toprestvarities}...</p>
                  <p class="rest-location">${toprestaurent.toprestlocation}</p>
            </div>
          </div>
  
          <div class="col-5  d-sm-none p-0 ">
            
            <p class="rest-name">${toprestaurent.toprestname}</p>
            <div class="rating-timearrival-container">
      
              <div class="rating-container">
            
                  <img class="rating-icon" src="project2-images/icon.jpeg">
  
              </div>
  
              <div class="rating-points">
  
                    ${toprestaurent.toprestpoints}
  
              </div>
            
              <div class="arrivaltime-container">
                    &bull;  ${toprestaurent.toprestarrival}  mins
  
              </div>
  
      </div>
      <p class="rest-varities">${toprestaurent.toprestvarities}...</p>
      <p class="rest-location">${toprestaurent.toprestlocation}</p>
  
  
          </div>`;

          console.log(disphtml2)
          document.querySelector('.top-restaurent').innerHTML = disphtml2;

});

