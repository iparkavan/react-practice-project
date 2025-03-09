"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";

interface Product {
  id: number | null;
  name: string;
  price: string;
}

const CrucOperation = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product>({
    id: null,
    name: "",
    price: "",
  });
  const [editingId, setEditingId] = useState(null);

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Create or Update Product
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (editingId) {
      setProducts(
        products.map((p) =>
          p.id === editingId ? { ...product, id: editingId } : p
        )
      );
      setEditingId(null);
    } else {
      setProducts([...products, { ...product, id: Date.now() }]);
    }

    setProduct({ id: null, name: "", price: "" });
  };

  // Edit Product
  const handleEdit = (id: any) => {
    const productToEdit = products.find((p) => p.id === id);
    console.log(productToEdit);
    if (productToEdit) {
      setProduct(productToEdit);
      setEditingId(id);
    }
  };

  // Delete Product
  const handleDelete = (id: any) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div
      style={{ maxWidth: "400px", margin: "20px auto", textAlign: "center" }}
    >
      <h2>Product CRUD</h2>

      {/* Product Form */}
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          required
        />
        <button type="submit">
          {editingId ? "Update Product" : "Add Product"}
        </button>
      </form>

      {/* Product List */}
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {products.map((p) => (
          <li
            key={p.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span>
              {p.name} - ${p.price}
            </span>
            <div>
              <button onClick={() => handleEdit(p.id)}>Edit</button>
              <button
                onClick={() => handleDelete(p.id)}
                style={{ marginLeft: "10px" }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrucOperation;
