import React from 'react';

const Hero: React.FC = () => {
  
  return (
    <div className="bg-red-500 py-16 text-white w-full h-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-end items-center h-full">
        <div className="md:w-1/2 text-right">
          <h1 className="text-4xl font-bold mb-4">Elevate Your Testing Experience</h1>
          <p className="text-xl mb-6">Streamline your QA process with our powerful and intuitive testing platform</p>
        </div>
      </div>
    </div>
  );
};

export { Hero as component }