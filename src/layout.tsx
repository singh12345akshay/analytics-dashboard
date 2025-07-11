import React, { ReactNode } from 'react';

import Sidebar from './components/sidebar';

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="max-md:w-[15%] w-[13%] bg-[#101826] text-white max-md:p-1 p-4 fixed h-full border-r border-[#2d3749]">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="ml-[13%] bg-[#0c0f19] w-full h-full overflow-y-auto p-4">{children}</div>
    </div>
  );
};

export default Layout;
