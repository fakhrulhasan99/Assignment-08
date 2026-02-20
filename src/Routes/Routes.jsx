import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs"
import Bookings from "../Pages/Bookings/Bookings"
import Contacts from "../Pages/Contacts/Contacts"
import Details from "../Pages/Details/Details";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                loader: () => fetch("https://raw.githubusercontent.com/fakhrulhasan99/Assignment-08/refs/heads/main/public/doctorsData.json").then(res => res.json()),
                // loader: async () => {
                //     const res = await fetch("/doctorsData.json");
                //     const data = await res.json();

                //     await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay

                //     return data;
                // },
                Component: Home,
            },
            {
                path: "bookings",
                Component: Bookings,
            },
            {
                path: "blogs",
                Component: Blogs,
            },
            {
                path: "contacts",
                Component: Contacts
            },
            {
                // /doctorsData.json
                path: "details/:id",
                loader: () => fetch("/doctorsData.json").then(res => res.json()),
                Component: Details
            }
        ],
    },
]);