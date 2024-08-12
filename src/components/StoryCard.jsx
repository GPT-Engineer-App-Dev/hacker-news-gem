import React from 'react';
import { ExternalLink } from 'lucide-react';

const StoryCard = ({ story }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow border border-hnblue-200">
      <h2 className="text-lg font-semibold mb-2 text-hnblue-800">{story.title}</h2>
      <div className="flex justify-between items-center text-sm text-hnblue-600">
        <span>Points: {story.points}</span>
        <a
          href={story.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-hnblue-500 hover:text-hnblue-700"
        >
          Read more <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default StoryCard;