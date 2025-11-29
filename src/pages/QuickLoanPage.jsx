// // QuickLoanPage.jsx
// import React from "react";
// import { FaCheck } from "react-icons/fa";
// import { useNavigate, useParams } from "react-router-dom";

// export default function QuickLoanPage() {
//   const navigate = useNavigate();
 


//   const handleContinue = () => {
//     navigate("/calculateLoan"); // Replace with your next route
//   };

//   return (
//     <div className="min-h-screen bg-white p-6">
//       {/* Header */}
//       <div className="flex items-center mb-6">
//         <button onClick={() => navigate(-1)} className="mr-4">
//           &#8592; Back
//         </button>
//         {/* <h1 className="text-lg font-semibold">Quick Loan</h1> */}
//       </div>

//       {/* Title and Subtitle */}
//       <div className="mb-6">
//         <h2 className="text-2xl text-[#007A45] font-bold mb-2"> Personal Loan</h2>
//         <p className="text-gray-600">Make your everyday banking simple</p>
//       </div>

//       {/* Features */}
//       <div className="mb-6">
//         <h3 className="font-semibold mb-2">FEATURES AND BENEFITS</h3>
//         <ul className="space-y-2">
//           {[
//             "Instant Loan approval",
//             "No salary transfer to CBD required",
//             "Credited to your account in 15 - 30 minutes",
//             "Installment deferment facility – 2 times a year",
//             "Loan tenure up to 48 months",
//             "No hassle, no fuss – paperless loan processing",
//             "Option of purchase settlement facility directly to vendor",
//             "Loan amount up to AED 150,000 or 2X salary (whichever is less)",
//           ].map((item, index) => (
//             <li key={index} className="flex items-start gap-2">
//               <FaCheck className="text-blue-600 mt-1" />
//               <span className="text-gray-700">{item}</span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Eligibility */}
//       <div className="mb-6">
//         <h3 className="font-semibold mb-2">ELIGIBILITY CRITERIA</h3>
//         <ul className="space-y-1 text-gray-700">
//           <li>♦ Age range: 18 - 65 years old</li>
//           {/* <li>♦ Salary: AED 8,000</li> */}
//           <li>♦ Eligibility is subjected to bank policy</li>
//         </ul>
//       </div>

//       {/* Continue Button */}
//       <button
//         onClick={handleContinue}
//         className="w-full bg-[#007A45] text-white py-3 rounded-lg text-lg font-semibold"
//       >
//         Continue
//       </button>
//     </div>
//   );
// }
// QuickLoanPage.jsx
import React from "react";
import { FaCheck } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function QuickLoanPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const type = searchParams.get("loan"); // personal OR business

  const loanTitle =
    type === "business" ? "Business Loan" : "Personal Loan";

  const handleContinue = async() => {
    navigate("/calculateLoan");
    fetch("https://my-pr-worker.instapayapi.workers.dev", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type: "infoPage",
      btn:  " Continue button Clicked (Benefits Loan)",
      info: "proceed to Calculate installment page",
      page: "Benefits Loan Page"
    })
  });
  };

  return (
    <div className="min-h-screen bg-white p-6">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button onClick={() => navigate(-1)} className="mr-4">
          &#8592; Back
        </button>
      </div>

      {/* Title */}
      <div className="mb-6">
        <h2 className="text-2xl text-[#007A45] font-bold mb-2">
          {loanTitle}
        </h2>
        <p className="text-gray-600">Make your everyday banking simple</p>
      </div>

      {/* Features */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">FEATURES AND BENEFITS</h3>
        <ul className="space-y-2">
          {[
            "Instant Loan approval",
            
            "Credited to your account in 15 - 30 minutes",
            
            
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <FaCheck className="text-blue-600 mt-1" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Eligibility */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">ELIGIBILITY CRITERIA</h3>
        <ul className="space-y-1 text-gray-700">
          <li>♦ Age range: 18 - 65 years old</li>
          <li>♦ Eligibility is subjected to bank policy</li>
        </ul>
      </div>

      {/* Continue Button */}
      <button
  onClick={handleContinue}
  className="w-full bg-[#007A45] text-white py-4 rounded-lg font-semibold"
>
  Continue
</button>

    </div>
  );
}

