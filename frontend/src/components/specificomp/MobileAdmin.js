import React, { useState } from 'react';

const Admin = () => {
  const [mobile_brand, setMobileBrand] = useState('');
  const [mobile_model, setMobileModel] = useState('');
  const [mobile_release_date, setMobileReleaseDate] = useState('');
  const [responseConfirmation, setResponseConfirmation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const HandleSubmit = async () => {
    setLoading(true);
    setError(null); // Clear error state

    try {
      const response = await fetch('http://localhost:5000/api/mobiles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          brand: mobile_brand,
          model: mobile_model,
          release_date: mobile_release_date,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add product');
      }

      const result = await response.json();
      setResponseConfirmation(result);
      alert("Product Added Successfully!");
      window.location.reload();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const HandleDelete = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:5000/api/mobiles', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          brand: mobile_brand,
          model: mobile_model,
          release_date: mobile_release_date,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete mobile');
      }

      const result = await response.json();
      console.log('Mobile deleted successfully:', result);
      alert('Mobile Deleted Successfully!');
      window.location.reload();
    } catch (error) {
      console.error('Error deleting mobile:', error);
      setError('An error occurred while deleting the mobile.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-start space-y-4 p-4 border-2 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-fit mx-auto my-[5px] rounded-[10px] shadow-[8px_8px_15px_#bebebe,-8px_-8px_15px_#ffffff]">
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
        <label htmlFor="mobile_brand" className="sm:w-40 text-sm sm:text-right">Mobile Brand:</label>
        <input
          id="mobile_brand"
          value={mobile_brand}
          type="text"
          onChange={(e) => setMobileBrand(e.target.value)}
          className="border-black border-2 rounded-md w-full sm:w-60 h-10 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
        <label htmlFor="mobile_model" className="sm:w-40 text-sm sm:text-right">Mobile Model:</label>
        <input
          id="mobile_model"
          value={mobile_model}
          type="text"
          onChange={(e) => setMobileModel(e.target.value)}
          className="border-black border-2 rounded-md w-full sm:w-60 h-10 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
        <label htmlFor="mobile_release_date" className="sm:w-40 text-sm sm:text-right">Mobile Release Date:</label>
        <input
          id="mobile_release_date"
          value={mobile_release_date}
          type="text"
          onChange={(e) => setMobileReleaseDate(e.target.value)}
          className="border-black border-2 rounded-md w-full sm:w-60 h-10 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className='flex justify-center w-full'>
        <button
          className="text-white bg-blue-500 rounded-lg p-2 w-full sm:w-max mt-4 ml-auto mr-auto"
          onClick={HandleSubmit}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Add Product'}
        </button>

        <button
          className="text-white bg-blue-500 rounded-lg p-2 w-full sm:w-max mt-4 ml-auto mr-auto"
          onClick={HandleDelete}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Delete Product'}
        </button>
      </div>

      {/* Display error or success messages */}
      {responseConfirmation && 
      <p className="text-green-500">Product added successfully!</p>
      }
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Admin;
