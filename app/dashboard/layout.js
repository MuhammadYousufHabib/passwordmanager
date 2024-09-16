import React from 'react';
import Sidebar from '@/components/Sidebar';
import ProtectedRoute from '@/components/ProtectedRoute';

const BaseLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Sidebar />
          <ProtectedRoute>
          <main>
            {children}
          </main>
          </ProtectedRoute>
        </div>
      </body>
    </html>
  );
};

export default BaseLayout;
