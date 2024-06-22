import React from "react";
import ReactDom from "react-dom/client";
const Header = () => {
    return (
      <div className="header">

        <div className="logo-container">
          <img id="applogo" src="https://ideogram.ai/assets/image/lossless/response/B8bSzK5AQHOhir-v2z5C5g" alt="99Food Logo" />
        </div>

        <div className="navitems">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
      </div>
    );
  };

  //stylecard is js obj
  const stylecard={
    height:"300px",
    width:"200px",
    border: "1px solid black",
    backgroundColor: "#f0f0f0",

    
  }
  const Rescard=(props)=>{
    return (
        <div className="rescard">
            <div>
                <img className="res-logo" src={props.src}></img>
                <h3>{props.resname}</h3>
                <h4>{props.cuisine}</h4>
                <h5>{props.rating}</h5>
            </div>

        </div>
    );

  };

  const restaurants = [
    {
      id: 1,
      src: "https://b.zmtcdn.com/data/pictures/8/20303438/6de68106976f96329d80d575cdf041e5.jpg?fit=around%7C750:500&crop=750:500;*,*",
      resname: "Fun Bytes",
      cuisine: "Burger, Pizza, Shakes",
      rating: "4.5",
    },
    {
      id: 2,
      src: "https://imageio.forbes.com/specials-images/imageserve/650867792b771ce527016623/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      resname: "Tim Hortons",
      cuisine: "Bagels, Coffee, Wraps",
      rating: "3.5",
    },
    {
      id: 3,
      src: "https://cdn.britannica.com/08/193908-050-66767D57/view-Subway-restaurant-Bangkok-Thailand.jpg",
      resname: "Subway",
      cuisine: "Subs, Cookies, Salads, Rice and Wraps",
      rating: "4.7",
    },
    {
      id: 4,
      src: "https://spicyhutindianbistro.com/wp-content/uploads/2022/09/spicy-hut-restaurant-real-image1.jpg",
      resname: "Indian Spicy Hut",
      cuisine: "Dal-Fry, Butter Chicken",
      rating: "4.5",
    },
    {
      id: 5,
      src: "https://osmows.com/wp-content/uploads/2022/04/osmows-mobile-retina-logo.png",
      resname: "Osmow's",
      cuisine: "Shawarma, Kebabs",
      rating: "4.0",
    },
    {
      id: 6,
      src: "https://media.istockphoto.com/id/637275080/photo/mcdonalds-exterior.jpg?s=612x612&w=0&k=20&c=2boXi-q35Isycmmte3vpnyo3FTtnGrpo6TxHzh-EZ30=",
      resname: "McDonald",
      cuisine: "Fries, Icecream, Burgers, Wraps",
      rating: "2.5",
    },
    {
      id: 7,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKYoNYjvDxm2BzA5zIhpGPBFk--EizC09hlw&ss",
      resname: "A&W",
      cuisine: "Burgers, Nuggets, Wings",
      rating: "2.9",
    },
    {
      id: 8,
      src: "https://media-cdn.tripadvisor.com/media/photo-s/29/ba/1f/8c/rasoi-indian-restaurant.jpg",
      resname: "Rasoi",
      cuisine: "PavBhaji, Paneer Butter Masala, Chana Masala",
      rating: "3.3",
    },
  ];

  
  const BodyComp=()=>{
    return (
        <div className="BodyComp">
                <div className="search-bar"> SEARCH </div>
                {/* style={stylecard} */}

                <div className="cardcontainer">
                {/* //passing props to func component */}
                  <Rescard src="https://b.zmtcdn.com/data/pictures/8/20303438/6de68106976f96329d80d575cdf041e5.jpg?fit=around%7C750:500&crop=750:500;*,*"resname="Fun Bytes" cuisine="Burger,Pizza ,Shakes" rating="4.5"/ >
                  <Rescard src="https://imageio.forbes.com/specials-images/imageserve/650867792b771ce527016623/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds"resname="Tim Hortons" cuisine="Bagels,Coffee,Wraps" rating="3.5"/>
                  <Rescard src="https://cdn.britannica.com/08/193908-050-66767D57/view-Subway-restaurant-Bangkok-Thailand.jpg" resname="Subway" cuisine="Subs,Cookies,Salads,Rice and Wraps" rating="4.7"/>
                  <Rescard src="https://spicyhutindianbistro.com/wp-content/uploads/2022/09/spicy-hut-restaurant-real-image1.jpg" resname="Indian Spicy Hut" cuisine="Dal-Fry,Butter Chicken" rating="4.5"/>
                  <Rescard src="https://osmows.com/wp-content/uploads/2022/04/osmows-mobile-retina-logo.png" resname="Osmow's" cuisine="Shawarma,Kebabs" rating="4.0"/>
                  <Rescard src="https://media.istockphoto.com/id/637275080/photo/mcdonalds-exterior.jpg?s=612x612&w=0&k=20&c=2boXi-q35Isycmmte3vpnyo3FTtnGrpo6TxHzh-EZ30=" resname="McDonald" cuisine="Fries,Icecream,Burgers,Wraps" rating="2.5"/>
                  <Rescard src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKYoNYjvDxm2BzA5zIhpGPBFk--EizC09hlw&ss" resname="A&W" cuisine="Burgers,Nuggets,Wings" rating="2.9"/>
                  <Rescard src="https://media-cdn.tripadvisor.com/media/photo-s/29/ba/1f/8c/rasoi-indian-restaurant.jpg" resname="Rasoi" cuisine="PavBhaji,Paneer Butter Masala ,Chana Masala" rating="3.3"/>
                       
                </div>
        </div>
    );
  };
const Appcomponent=()=>{
    return (
        <div className="appcomponent">
            <Header/>
            <BodyComp/>
        </div>
    );
};
const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<Appcomponent/>);