import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <ClipLoader color="#4A90E2" size={50} />
    </div>
  );
};

export default Spinner;
