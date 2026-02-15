import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
} from "recharts";

// 12 Color Options
const colors = [
  "#2563eb",
  "#16a34a",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#ec4899",
  "#14b8a6",
  "#f97316",
  "#0ea5e9",
  "#84cc16",
  "#6366f1",
  "#d946ef",
];

// Triangle Shape
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height}
    ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3}
    ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height}
    Z`;
};

const TriangleBar = (props) => {
  const { x, y, width, height, index } = props;
  const color = colors[index % colors.length];

  return (
    <path
      d={getPath(x, y, width, height)}
      fill={color}
      stroke="none"
    />
  );
};

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

    toast.error("Booking cancelled successfully!")
  };

  return (
    <div className="w-[90%] mx-auto my-10">
      <div className="bg-white px-10 rounded-4xl">
        {bookings.length > 0 && (
          <div className="w-full h-100 mb-10">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={bookings}
                margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />

                {/* Straight Names (No Tilt) */}
                <XAxis
                  dataKey="Name"
                  interval={0}
                />

                <YAxis width="auto" />

                {/* Static Bar */}
                <Bar
                  dataKey="Fee"
                  shape={<TriangleBar />}
                >
                  <LabelList dataKey="Fee" position="top" />
                </Bar>

              </BarChart>
            </ResponsiveContainer>
          </div>
        )}



      </div>
      <div className=" py-10 text-center">
        <h2 className="text-3xl font-bold">
          My Appointments Today
        </h2>
        <p className="py-6">Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
      </div>

      {bookings.length === 0 ? (
        <div className="text-center text-xl text-gray-500">
          No booking here
        </div>
      ) : (
        <div className="grid gap-6">
          {bookings.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white p-6 rounded-2xl shadow  items-center"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold">
                    {doctor.Name}
                  </h3>
                  <p>{doctor.Education}</p>
                </div>
                <p className="">
                  Appointment Fee: {doctor.Fee} Taka (Incl. Vat)
                </p>
              </div>

              <div className="text-center">
                <button
                  onClick={() => handleCancel(doctor.id)}
                  className="text-red-700 bg-white px-4 py-2 rounded-full hover:bg-red-200 border border-red-600 w-1/2"
                >
                  Cancel Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookings;
