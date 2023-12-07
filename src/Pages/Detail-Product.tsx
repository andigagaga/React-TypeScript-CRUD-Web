// DetailProduct.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

type DetailProductProps = {};

const DetailProduct: React.FC<DetailProductProps> = () => {
  const { id }: any = useParams(); // Mengambil parameter id dari URL
  const [product, setProduct] = useState<Product | null>(null);

  const url = `https://fakestoreapi.com/products/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const dataProduct = await response.json();
        setProduct(dataProduct);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url]);

  if (!product) {
    return (
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="ms-3">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image} alt={product.title} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-muted">${product.price}</span>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DetailProduct;
