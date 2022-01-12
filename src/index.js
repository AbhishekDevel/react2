import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import App from "./App";
import Invoices from "./routes/invoices";
import Expenses from "./routes/expenses"

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/invoices" element={<Invoices />}/>
      <Route path="/expenses" element={<Expenses />}/>
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    </Routes>
  </BrowserRouter>, document.getElementById("root"));
