import React from "react";

const Intro = () => {
  return (
    <div className="flex w-full flex-col gap-3 justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="mb-6">
        <img
          src="https://cdn.pixabay.com/photo/2024/09/11/06/00/character-9038820_1280.jpg"
          alt="Character Illustration"
          className="w-32 mx-auto"
        />
      </div>

      <h1 className="text-3xl font-bold text-gray-700 mb-4">
        Task Management & To-Do List
      </h1>
      <p className="text-gray-500 mb-4 text-sm">
        This productive tool is designed to help you better manage your tasks
        project-wise conveniently!
      </p>

      <button className="bg-purple-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-purple-700 transition duration-300">
        Let's Start
      </button>
    </div>
  );
};

export default Intro;
