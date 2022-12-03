import React from 'react'
import {Card}  from "./Card";
import "./Navbar.css";

let data = [
  {
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
    title: "Top Offers"
  },
  {
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
    title: "Grocery"
  },
  {
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
    title: "Mobiles"
  },
  {
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
    title: "Top Offers"
  },
  {
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
    title: "Top Offers"
  },
  {
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
    title: "Top Offers"
  },
  {
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
    title: "Top Offers"
  },
  {
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
    title: "Top Offers"
  },
  {
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
    title: "Top Offers"
  }
];

export default function Navbar() {
  return (
    <div className="Navbar">
    {data.map((item) => (
        <div>
          <Card image={item.image} 
          title={item.title} />
        </div>
      ))}
    </div>
  )
}
