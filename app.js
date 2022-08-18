var Car={
    vechile:"car",
    imageUrl:"https://images.unsplash.com/photo-1588127333419-b9d7de223dcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    farePerKilo:4,
    capacity:4,
    description:"Hear the roar of a Mustang as the ground starts to tremble and your legs start to shake. As always, Mustang draws upon its performance roots with features for enhanced handling, high-powered engine options and a classic Mustang design."
    }

    var Bike={
    vechile:"Bike",
    imageUrl:"https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    farePerKilo:2,
    capacity:2,
    description:"Royal Enfield bike price starts from Rs. 1,47,910. Royal Enfield offers 8 new models in India with most popular bikes being Hunter 350, Classic 350 and Meteor 350. The upcoming bikes of Royal Enfield include Bullet 350 Next Gen, Super Meteor 650"
    }

    var Bus={
    vechile:"Bus",
    imageUrl:"https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    farePerKilo:3,
    capacity:50,
    description:"Hear the roar of a Mustang as the ground starts to tremble and your legs start to shake. As always, Mustang draws upon its performance roots with features for enhanced handling, high-powered engine options and a classic Mustang design."
    }

function Card(cardObject){
    const cardContainer = document.getElementById("card-container");
    const div=document.createElement("div");
    div.innerHTML=`
    <div class="col">
    <div class="card ">
      <img src=${cardObject.imageUrl} class="img-fluid">
      <div class="card-body">
        <h4 class="">${cardObject.vechile}</h4>
        <p class="card-text">${cardObject.description}</p>
        <small class="card-text fw-bold">Fare Per Kilo : ${cardObject.farePerKilo}</small>
        <small class="card-text fw-bold">Capacity : ${cardObject.capacity}</small>
      </div>
      <button class="btn btn-primary w-50 d-block mx-auto my-3">BOOK NOW</button>
    </div>         
 </div>
    `
    cardContainer.appendChild(div)

}
Card(Car)
Card(Bike)
Card(Bus)


