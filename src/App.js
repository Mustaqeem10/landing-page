import React from 'react';

const LandingPage = React.lazy(() => import ('./pages/landing-page/landing-page'))

function App() {
  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
