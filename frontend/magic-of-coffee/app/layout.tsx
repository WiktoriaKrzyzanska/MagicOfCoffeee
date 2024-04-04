import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => (<>
        <main>{children}</main>
    </>);

export default Layout;
