'use client';

import React from 'react';

export interface GlobalErrorProps {
  error: Error;
}

const GlobalError = ({ error }: GlobalErrorProps) => {
  return (
    <html>
      <body>
        <div>
          <p>{`Something globally went wrong: ${error.message}`}</p>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
