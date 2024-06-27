import React, { ReactNode } from 'react';
import Header from "../header/Header";
import Footer from '../footer/Footer';

interface LayoutProps {
    children: ReactNode;
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;