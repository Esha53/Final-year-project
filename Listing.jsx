import React, { useState, useEffect } from "react";
import { PlusCircle, Edit, Trash2 } from "lucide-react";

const Listing = () => {
  const [showForm, setShowForm] = useState(false);
  const [listings, setListings] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    programName: "",
    instituteName: "",
    duration: "",
    fees: "",
    degreeLevel: "",
    attendanceType: "",
    description: "",
    curriculum: "",
    hasScholarship: "No",
    scholarshipDetails: "",
  });

  useEffect(() => {
    const savedListings = JSON.parse(localStorage.getItem("listings"));
    if (savedListings) {
      setListings(savedListings);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("listings", JSON.stringify(listings));
  }, [listings]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedListings = [...listings];
      updatedListings[editingIndex] = { ...formData };
      setListings(updatedListings);
      setEditingIndex(null);
    } else {
      setListings([...listings, { ...formData }]);
    }
    setShowForm(false);
    setFormData({
      programName: "",
      instituteName: "",
      duration: "",
      fees: "",
      degreeLevel: "",
      attendanceType: "",
      description: "",
      curriculum: "",
      hasScholarship: "No",
      scholarshipDetails: "",
    });
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setFormData({ ...listings[index] });
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const updatedListings = listings.filter((_, i) => i !== index);
    setListings(updatedListings);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">My Listings</h2>
        <div className="relative bg-white shadow-md rounded p-6">
          {!showForm && (
            <button
              onClick={() => {
                setShowForm(true);
                setEditingIndex(null);
              }}
              className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded shadow hover:bg-blue-800 transition"
            >
              Create Listing
              <PlusCircle size={20} />
            </button>
          )}

          {showForm && (
            <form
              onSubmit={handleSubmit}
              className="mt-4 p-4 border rounded bg-gray-50"
            >
              <input
                type="text"
                name="programName"
                placeholder="Program Name"
                value={formData.programName}
                onChange={handleChange}
                className="w-full border p-2 rounded mb-2"
                required
              />
              <input
                type="text"
                name="instituteName"
                placeholder="Institute Name"
                value={formData.instituteName}
                onChange={handleChange}
                className="w-full border p-2 rounded mb-2"
                required
              />
              <input
                type="text"
                name="duration"
                placeholder="Duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full border p-2 rounded mb-2"
                required
              />
              <input
                type="text"
                name="fees"
                placeholder="Fees"
                value={formData.fees}
                onChange={handleChange}
                className="w-full border p-2 rounded mb-2"
                required
              />
              <select
                name="degreeLevel"
                value={formData.degreeLevel}
                onChange={handleChange}
                className="w-full border p-2 rounded mb-2"
                required
              >
                <option value="">Select Degree Level</option>
                <option value="BS">BS</option>
                <option value="Master's">Master's</option>
                <option value="PhD">PhD</option>
              </select>
              <select
                name="attendanceType"
                value={formData.attendanceType}
                onChange={handleChange}
                className="w-full border p-2 rounded mb-2"
                required
              >
                <option value="">Select Attendance Type</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
                <option value="Hybrid">Hybrid</option>
              </select>
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border p-2 rounded mb-2"
                required
              ></textarea>
              <input
                type="text"
                name="curriculum"
                placeholder="Curriculum"
                value={formData.curriculum}
                onChange={handleChange}
                className="w-full border p-2 rounded mb-2"
              />
              <select
                name="hasScholarship"
                value={formData.hasScholarship}
                onChange={handleChange}
                className="w-full border p-2 rounded mb-2"
                required
              >
                <option value="No">No Scholarship</option>
                <option value="Yes">Scholarship Available</option>
              </select>
              {formData.hasScholarship === "Yes" && (
                <textarea
                  name="scholarshipDetails"
                  placeholder="Scholarship Details"
                  value={formData.scholarshipDetails}
                  onChange={handleChange}
                  className="w-full border p-2 rounded mb-2"
                  required
                ></textarea>
              )}
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
                >
                  {editingIndex !== null ? "Save Changes" : "Save Listing"}
                </button>
              </div>
            </form>
          )}

          {listings.map((listing, index) => (
            <div
              key={index}
              className="relative border p-6 mt-6 mb-3 rounded bg-white shadow"
            >
              <button
                onClick={() => handleDelete(index)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800"
              >
                <Trash2 size={20} />
              </button>
              <h3 className="text-xl font-bold">{listing.programName}</h3>
              <p>Institute: {listing.instituteName}</p>
              <p>Duration: {listing.duration}</p>
              <p>Fees: {listing.fees}</p>
              <p>Degree Level: {listing.degreeLevel}</p>
              <p>Attendance Type: {listing.attendanceType}</p>
              <p>Description: {listing.description}</p>
              {listing.hasScholarship === "Yes" && (
                <p className="text-green-600 font-semibold">
                  Scholarship: {listing.scholarshipDetails}
                </p>
              )}
              <button
                onClick={() => handleEdit(index)}
                className="absolute bottom-2 left-2 text-blue-600 hover:text-blue-800"
              >
                <Edit size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listing;
