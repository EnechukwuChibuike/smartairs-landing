import "./App.css";
import { useRef } from "react";
import { createContext, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Main from "./pages/Main";
import SearchForBin from "./pages/SearchForBin";
import GenerateInvoice from "./pages/GenerateInvoice";
import ValidateInvoice from "./pages/ValidateInvoice";
import GenerateTin from "./pages/GenerateTin";
import MakePayment from "./pages/MakePayment";
import ConfirmInvoice from "./pages/ConfirmInvoice";

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
            <Route path="validateinvoice" element={<ValidateInvoice />} />
            <Route path="generatetin" element={<GenerateTin />} />
            <Route path="makepayment" element={<MakePayment />} />
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
