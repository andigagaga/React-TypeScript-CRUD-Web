import { Box } from "@chakra-ui/react";
import React, { useState } from "react";

interface ProductData {
  title: string;
  description: string;
  image: string;
  id?: number; // Menambahkan field ID sebagai optional
}

export default function FormProduct() {
  const [productData, setProductData] = useState<ProductData>({
    title: '',
    description: '',
    image: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData)
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }

      const result = await response.json();
      console.log("Product added", result);

      // Perbarui state dengan ID yang diterima dari API
      setProductData({ ...productData, id: result.id });

    } catch (error:any) {
      console.error('Error adding product:', error.message);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-screen w-full">
      <Box>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Title</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            name="title"
            value={productData.title}
            onChange={handleChange}
          />
        </label>
      </Box>
      <Box>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            name="description"
            value={productData.description}
            onChange={handleChange}
          />
        </label>
      </Box>
      <Box>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Image</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            name="image"
            value={productData.image}
            onChange={handleChange}
          />
        </label>
      </Box>
      <Box>
        <button type="submit" className="btn btn-info h-4">Add Product</button>
      </Box>
    </form>
  );
}
