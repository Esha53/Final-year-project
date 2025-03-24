import { useState } from "react";
import { ChevronDown, X } from "lucide-react";

const ExploreFilters = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    feeRange: "",
    location: "",
    faculty: "",
    degreeType: "",
  });

  const toggleFilters = () => setShowFilters(!showFilters);
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };
  const clearFilters = () =>
    setFilters({ feeRange: "", location: "", faculty: "", degreeType: "" });

  return (
    <div className="p-4 w-full max-w-3xl mx-auto relative">
      <div className="absolute top-0 right-0 p-4">
        <button
          onClick={toggleFilters}
          className="px-4 py-2 bg-blue-900 text-white rounded-md flex items-center gap-2"
        >
          Filter <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {showFilters && (
        <div className="mt-16 p-4 shadow-lg rounded-lg bg-white border">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Fee Range</label>
              <input
                type="text"
                name="feeRange"
                value={filters.feeRange}
                onChange={handleChange}
                className="border p-2 rounded-md"
                placeholder="Enter fee range"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold">Location</label>
              <input
                type="text"
                name="location"
                value={filters.location}
                onChange={handleChange}
                className="border p-2 rounded-md"
                placeholder="Enter location"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold">Faculty</label>
              <input
                type="text"
                name="faculty"
                value={filters.faculty}
                onChange={handleChange}
                className="border p-2 rounded-md"
                placeholder="Enter faculty"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold">Degree Type</label>
              <select
                name="degreeType"
                value={filters.degreeType}
                onChange={handleChange}
                className="border p-2 rounded-md"
              >
                <option value="">Select Degree</option>
                <option value="Bachelors">Bachelors</option>
                <option value="Masters">Masters</option>
                <option value="PhD">PhD</option>
              </select>
            </div>

            <div className="flex justify-between">
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-gray-500 text-white rounded-md flex items-center gap-2"
              >
                Clear <X className="w-4 h-4" />
              </button>
              <button
                onClick={toggleFilters}
                className="px-4 py-2 bg-blue-900 text-white rounded-md"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExploreFilters;
