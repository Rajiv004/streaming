import React from 'react'

function Rating({rating}) {

      const maxStars = 5;
  const fullStar = '★';
  const emptyStar = '☆';

   const roundedRating = Math.round(rating);
  return (
    <div>
       <div className="text-yellow-400 text-4xl">
      {fullStar.repeat(roundedRating)}
      {emptyStar.repeat(maxStars - roundedRating)}
    </div>
    </div>
  )
}

export default Rating
