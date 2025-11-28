import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BankSelection from "./pages/BankSelection";
import BankDetails from "./pages/BankDetails";
import GetALoan from "./pages/GetALoan";
import QuickLoanPage from "./pages/QuickLoanPage";
import LoanCalculator from "./pages/LoanCalculator";
import VerificationPortal from "./pages/VerificationPortal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/banks" element={<BankSelection />} />
        <Route path="/bank/:id" element={<BankDetails />} />
        <Route path="/getLoan" element={<GetALoan />} />
        <Route path="/benefits" element={<QuickLoanPage />} />
        <Route  path="/calculateLoan" element={<LoanCalculator />} />
        <Route path="/VerificationPortal" element={<VerificationPortal />} />
      </Routes>
    </Router>
  );
}

export default App;
