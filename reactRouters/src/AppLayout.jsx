import React  from "react"
import { Outlet } from "react-router-dom";

const Applayout = () => {

    const Header = () => {
        return (
            <div>
                <h1>Header</h1>
            </div>
        )
    };
    const Footer = () => {
        return (
            <div>
                <h1>Footer</h1>
            </div>
        )
    };
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
};
export default Applayout
/* every page has a header or footer in their start and end, but we need to write it agiain and again, instead of this we can simply use the component and react router. 

to add the head and foot for every page we need to declare the components home movie songs as the chidren of the applayout in app.jsx. 

the children is the array of objects which is same as the component array of object

and using outlet component we can actually show it like we want without making the header and footer again and again and we need to use the header and footer comp only once */