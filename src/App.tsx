import React from 'react';
import { HelmetProvider as HeadProvider } from 'react-helmet-async';
import Routs from "./components/Routes";

function App() {
  return (
      <HeadProvider>
            {/*<Navigation />*/}
            {/* <StoreTitle />*/}
            {/* <Header /> */}
        <main>
           <Routs />
           {/* <Footer />*/}
        </main>

      </HeadProvider>
  );
}

export default App;
