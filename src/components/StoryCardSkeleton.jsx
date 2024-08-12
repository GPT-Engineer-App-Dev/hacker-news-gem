import React from 'react';

const StoryCardSkeleton = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 animate-pulse border border-hnblue-200">
      <div className="h-6 bg-hnblue-100 rounded w-3/4 mb-2"></div>
      <div className="flex justify-between items-center">
        <div className="h-4 bg-hnblue-100 rounded w-1/4"></div>
        <div className="h-4 bg-hnblue-100 rounded w-1/4"></div>
      </div>
    </div>
  );
};

export default StoryCardSkeleton;