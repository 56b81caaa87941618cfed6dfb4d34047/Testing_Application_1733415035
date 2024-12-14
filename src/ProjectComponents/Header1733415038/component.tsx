import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-purple-500 text-white p-4 w-full h-full"> {/* Full width and height */}
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="text-2xl font-bold">TestPro</div>
      </div>
    </header>
  );
};

export { Header as component };