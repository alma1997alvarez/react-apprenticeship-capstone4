import React from "react";
import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";
import ContentContainer from "./components/ContentContainer/ContentContainer.component";
import ProductCategories from "./components/ProductCategories/ProductCategories.component";

function App() {
  return (
    <>
      <Header />
      <ContentContainer>
        <ProductCategories />
      </ContentContainer>
      <Footer />
    </>
  );
}

export default App;
