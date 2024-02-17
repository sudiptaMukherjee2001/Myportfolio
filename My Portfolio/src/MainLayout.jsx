import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Loader from './Loader/Loader';

export const MainLayout = () => {
    const [isLoading, setIsLoading] = useState(true);

    // Simulating a delay for loading (you can replace this with actual loading logic)


    return (
        <React.StrictMode>
            <App />
            {/*  {isLoading ? (
                <Loader setIsLoading={setIsLoading} isLoading={isLoading} />
            ) : (
            )} */}
        </React.StrictMode>
    );
};

