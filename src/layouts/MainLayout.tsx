import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <section>
        <Navbar />
        <div className="w-full">{children}</div>
      </section>
    </>
  );
};

export default MainLayout;
