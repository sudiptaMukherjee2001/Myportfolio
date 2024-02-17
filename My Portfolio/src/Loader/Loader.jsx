import React, { useEffect } from "react";

import "./style.css"
const Loader = ({ setIsLoading, isLoading }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(!isLoading);
        }, 3000);

        return () => clearTimeout(timer);
    },);
    return (
        <div className="loader_wrapper">
            <div className="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader