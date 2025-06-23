import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/products/productSlice';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import './tiptap.css';

const Productlist = () => {
  const dispatch = useDispatch();
  const [showQuickPoints, setShowQuickPoints] = useState(true);
  const [showFAQ, setShowFAQ] = useState(true);
  const [showVariants, setShowVariants] = useState(true);
  const [enableReviews, setEnableReviews] = useState(false);
  const [mainImage, setMainImage] = useState(null);
  const [galleryImage, setGalleryImage] = useState(null);
  const [productName, setProductName] = useState('');
  const [sku, setSku] = useState('');
  const [brand, setBrand] = useState('');

  const shortDescription = useEditor({ extensions: [StarterKit], content: '' });
  const description = useEditor({ extensions: [StarterKit], content: '' });

  const handlePublish = () => {
    dispatch(addProduct({
      name: productName,
      sku,
      brand,
      enableReviews,
      shortDescription: shortDescription?.getHTML(),
      description: description?.getHTML(),
    }));
    setProductName('');
    setSku('');
    setBrand('');
    shortDescription?.commands.setContent('');
    description?.commands.setContent('');
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Add a new product</h2>
          <p className="text-sm text-gray-500">Orders placed across your store</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-1 border rounded">Discard</button>
          <button className="px-4 py-1 border rounded">Save Draft</button>
          <button onClick={handlePublish} className="px-4 py-1 bg-yellow-600 text-white rounded">Publish Product</button>
        </div>
      </div>

      {/* Product Information */}
      <section className="bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="text-lg font-semibold">Product information</h3>
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Product Name" className="input w-full border rounded p-2" />
        <div className="flex gap-4">
          <input type="text" value={sku} onChange={(e) => setSku(e.target.value)} placeholder="SKU" className="input flex-1 border rounded p-2" />
          <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="Brand" className="input flex-1 border rounded p-2" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Short Description</label>
          <EditorContent editor={shortDescription} className="tiptap border p-2 rounded" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Full Description</label>
          <EditorContent editor={description} className="tiptap border p-2 rounded" />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm">Enable Reviews</label>
          <input type="checkbox" checked={enableReviews} onChange={() => setEnableReviews(!enableReviews)} />
        </div>
      </section>

      {/* Category */}
      <section className="bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="text-lg font-semibold">Category</h3>
        <select className="input w-full border rounded p-2">
          <option>Select Category</option>
        </select>
        <select className="input w-full border rounded p-2">
          <option>Select Primary Sub-Category</option>
        </select>
        <select className="input w-full border rounded p-2">
          <option>Select Secondary Sub-Category</option>
        </select>
      </section>

      {/* Quick Points */}
      <section className="bg-white p-6 rounded-xl shadow space-y-4">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold">Quick Points</h3>
          <input type="checkbox" checked={showQuickPoints} onChange={() => setShowQuickPoints(!showQuickPoints)} />
        </div>
        {showQuickPoints && [1, 2, 3].map(i => (
          <div className="flex items-center gap-4" key={i}>
            <input type="text" placeholder={`Point ${i}`} className="input flex-1 border rounded p-2" />
            <input type="file" className="text-sm" />
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section className="bg-white p-6 rounded-xl shadow space-y-4">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold">FAQ</h3>
          <input type="checkbox" checked={showFAQ} onChange={() => setShowFAQ(!showFAQ)} />
        </div>
        <input type="text" placeholder="Enter Heading" className="input w-full border rounded p-2" />
        <input type="text" placeholder="Enter Description" className="input w-full border rounded p-2" />
        <button className="mt-2 px-4 py-1 bg-yellow-600 text-white rounded text-sm">+ Add Another Option</button>
      </section>

      {/* Images */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-gray-500">Main Image</p>
          <input
            type="file"
            onChange={(e) => setMainImage(e.target.files[0])}
            className="mt-4 text-sm"
          />
          {mainImage && <p className="text-sm mt-2 text-green-600">{mainImage.name}</p>}
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-gray-500">Gallery Image</p>
          <input
            type="file"
            onChange={(e) => setGalleryImage(e.target.files[0])}
            className="mt-4 text-sm"
          />
          {galleryImage && <p className="text-sm mt-2 text-green-600">{galleryImage.name}</p>}
        </div>
      </section>

      {/* Variants */}
      <section className="bg-white p-6 rounded-xl shadow space-y-4">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold">Variants</h3>
          <input type="checkbox" checked={showVariants} onChange={() => setShowVariants(!showVariants)} />
        </div>
        <input type="text" placeholder="Variant Name" className="input border rounded p-2 w-full" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm mb-1">Image</p>
            <input type="file" className="text-sm" />
          </div>
          <div className="space-y-2">
            {[1, 2, 3, 4].map(p => (
              <select key={p} className="input w-full border rounded p-2">
                <option>{`Select Parameter ${p}`}</option>
              </select>
            ))}
            <label className="flex items-center gap-2 mt-2">
              <input type="checkbox" />
              <span className="text-sm">Mark as default variant</span>
            </label>
          </div>
        </div>
        <button className="mt-2 px-4 py-1 bg-yellow-600 text-white rounded text-sm">+ Add Another Option</button>
      </section>
    </div>
  );
};

export default Productlist;
