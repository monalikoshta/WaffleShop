// import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import products from "../data/products.json";

export interface ImageCarousal {
  title: string;
  link: string;
  id: string;
  body: string;
  price: number;
}

const MultiImageCarousal = () => {
  // var [resources, setResources] = useState([]);
  // const url = "/data/products.json";
  // const fetchInfo = () => {
  //   return fetch(url)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       // console.log("data", data);
  //       setResources(data.products);
  //     });
  // };
  // useEffect(() => {
  //   fetchInfo();
  // }, []);

  const resources = products.products;

  return (
    <div>
      <h1 className="text-4xl font-Diphylleia pb-10 font-bold">Our Products</h1>
      <div className="flex flex-wrap justify-around">
        {resources.map((x: ImageCarousal) => {
          return (
            <div key={x.id} className="m-2">
              <ProductCard
                title={x.title}
                link={x.link}
                id={x.id}
                body={x.body}
                price={x.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

// {
//     title: "Banana Cinnamon",
//     link: "src/assets/alena-ganzhela-AFFbJzJcXdw-unsplash.jpg",
//     name: "",
//     body: "A healthy option to start your day with",price:100
//   },
//   {
//     title: "Creamy Crunch",
//     link: "src/assets/sheelah-brennan-ISOMpKCO_oo-unsplash.jpg",
//     name: "",
//     body: "A perfect blend of cream and crunch",price:100
//   },

export default MultiImageCarousal;
