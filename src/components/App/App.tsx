import React from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <main className="main">
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
