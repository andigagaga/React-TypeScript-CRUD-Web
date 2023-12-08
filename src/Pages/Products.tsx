// ini post data , tapi saat post data datanya / id belom nambah karena ini fake api 

import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Pastikan Anda mengimpor file CSS Bootstrap
import { Link } from "react-router-dom";

export interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export default function Products() {
  const url = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState<Product[]>([]);

  const getDataProducts = async () => {
    try {
      const response = await fetch(url);
      const dataProducts = await response.json();
      setProducts(dataProducts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getDataProducts();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="mb-4">
        <Link to={`/postProduct`}>
          <Button variant="primary">Post Your Product</Button>
        </Link>

        </div>
        {products.map((item: Product) => (
          <div key={item.id} className="col-12 col-md-6 col-lg-4 mb-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.image} alt={item.title} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <Link to={`/products/${item.id}`}>
                    <Button variant="primary">Details</Button>
                  </Link>
                  <span className="text-muted">${item.price}</span>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
