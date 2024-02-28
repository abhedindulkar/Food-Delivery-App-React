import React, { Suspense, lazy, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Components/ErrorElement";
import Contact from "./Components/Contact";
import Restaurant from "./Components/Restaurant";

/**
 * Header
 *  - Logo
 *  - Link Items.
 *      -
 * Body
 *  - SearchBar
 *  - Restaurant Cards
 *
 * Footer
 */

const About = lazy(() => import("./Components/About"));

const Main = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

// main rendering
// rendering Header
// rendering the about component
// footer rendering
// header useEffect called
// about useEffect
// footer useEfffect
// main useEffect

/**
 * * One by one rendering happens likewise the useeffect or component did mount but from child to parent.
 */

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Body />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/about-us",
                element: (
                    <Suspense>
                        <About />
                    </Suspense>
                ),
                errorElement: <ErrorPage />,
            },
            {
                path: "/contact-us",
                element: <Contact />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/restaurants/:resId",
                element: <Restaurant />,
                errorElement: <ErrorPage />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);

// React.createElement('h1', {id: 'h1tag'}, [
//     React.createElement('div', {}, 'newTag'),
//     React.createElement('div', {}, 'newTag1')
// ]));

// const header = (
//     <h1 id="root" className="newroot" tabIndex={3}>
//       <h2>dd</h2>
//       This is from JSX
//     </h1>
//   );

//   const Component = () => {
//     return (
//       <div>
//         <h1> this is an component </h1>
//       </div>
//     );
//   };

//   const element2 = (
//     <h1>
//       this is an element2{" "}
//       <a href="">
//         <div> link</div>
//       </a>
//       <Component />
//     </h1>
//   );
//   const element = <div>{element2} this is an element</div>;


