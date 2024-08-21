import React, { useEffect } from 'react';

const Page404 = () => {
  useEffect(() => {
    document.title = '404 - Page Not Found';
  }, []);

  return (
    <div className="page-not-found">
      <h1>404</h1>
      <h2>Oops! Page not found.</h2>
      <p>Looks like you are trying to access a page that doesn't exist.</p>
      <a href="/">Click here to go back to the home page.</a>
    </div>
  );
};

export default Page404;
