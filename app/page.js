'use client';
import Header from '@/components/Header/Header';
import { useState, useEffect } from 'react';
export default function Home() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addProduct = (e) => {
    e.preventDefault();
    console.log('form Data', formData);
  };
  // Sample stock data (replace with your actual stock data)
  const stockData = [
    { id: 1, name: 'Product 1', price: 20, quantity: 10 },
    { id: 2, name: 'Product 2', price: 50, quantity: 5 },
    { id: 3, name: 'Product 3', price: 30, quantity: 8 },
    // Add more stock items as needed
  ];

  return (
    <div className='w-full'>
      <Header />

      <div className='container mx-auto'>
        <div class='flex items-center'>
          <div class='mr-4'>
            <select class='p-2 border border-gray-300 rounded-md text-sm'>
              <option value=''>All</option>
              <option value='name'>Name</option>
              <option value='quantity'>Quantity</option>
            </select>
          </div>
          <div class='flex items-center'>
            <input
              type='text'
              placeholder='Search...'
              class='p-2 border border-gray-300 rounded-md text-sm'
            />
            <button type='submit' class='ml-2 p-2 bg-gray-200 rounded-md'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'>
                <circle cx='11' cy='11' r='8' />
                <line x1='21' y1='21' x2='16.65' y2='16.65' />
              </svg>
            </button>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-4'>
          <div className='bg-white p-4 w-full'>
            <h2 className='text-lg font-semibold mb-4'>Add Product</h2>
            <form>
              <div className='mb-4 w-full'>
                <label htmlFor='productName' className='block font-semibold'>
                  Product Slug
                </label>
                <input
                  onChange={handleChange}
                  name='slug'
                  type='text'
                  id='productName'
                  className='w-full border border-gray-300 px-2 py-1'
                />
              </div>
              <div className='mb-4 w-full'>
                <label
                  htmlFor='productQuantity'
                  className='block font-semibold'>
                  Product Quantity
                </label>
                <input
                  onChange={handleChange}
                  name='quantity'
                  type='number'
                  id='productQuantity'
                  className='w-full border border-gray-300 px-2 py-1'
                />
              </div>
              <div className='mb-4 w-full'>
                <label htmlFor='price' className='block font-semibold'>
                  Price
                </label>
                <input
                  onChange={handleChange}
                  name='price'
                  type='price'
                  id='price'
                  className='w-full border border-gray-300 px-2 py-1'
                />
              </div>
              <button
                onClick={addProduct}
                type='submit'
                className='bg-blue-500 text-white px-4 py-2 rounded-md'>
                Add
              </button>
            </form>
          </div>
        </div>

        <div className='overflow-x-auto'>
          <table className='min-w-full bg-white border border-gray-200'>
            <thead>
              <tr>
                <th className='px-6 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase border-b border-gray-200'>
                  ID
                </th>
                <th className='px-6 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase border-b border-gray-200'>
                  Product Name
                </th>
                <th className='px-6 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase border-b border-gray-200'>
                  Quantity
                </th>
                <th className='px-6 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase border-b border-gray-200'>
                  Price
                </th>
                <th className='px-6 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase border-b border-gray-200'>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {stockData.map((item) => (
                <tr key={item.id}>
                  <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'>
                    {item.id}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'>
                    {item.name}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'>
                    {item.quantity}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'>
                    {item.price}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap border-b border-gray-200'>
                    <div className='flex'>
                      <button className='bg-blue-500 text-white px-4 py-2 rounded-md mr-2'>
                        Edit
                      </button>
                      <button className='bg-green-500 text-white px-4 py-2 rounded-md'>
                        Update
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
