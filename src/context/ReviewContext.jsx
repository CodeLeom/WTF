/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const base_url = import.meta.env.VITE_BASE_URL
const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    fetch(`${base_url}/review`)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setReview(data);
          setLoading(false);
        }, 1000);
      });
  }, []);
  


  //  function to add a review
  const AddReview = async(newReview) => {
    const res = await fetch(`${base_url}/review`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newReview)
    })
    const data = await res.json()
    setReview([data, ...review]);
  };

  // function to delete a review
  const deleteReview = async(id) => {
    if (window.confirm("Are you sure, you want to delete this review?")) {
      await fetch(`${base_url}/review/${id}`, {
        method: 'DELETE'
      })
      setReview(review);
    }
  };

  return (
    <ReviewContext.Provider
      value={{ review, AddReview, deleteReview, loading }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewContext;
