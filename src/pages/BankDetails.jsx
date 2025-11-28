// import { useLocation, useNavigate } from "react-router-dom";

// export default function BankDetails() {
//   const loc = useLocation();
//   const navigate = useNavigate();
//   const bank = loc.state || { id: "unknown", name: "Bank", logo: "/banks/default.png" };

//   return (
//     <div className="min-h-screen bg-white">
//       <div className="px-4 pt-6 pb-3 flex items-center gap-3 border-b border-gray-100">
//         <button onClick={() => navigate(-1)} className="text-gray-600 text-xl">←</button>
//         <div>
//           <h4 className="text-[13px] text-gray-400">Add money</h4>
//           <h2 className="text-[17px] font-semibold text-gray-900"> {bank.name} </h2>
//         </div>
//       </div>

//       <div className="px-4 mt-6">
//         <div className="flex items-center gap-4">
//           <img src={bank.logo} alt={bank.name} className="h-12 w-12 object-contain" />
//           <div>
//             <h3 className="text-lg font-medium text-gray-800">{bank.name}</h3>
//             <p className="text-sm text-gray-500">Proceed to verify your account and get the loan quickly.</p>
//           </div>
//         </div>

//         {/* Placeholder for next steps */}
//         <div className="mt-6 space-y-3">
//           <div className="text-sm text-gray-600">Next: Provide valid information to verify your eligibility.</div>
//           <button className="mt-4 bg-[#0A6DFE] text-white py-2.5 rounded-lg w-full">Continue</button>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useLocation, useNavigate } from "react-router-dom";

export default function BankDetails() {
  const loc = useLocation();
  const navigate = useNavigate();
  const bank = loc.state || { id: "unknown", name: "Bank", logo: "/banks/default.png" };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="px-4 pt-6 pb-3 flex items-center gap-3 border-b border-gray-100">
        <button onClick={() => navigate(-1)} className="text-gray-600 text-xl">←</button>
        <div>
          <h4 className="text-[13px] text-gray-400">Add money</h4>
          <h2 className="text-[17px] font-semibold text-gray-900">{bank.name}</h2>
        </div>
      </div>

      <div className="px-4 mt-6 space-y-6">
        {/* Bank Info */}
        <div className="flex items-center gap-4">
          <img src={bank.logo} alt={bank.name} className="h-12 w-12 object-contain" />
          <div>
            <h3 className="text-lg font-medium text-gray-800">{bank.name}</h3>
            <p className="text-sm text-gray-500">Proceed to verify your account and get the loan quickly.</p>
          </div>
        </div>

        {/* Loan Description */}
        <div className="bg-[#f5f5f7] border border-gray-200 rounded-xl p-4 space-y-2">
          <h4 className="text-[14px] font-semibold text-gray-800">Loan Details</h4>
          <p className="text-sm text-gray-600">
            You can apply for a loan between <span className="font-medium">AED500 – AED500,000</span>.
          </p>
          <p className="text-sm text-gray-600">
            A monthly interest of <span className="font-medium">2%</span> will be applied on the installment amount.
          </p>
          <p className="text-sm text-gray-500">
            Please provide valid information to process your loan quickly and securely.
          </p>
        </div>

        {/* Next Steps */}
        <div className="space-y-3">
          <div className="text-sm text-gray-600">
            Next: Provide valid information to verify your eligibility.
          </div>
          <button onClick={()=> navigate('/getLoan')} className="mt-2 bg-[#0A6DFE] text-white py-2.5 rounded-lg w-full hover:bg-[#0657D4] transition">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
