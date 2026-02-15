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
                loader: () => fetch("/doctorsData.json").then(res => res.json()),
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
                path: "details/:id",
                loader: () => fetch("/doctorsData.json").then(res => res.json()),
                Component: Details
            }
        ],
    },
]);