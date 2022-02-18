import React from 'react';
import { HelmetProvider as HeadProvider } from 'react-helmet-async';
import Routes from "./components/Routes";

function App() {
  return (
      <HeadProvider>
            {/*<Navigation />*/}
            {/* <StoreTitle />*/}
            {/* <Header /> */}
        <main>
           <Routes />
           {/* <Footer />*/}
        </main>

      </HeadProvider>
  );
}

export default App;
