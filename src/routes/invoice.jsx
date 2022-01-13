import React from "react";
import { useParams, Link } from "react-router-dom";
import { getInvoice } from "../data";


export default function Invoice() {
  const params = useParams();
  const invoice = getInvoice(parseInt(params.invoiceId));
  return(
    <>
    <main>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
    </>
  );
}