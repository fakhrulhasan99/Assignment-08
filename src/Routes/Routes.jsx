import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs"
import Bookings from "../Pages/Bookings/Bookings"
import Contacts from "../Pages/Contacts/Contacts"
import Details from "../Pages/Details/Details";
import ErrorReg from "../Pages/ErrorReg/ErrorReg";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                // /doctorsData.json
                loader: () => fetch("https://raw.githubusercontent.com/fakhrulhasan99/Assignment-08/refs/heads/main/public/doctorsData.json").then(res => res.json()),
                Component: Home,
            },
            {
                path: "bookings",
                Component: Bookings,
            },
            {
                path: "blogs",
                loader: () => fetch("/blogsData.json")
                    .then(res => res.json()),
                Component: Blogs,
            },
            {
                path: "contacts",
                Component: Contacts
            },
            {
                path: "details/:reg",
                loader: () => fetch("/doctorsData.json")
                    .then(res => res.json()),
                Component: Details,
                errorElement: <ErrorReg />
            }
        ],
    },
]);