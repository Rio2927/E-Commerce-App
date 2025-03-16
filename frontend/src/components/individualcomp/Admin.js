import React, { useState } from 'react';



    

const Admin = ({ api_url, product }) => {


  // {/* Latest Addition */}

  // const adminCategory = document.querySelector("#admin-category");
  // adminCategory.addEventListener("change",function () {
  // if (adminCategory.value === "Mobiles") {
  //   api_url = "http://localhost:5000/mobiles";
  //   product = "Mobile";
  // }
  // })
  // console.log("Selected Option ==> ",document.querySelector("#admin-category").api);

  // {/* Latest Addition */}



  const [productBrand, setProductBrand] = useState('');
  const [productModel, setProductModel] = useState('');
  const [productReleaseDate, setProductReleaseDate] = useState('');
  const [responseConfirmation, setResponseConfirmation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const [selectedCategory, setSelectedCategory] = useState('Mobiles');


  // Latest Addition

  // function handleCategoryChange (event) {
  //   setSelectedCategory(event.target.value);
  // } 

  // const apiUrls = {
  //   Mobiles: {api : "http://localhost:5000/mobiles", product : "Mobile"},
  //   Footwear: {api :  "http://localhost:5000/footwear",product : "Footwear"}
  // };

  // Latest Addition


  const HandleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(api_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          brand: productBrand,
          model: productModel,
          release_date: productReleaseDate,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add product');
      }

      const result = await response.json();
      setResponseConfirmation(result);
      alert('Product Added Successfully!');
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
      const response = await fetch(api_url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          brand: productBrand,
          model: productModel,
          release_date: productReleaseDate,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete product');
      }

      const result = await response.json();
      console.log('Product deleted successfully:', result);
      alert('Product Deleted Successfully!');
      window.location.reload();
    } catch (error) {
      console.error('Error deleting product:', error);
      setError('An error occurred while deleting the product.');
    } finally {
      setLoading(false);
    }
  };


  return (

    
    <div className="flex flex-col items-start space-y-4 p-4 border-2 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-fit mx-auto my-[5px] rounded-[10px]">
          <h3 className='w-full text-center font-bold'>{product} Admin</h3>


      {/* Latest Addition */}

      {/* <div className='w-full flex flex-col justify-center items-center'>
      <select className='border-2 w-80' id = "admin-category">                    onChange={handleCategoryChange}
        <option value="Mobiles" api = "http://localhost:5000/mobiles" >Mobiles</option>
        <option value="Footwear" api = "http://localhost:5000/footwear">Footwear</option>
      </select>
      </div> */}
    
      {/* Latest Addition */}


      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
        <label htmlFor={`${product}_brand`} className="sm:w-40 text-sm sm:text-right">Brand:</label>
        <input
          id={`${product}_brand`}
          value={productBrand}
          type="text"
          onChange={(e) => setProductBrand(e.target.value)}
          className="border-black border-2 rounded-md w-full sm:w-60 h-10 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
        <label htmlFor={`${product}_model`} className="sm:w-40 text-sm sm:text-right">Model:</label>
        <input
          id={`${product}_model`}
          value={productModel}
          type="text"
          onChange={(e) => setProductModel(e.target.value)}
          className="border-black border-2 rounded-md w-full sm:w-60 h-10 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
        <label htmlFor={`${product}_release_date`} className="sm:w-40 text-sm sm:text-right">Release Date:</label>
        <input
          id={`${product}_release_date`}
          value={productReleaseDate}
          type="text"
          onChange={(e) => setProductReleaseDate(e.target.value)}
          className="border-black border-2 rounded-md w-full sm:w-60 h-10 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-center w-full">
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
      {responseConfirmation && <p className="text-green-500">Product added successfully!</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Admin;
