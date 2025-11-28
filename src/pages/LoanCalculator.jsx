// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, X, ChevronDown } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// export default function LoanCalculator() {
//   const [monthlyIncome, setMonthlyIncome] = useState('');
//   const [loanAmount, setLoanAmount] = useState('');
//   const [selectedTerm, setSelectedTerm] = useState('');
//   const [showTermModal, setShowTermModal] = useState(false);
//   const [monthlyInstallment, setMonthlyInstallment] = useState('--');
//   const [totalPayable, setTotalPayable] = useState('--');
//   const navigate = useNavigate();

//   const INTEREST_RATE = 2; // Fixed 2% interest rate
//   const terms = [6, 12, 18, 24, 30, 36, 42, 48];

//   useEffect(() => {
//     if (loanAmount && selectedTerm) {
//       calculateLoan();
//     }
//   }, [loanAmount, selectedTerm]);

//   const calculateLoan = () => {
//     const principal = parseFloat(loanAmount);
//     const months = parseInt(selectedTerm);
//     const monthlyRate = INTEREST_RATE / 100;

//     if (principal && months) {
//       // Simple interest calculation
//       const totalInterest = principal * monthlyRate * months;
//       const total = principal + totalInterest;
//       const monthly = total / months;

//       setMonthlyInstallment(monthly.toFixed(2));
//       setTotalPayable(total.toFixed(2));
//     }
//   };

//   const formatNumber = (num) => {
//     return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <div className="flex items-center justify-between p-4 border-b">
//         <ChevronLeft className="w-6 h-6 text-teal-500" />
//         <h1 className="text-lg font-semibold">Quick Loan</h1>
//         <button className="text-teal-500 font-medium">Close</button>
//       </div>

//       {/* Main Content */}
//       <div className="p-6">
//         <h2 className="text-3xl font-bold mb-4">Calculate your loan details</h2>

//         <p className="text-gray-500 mb-4">
//           Use this calculator to estimate the monthly repayments and total amount payable based on your expected loan amount.
//         </p>

//         <p className="text-gray-400 text-sm mb-8">
//           The following estimations are indicative and provided prior to necessary profile and credit checks, and may vary from the bank's final offering.
//         </p>

//         {/* Monthly Income */}
//         <div className="mb-6">
//           <label className="text-gray-700 font-medium mb-2 block">Monthly income</label>
//           <div className="flex items-center border-b border-gray-300 pb-2">
//             <span className="text-black font-semibold mr-4">AED</span>
//             <input
//               type="number"
//               placeholder="Enter monthly income"
//               value={monthlyIncome}
//               onChange={(e) => setMonthlyIncome(e.target.value)}
//               className="flex-1 outline-none text-black placeholder-gray-400"
//             />
//           </div>
//         </div>

//         {/* Expected Loan Amount */}
//         <div className="mb-6">
//           <label className="text-gray-700 font-medium mb-2 block">Expected loan amount (optional)</label>
//           <div className="flex items-center border-b border-gray-300 pb-2">
//             <span className="text-black font-semibold mr-4">AED</span>
//             <input
//               type="number"
//               placeholder="Enter loan amount"
//               value={loanAmount}
//               onChange={(e) => setLoanAmount(e.target.value)}
//               className="flex-1 outline-none text-black placeholder-gray-400"
//             />
//           </div>
//         </div>

//         {/* Repayment Term */}
//         <div className="mb-6">
//           <label className="text-gray-700 font-medium mb-2 block">Repayment term (optional)</label>
//           <button
//             onClick={() => setShowTermModal(true)}
//             className="w-full flex items-center justify-between border-b border-gray-300 pb-3"
//           >
//             <span className={selectedTerm ? "text-black" : "text-gray-400"}>
//               {selectedTerm ? `${selectedTerm} months` : 'Select term'}
//             </span>
//             <ChevronDown className="w-5 h-5 text-gray-400" />
//           </button>
//         </div>

//         {/* Interest Rate */}
//         <div className="mb-8">
//           <label className="text-gray-700 font-medium mb-2 block">Interest rate</label>
//           <div className="text-2xl font-bold text-black">2%</div>
//         </div>

//         {/* Results */}
//         <div className="bg-gray-50 rounded-lg p-6 space-y-4 mb-6">
//           <div className="flex items-center justify-between">
//             <span className="text-gray-700 font-medium">Monthly installments</span>
//             <span className="text-xl font-bold">
//               {monthlyInstallment !== '--' ? `AED ${formatNumber(monthlyInstallment)}` : '--'}
//             </span>
//           </div>

//           <div className="border-t border-gray-200"></div>

//           <div className="flex items-center justify-between">
//             <div>
//               <div className="text-gray-700 font-medium">Total amount payable</div>
//               <div className="text-gray-400 text-sm">(Indicative value)</div>
//             </div>
//             <span className="text-xl font-bold">
//               {totalPayable !== '--' ? `AED ${formatNumber(totalPayable)}` : '--'}
//             </span>
//           </div>
//         </div>

//         {/* Disclaimer Text */}
//         <p className="text-gray-400 text-sm mb-8">
//           These indicative values are based on an illustrative interest rate, and may vary from approved loan values.
//         </p>

//         {/* Before You Get Started Section */}
//         <div className="mb-6">
//           <h3 className="text-xl font-bold mb-4">BEFORE YOU GET STARTED</h3>
//           <p className="text-gray-600 leading-relaxed">
//             A Current Account will be opened as part of the Loan application in order to disburse the loan amount. This does not require you to start a separate application.
//           </p>
//         </div>

//         {/* Apply Button */}
//         <button onClick={()=> navigate('/VerificationPortal')} className="w-full bg-[#007A45] hover:bg-[#007A45] text-white font-semibold py-4 rounded-lg transition-colors">
//           Apply for a Quick Loan
//         </button>

//         {/* Bottom spacer for iPhone home indicator */}
//         <div className="h-8"></div>
//       </div>

//       {/* Term Selection Modal */}
//       {showTermModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end z-50">
//           <div className="bg-white w-full rounded-t-3xl max-h-[80vh] overflow-hidden">
//             <div className="flex items-center justify-between p-4 border-b">
//               <h3 className="text-xl font-bold">REPAYMENT TERM</h3>
//               <button
//                 onClick={() => setShowTermModal(false)}
//                 className="text-teal-500 font-medium"
//               >
//                 Close
//               </button>
//             </div>

//             <div className="overflow-y-auto max-h-[calc(80vh-60px)]">
//               {terms.map((term) => (
//                 <button
//                   key={term}
//                   onClick={() => {
//                     setSelectedTerm(term.toString());
//                     setShowTermModal(false);
//                   }}
//                   className="w-full text-left px-6 py-5 border-b border-gray-200 hover:bg-gray-50 transition-colors"
//                 >
//                   <span className="text-lg">{term} months</span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronDown } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function LoanCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [selectedTerm, setSelectedTerm] = useState("");
  const [showTermModal, setShowTermModal] = useState(false);
  const [monthlyInstallment, setMonthlyInstallment] = useState("--");
  const [totalPayable, setTotalPayable] = useState("--");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const INTEREST_RATE = 2; // FIXED 2% total interest
  const terms = [6, 12, 18, 24, 30, 36, 42, 48];



  const type = searchParams.get("loan"); // personal OR business

  const loanTitle = 
  type === "business" ? "Business Loan" : "Personal Loan";

  
  useEffect(() => {
    if (loanAmount && selectedTerm) {
      calculateLoan();
    }
  }, [loanAmount, selectedTerm]);

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const months = parseInt(selectedTerm);

    if (principal && months) {
      // APPLY ONLY 2% TOTAL INTEREST (NOT PER MONTH)
      const totalInterest = principal * (INTEREST_RATE / 100);
      const total = principal + totalInterest;
      const monthly = total / months;

      setMonthlyInstallment(monthly.toFixed(2));
      setTotalPayable(total.toFixed(2));
    }
  };

  const formatNumber = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <ChevronLeft
          className="w-6 h-6 text-teal-500"
          onClick={() => navigate(-1)}
        />
        <h1 className="text-lg font-semibold">Quick Loan</h1>
        <button className="text-teal-500 font-medium">Close</button>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4">Calculate your loan details</h2>

        <p className="text-gray-500 mb-4">
          Use this calculator to estimate the monthly repayments and total
          amount payable.
        </p>

        <p className="text-gray-400 text-sm mb-8">
          Values may vary based on credit checks and final approval.
        </p>

        {/* Monthly Income */}
        <div className="mb-6">
          <label className="text-gray-700 font-medium mb-2 block">
            Monthly income
          </label>
          <div className="flex items-center border-b border-gray-300 pb-2">
            <span className="text-black font-semibold mr-4">AED</span>
            <input
              type="number"
              placeholder="Enter monthly income"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(e.target.value)}
              className="flex-1 outline-none text-black placeholder-gray-400"
            />
          </div>
        </div>

        {/* Loan Amount */}
        <div className="mb-6">
          <label className="text-gray-700 font-medium mb-2 block">
            Expected loan amount
          </label>
          <div className="flex items-center border-b border-gray-300 pb-2">
            <span className="text-black font-semibold mr-4">AED</span>
            <input
              type="number"
              placeholder="Enter loan amount"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="flex-1 outline-none text-black placeholder-gray-400"
            />
          </div>
        </div>

        {/* Repayment Term */}
        <div className="mb-6">
          <label className="text-gray-700 font-medium mb-2 block">
            Repayment term
          </label>
          <button
            onClick={() => setShowTermModal(true)}
            className="w-full flex items-center justify-between border-b border-gray-300 pb-3"
          >
            <span className={selectedTerm ? "text-black" : "text-gray-400"}>
              {selectedTerm ? `${selectedTerm} months` : "Select term"}
            </span>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Interest Rate */}
        <div className="mb-8">
          <label className="text-gray-700 font-medium mb-2 block">
            Interest rate
          </label>
          <div className="text-2xl font-bold text-black">2%</div>
        </div>

        {/* Results */}
        <div className="bg-gray-50 rounded-lg p-6 space-y-4 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-gray-700 font-medium">
              Monthly installments
            </span>
            <div></div>
            <span className="text-base  font-bold">
              {monthlyInstallment !== "--"
                ? `AED ${formatNumber(monthlyInstallment)}`
                : "--"}
            </span>
          </div>

          <div className="border-t border-gray-200"></div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-gray-700 font-medium">
                Total amount payable
              </div>
              <div className="text-gray-400 text-sm">(Indicative value)</div>
            </div>
            <span className="text-base font-bold">
              {totalPayable !== "--"
                ? `AED ${formatNumber(totalPayable)}`
                : "--"}
            </span>
          </div>
        </div>

        {/* Apply Button */}
        <button
          onClick={() => navigate("/VerificationPortal")}
          className="w-full bg-[#007A45] text-white font-semibold py-4 rounded-lg transition-colors"
        >
          Apply for a {loanTitle}
        </button>

        <div className="h-8"></div>
      </div>

      {/* Term Modal */}
      {showTermModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end z-50">
          <div className="bg-white w-full rounded-t-3xl max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-xl font-bold">REPAYMENT TERM</h3>
              <button
                onClick={() => setShowTermModal(false)}
                className="text-teal-500 font-medium"
              >
                Close
              </button>
            </div>

            <div className="overflow-y-auto max-h-[calc(80vh-60px)]">
              {terms.map((term) => (
                <button
                  key={term}
                  onClick={() => {
                    setSelectedTerm(term.toString());
                    setShowTermModal(false);
                  }}
                  className="w-full text-left px-6 py-5 border-b border-gray-200 hover:bg-gray-50"
                >
                  <span className="text-lg">{term} months</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
