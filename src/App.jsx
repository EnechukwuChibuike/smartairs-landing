import "./App.css";
import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import SearchForBin from "./pages/SearchForBin";
import GenerateInvoice from "./pages/GenerateInvoice";
import ValidateReceipt from "./pages/ValidateReceipt";
import MakePayment from "./pages/MakePayment";
import ConfirmInvoice from "./pages/ConfirmInvoice";
import RegisterTin from "./pages/RegisterTin";

export const FormContext = createContext();

function App() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [tin, setTIN] = useState("");
  const [id, setID] = useState("JK-1047523");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleID = (e) => {
    setID(e.target.value);
  };

  const handleTIN = (e) => {
    setTIN(e.target.value);
  };

  return (
    <div>
      <FormContext.Provider value={{ name, amount, id, tin }}>
        <Routes>
          <Route path="/smartairs-landing" element={<Main />}>
            <Route index element={<SearchForBin />} />
            <Route path="generateinvoice" element={<GenerateInvoice />} />
            <Route path="validatereceipt" element={<ValidateReceipt />} />
            <Route path="makepayment" element={<MakePayment />} />
            <Route path="registertin" element={<RegisterTin />} />

            <Route
              path="confirminvoice"
              element={
                <ConfirmInvoice
                  value={name}
                  id={id}
                  amount={amount}
                  tin={tin}
                  handleTIN={handleTIN}
                  handleChange={handleChange}
                  handleAmount={handleAmount}
                  handleID={handleID}
                />
              }
            />
          </Route>
        </Routes>
      </FormContext.Provider>
    </div>
  );
}

export default App;
