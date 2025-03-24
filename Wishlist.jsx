import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdDelete } from "react-icons/md"; // Importing delete icon

export default function Wishlist() {
  const [programs, setPrograms] = useState([
    {
      name: "Computer Science Program",
      duration: "4 years",
      institute: "XYZ University",
      courses: "Algorithms, Data Structures, AI, Web Development",
      fee: "$40,000 per year",
      jobOpportunities: "Software Engineer, Data Analyst",
    },
    {
      name: "Data Science Program",
      duration: "2 years",
      institute: "ABC Institute",
      courses: "Python, Machine Learning, Big Data, Statistics",
      fee: "$30,000 per year",
      jobOpportunities: "Data Scientist, ML Engineer",
    },
    {
      name: "Data Science Program",
      duration: "2 years",
      institute: "ABC Institute",
      courses: "Python, Machine Learning, Big Data, Statistics",
      fee: "$30,000 per year",
      jobOpportunities: "Data Scientist, ML Engineer",
    },
    {
      name: "Data Science Program",
      duration: "2 years",
      institute: "ABC Institute",
      courses: "Python, Machine Learning, Big Data, Statistics",
      fee: "$30,000 per year",
      jobOpportunities: "Data Scientist, ML Engineer",
    },
    {
      name: "Data Science Program",
      duration: "2 years",
      institute: "ABC Institute",
      courses: "Python, Machine Learning, Big Data, Statistics",
      fee: "$30,000 per year",
      jobOpportunities: "Data Scientist, ML Engineer",
    },
  ]);

  const [selectedPrograms, setSelectedPrograms] = useState([]);
  const [showComparison, setShowComparison] = useState(false);

  // Function to handle selecting a program
  const handleSelectProgram = (index) => {
    setSelectedPrograms((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // Function to delete a program from the wishlist
  const handleDeleteProgram = (index) => {
    setPrograms((prev) => prev.filter((_, i) => i !== index));
    setSelectedPrograms((prev) => prev.filter((i) => i !== index));
  };

  // Function to close the comparison modal and clear selection
  const closeComparison = () => {
    setShowComparison(false);
    setSelectedPrograms([]); // Clear selections when modal is closed
  };

  return (
    <div className="bg-slate-100 min-h-screen p-6">
      {/* Program Selection List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 relative"
          >
            {/* Delete Button (Trash Icon) */}
            <button
              className="absolute top-2 right-2 text-black hover:text-red-600 transition"
              onClick={() => handleDeleteProgram(index)}
            >
              <MdDelete size={20} />
            </button>

            <input
              type="checkbox"
              className="mr-2"
              checked={selectedPrograms.includes(index)}
              onChange={() => handleSelectProgram(index)}
            />
            <h2 className="text-lg font-semibold text-gray-800">
              {program.name}
            </h2>
            <p className="text-gray-600">Duration: {program.duration}</p>
            <p className="text-gray-600">Institute: {program.institute}</p>
          </div>
        ))}
      </div>

      {/* Compare Button */}
      {selectedPrograms.length > 0 && (
        <div className="flex justify-center mt-6">
          <button
            className="bg-blue-900 text-white px-4 py-2 rounded-md"
            onClick={() => setShowComparison(true)}
          >
            Compare Selected Programs
          </button>
        </div>
      )}

      {/* Comparison Table */}
      {showComparison && selectedPrograms.length > 0 && (
        <div className="mt-10 bg-white shadow-lg rounded-lg p-6 relative">
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 bg-black text-white p-2 rounded-full hover:bg-red-700 transition"
            onClick={closeComparison}
          >
            <IoClose size={20} />
          </button>

          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-700 text-center mb-4">
            Selected Program Comparison
          </h3>

          {/* Table */}
          <table className="w-full border text-sm text-gray-700">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Program</th>
                <th className="border p-2">Duration</th>
                <th className="border p-2">Institute</th>
                <th className="border p-2">Courses</th>
                <th className="border p-2">Fee</th>
                <th className="border p-2">Career Paths</th>
              </tr>
            </thead>
            <tbody>
              {selectedPrograms.map((index) => (
                <tr key={index} className="text-center">
                  <td className="border p-2">{programs[index].name}</td>
                  <td className="border p-2">{programs[index].duration}</td>
                  <td className="border p-2">{programs[index].institute}</td>
                  <td className="border p-2">{programs[index].courses}</td>
                  <td className="border p-2">{programs[index].fee}</td>
                  <td className="border p-2">
                    {programs[index].jobOpportunities}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
