import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import oneplus from '../assets/oneplus.png';
import magicmouse from '../assets/mouse.png';
import chair from '../assets/chair.png';
import airjordan from '../assets/shoes.png';
import samsung from '../assets/samsung.png';
import whatch from '../assets/whatch.png';
import sunglasses from '../assets/sunglass.png';
import intendo from '../assets/switch.png';

// Hardcoded products
const staticProducts = [
  {
    name: 'OnePlus 7Pro',
    brand: 'OnePlus',
    category: 'Switches',
    subCategory: 'Enterprise',
    sku: '238474',
    status: 'Active',
    image: oneplus,
  },
  {
    name: 'Magic Mouse',
    brand: 'Google',
    category: 'Switches',
    subCategory: 'Enterprise',
    sku: '238474',
    status: 'Active',
    image: magicmouse,
  },
  {
    name: 'Wooden Chair',
    brand: 'Insofar',
    category: 'Switches',
    subCategory: 'Enterprise',
    sku: '238474',
    status: 'Active',
    image: chair,
  },
  {
    name: 'Air Jordan',
    brand: 'Nike',
    category: 'Infrastructure',
    subCategory: 'Transceivers',
    sku: '238474',
    status: 'Inactive',
    image: airjordan,
  },
  {
    name: 'Nintendo Switch',
    brand: 'Nintendo',
    category: 'Infrastructure',
    subCategory: 'Transceivers',
    sku: '238474',
    status: 'Inactive',
    image: intendo,
  },
  {
    name: 'Apple Watch',
    brand: 'Apple',
    category: 'Infrastructure',
    subCategory: 'Transceivers',
    sku: '238474',
    status: 'Active',
    image: whatch,
  },
  {
    name: 'Note 10',
    brand: 'Samsung',
    category: 'Infrastructure',
    subCategory: 'Transceivers',
    sku: '238474',
    status: 'Active',
    image: samsung,
  },
  {
    name: 'Sunglasses',
    brand: 'Ray Ban',
    category: 'Infrastructure',
    subCategory: 'Transceivers',
    sku: '238474',
    status: 'Active',
    image: sunglasses,
  },
];

const Products = () => {
  const navigate = useNavigate();

  // Redux products (user added)
  const reduxProducts = useSelector((state) => state.products.products) || [];

  // Combine both hardcoded and Redux products
  const allProducts = [...reduxProducts, ...staticProducts];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-2">Products</h1>
      <div className="bg-white shadow rounded-xl p-4">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-md px-3 py-1 w-64 text-sm"
          />
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded-md text-sm">Export</button>
            <button className="px-3 py-1 border rounded-md text-sm">Tax %</button>
            <button className="px-3 py-1 border rounded-md text-sm">Category</button>
            <button
              onClick={() => navigate('/dashboard/products/add-products')}
              className="px-4 py-1 bg-yellow-600 text-white rounded-md text-sm font-semibold"
            >
              + Add Product
            </button>
          </div>
        </div>

        <table className="w-full text-sm">
          <thead className="text-gray-600 border-b">
            <tr>
              <th className="text-left py-2">PRODUCT</th>
              <th className="text-left py-2">CATEGORY</th>
              <th className="text-left py-2">SUB-CATEGORY</th>
              <th className="text-left py-2">SKU</th>
              <th className="text-left py-2">STATUS</th>
              <th className="text-left py-2">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((prod, idx) => (
              <tr key={idx} className="border-b">
                <td className="py-3 flex items-center gap-2">
                  <img
                    src={
                      typeof prod.image === 'object' && prod.image instanceof File
                        ? URL.createObjectURL(prod.image)
                        : prod.image
                    }
                    alt={prod.name}
                    className="h-8 w-8 object-contain"
                  />
                  <div>
                    <div className="font-medium">{prod.name}</div>
                    <div className="text-xs text-gray-500">{prod.brand}</div>
                  </div>
                </td>
                <td>{prod.category}</td>
                <td>{prod.subCategory}</td>
                <td>{prod.sku}</td>
                <td>
                  <span
                    className={`px-2 py-1 text-xs rounded-md ${
                      prod.status === 'Active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {prod.status}
                  </span>
                </td>
                <td>
                  <button className="text-gray-400 hover:text-gray-600">
                    ⋮
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-sm text-gray-500 mt-4 text-right">
          1–{allProducts.length} of {allProducts.length}
        </div>
      </div>
    </div>
  );
};

export default Products;
