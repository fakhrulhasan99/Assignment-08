import React, { useEffect, useState } from "react";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    document.title = "Bookings | Doc Talk";

    const storedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    setBookings(storedBookings);
  }, []);

  const handleCancel = (id) => {
    const updatedBookings = bookings.filter(
      (doctor) => doctor.id !== id
    );

    setBookings(updatedBookings);
    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );
  };

  return (
    <div className="w-[90%] mx-auto my-10">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Your Appointments
      </h2>

      {bookings.length === 0 ? (
        <div className="text-center text-xl text-gray-500">
          No booking here
        </div>
      ) : (
        <div className="grid gap-6">
          {bookings.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white p-6 rounded-2xl shadow flex justify-between items-center"
            >
              <div>
                <h3 className="text-2xl font-bold">
                  {doctor.Name}
                </h3>
                <p>{doctor.Education}</p>
                <p className="text-blue-600 font-semibold">
                  Fee: {doctor.Fee} Taka
                </p>
              </div>

              <button
                onClick={() => handleCancel(doctor.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookings;
