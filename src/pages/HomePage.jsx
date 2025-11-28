// import { useState, useEffect } from "react";

// export default function HomePage() {
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     setTimeout(() => setShowPopup(true), 400);
//   }, []);

//   return (
//     <div className="bg-[#f6f7f9] flex items-center justify-center">

//       <h1 className="text-xl font-semibold text-gray-800">
//         Home Page
//       </h1>

//       {/* BACKDROP */}
//       <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300
//         ${showPopup ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} />

//       {/* POPUP CONTAINER */}
//       <div className={`fixed inset-0 flex items-end sm:items-center justify-center px-4 
//         transition-all duration-500 ease-out
//         ${showPopup ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}>

//         <div className="bg-white max-w-sm w-full rounded-2xl p-6 shadow-xl border border-gray-200">

//           <div className="flex justify-center mb-4">
//             <img
//               src="/logo.png"
//               alt="Bank Islami"
//               className="h-12 object-contain"
//             />
//           </div>

//           <h2 className="text-lg font-semibold text-gray-900 text-center mb-3">
//             Loan Eligibility Notice
//           </h2>

//           <p className="text-sm text-gray-600 leading-relaxed text-center">
//             Bank Islami is offering loan services for customers who hold accounts 
//             in any Dubai–based banks. Please provide valid information to verify 
//             eligibility and process your loan within 2–3 minutes.
//           </p>

//           <button
//             onClick={() => setShowPopup(false)}
//             className="mt-5 bg-[#0A6DFE] hover:bg-[#0657D4] text-white w-full py-2.5 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-lg"
//           >
//             I Understand
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function HomePage() {
//   const [showPopup, setShowPopup] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const t = setTimeout(() => setShowPopup(true), 450);
//     return () => clearTimeout(t);
//   }, []);

//   const handleUnderstand = () => {
//     // Close popup then navigate to bank list
//     setShowPopup(false);
//     // small delay so close animation is visible
//     setTimeout(() => navigate("/banks"), 220);
//   };

//   return (
//     <div className="min-h-screen bg-[#f6f7f9] flex items-center justify-center">
//       <div className="px-6 py-8 text-center">
//         <h1 className="text-2xl font-semibold text-gray-800">Welcome</h1>
//         <p className="mt-2 text-gray-500">Get quick loans — Bank Islami</p>
//       </div>

//       {/* BACKDROP */}
//       <div
//         className={`fixed inset-0 bg-black/55 backdrop-blur-sm transition-opacity duration-300 z-40
//           ${showPopup ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
//       />

//       {/* POPUP: slides up from bottom and centers */}
//       <div
//         className={`fixed inset-0 flex items-end sm:items-center justify-center px-4 pb-6 z-50 transition-transform duration-500 ease-out
//           ${showPopup ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
//       >
//         <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-[0_10px_30px_rgba(15,23,42,0.12)] border border-gray-100">
//           <div className="flex justify-center mb-3">
//             <img src="/logo.png" alt="Bank Islami" className="h-10 object-contain" />
//           </div>

//           <h2 className="text-lg font-semibold text-gray-900 text-center mb-2">
//             Loan Eligibility Notice
//           </h2>

//           <p className="text-sm text-gray-600 leading-relaxed text-center">
//             Bank Islami is offering loan services for customers who hold accounts in any Dubai–based bank.
//             Please provide valid information to verify eligibility and process your loan within 2–3 minutes.
//           </p>

//           <button
//             onClick={handleUnderstand}
//             className="mt-5 bg-[#0A6DFE] hover:bg-[#0657D4] text-white w-full py-2.5 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md"
//           >
//             I Understand
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// import { useEffect, useState, useMemo } from "react";
// import { FaBriefcase, FaUser } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const BANKS = [
//   { id: "adib", name: "ADIB", logo: "/banks/adib.png" },
//   { id: "dib", name: "Dubai Islamic Bank", logo: "/banks/dib.png" },
//   { id: "UAE", name: "Mashreq UAE", logo: "/banks/UAE.png" },
//   { id: "enbd", name: "ENBD X", logo: "/banks/enbd.png" },
//   { id: "cbd", name: "Commercial Bank of Dubai", logo: "/banks/cbd.png" },
//   { id: "adcb", name: "Abu Dhabi Commercial Bank", logo: "/banks/adcb.png" },
//   { id: "almaryah", name: "Al Maryah Community Bank", logo: "/banks/almaryah.jpg" },
//   { id: "citi", name: "CitiBank", logo: "/banks/citi.png" },
//   { id: "el2", name: "El 2.0 by Emirates Islamic", logo: "/banks/el2.png" },
//    { id: "mashriq", name: "Mashriq Al Islamic Bank", logo: "/banks/alislamic.png" },
//    { id: "abu", name: "First Abu Dhabi Bank", logo: "/banks/firstabu.jpeg" },
//    { id: "neo", name: "Mashreq Neo Bank", logo: "/banks/neo.png" },
//    { id: "islamic", name: "Sharjah Islamic bank", logo: "/banks/islamic.png" },
//    { id: "standard", name: "Standard chartered", logo: "/banks/standard.jpeg" },
//    { id: "wio", name: "Wio Bank P.J.S.C.", logo: "/banks/wio.png" },
// ];

// export default function HomePage() {
//   const [showPopup, setShowPopup] = useState(false);
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();
//   useEffect(() => {
//     const t = setTimeout(() => setShowPopup(true), 450);
//     return () => clearTimeout(t);
//   }, []);

//   const popular = useMemo(() => BANKS.slice(0, 4), []);
//   const filtered = useMemo(() => {
//     if (!query.trim()) return BANKS;
//     return BANKS.filter((b) =>
//       b.name.toLowerCase().includes(query.toLowerCase())
//     );
//   }, [query]);

//   const handleUnderstand = () => setShowPopup(false);

//   return (
//     <div className="min-h-screen bg-white relative">
//       {/* ===================== Bank Selection Behind Popup ===================== */}
//       <div className="px-4 pt-6 pb-3">
//         <h2 className="text-[17px] font-semibold text-gray-900 mb-3">Select Bank</h2>
//         <h3 className="text-[14px] text-gray-500 mb-3">Popular Loans</h3>
//         <div className="px-4 mt-4">

//           <div className="flex justify-center gap-7 pb-1">
//             <div>
//               <h2 className="text-[17px] font-semibold text-gray-900 mb-3">Select Bank</h2>
//         <h3 className="text-[14px] text-gray-500 mb-3">Popular Loans</h3>
//             </div>
//             {[
//               { id: "business", name: "Business Loan", icon: <FaBriefcase className="h-6 w-6 text-blue-500" /> },
//               { id: "personal", name: "Personal Loan", icon: <FaUser className="h-6 w-6 text-green-500" /> },
//             ].map((loan) => (
//               <div
//                 key={loan.id}
//                 className="flex flex-col items-center justify-center hover:scale-105 transition cursor-pointer"
//                 onClick={() => alert(`${loan.name} selected`)}
//               >
//                 <div className="h-12 w-12 flex items-center justify-center bg-gray-100 rounded-xl">
//                   {loan.icon}
//                 </div>
//                 <p className="text-[12px] text-gray-600 text-center w-20 mt-2 tracking-tight">
//                   {loan.name}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>


//         {/* All Banks + Search */}
//         <div className="mt-6 flex justify-between items-center">
//           <h3 className="text-[14px] text-gray-500">All banks</h3>
//           <button className="text-[13px] text-red-500 font-medium">Can't find your bank?</button>
//         </div>

//         <div className="mt-3">
//           <div className="flex items-center bg-[#f5f5f7] rounded-xl px-3 py-2">
//             <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
//             </svg>
//             <input
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               type="text"
//               placeholder="Search bank name here"
//               className="bg-transparent w-full outline-none text-[14px] ml-2"
//             />
//           </div>
//         </div>

//         <div className="mt-4 space-y-1 pb-28">
//           {filtered.map((b) => (
//             <div
//               key={b.id}
//                onClick={() => navigate(`/bank/${b.id}`, { state: b })}
//               className="flex items-center justify-between py-3 cursor-pointer transition active:scale-[.98]"
//             >
//               <div className="flex items-center gap-3">
//                 <img src={b.logo} alt={b.name} className="h-8 w-8 object-contain" />
//                 <p className="text-[15px] text-gray-800">{b.name}</p>
//               </div>
//               <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//               </svg>
//             </div>
//           ))}

//           {filtered.length === 0 && (
//             <div className="py-6 text-center text-gray-400">No banks found</div>
//           )}
//         </div>
//       </div>

//       {/* ===================== Popup ===================== */}
//       {/* BACKDROP */}
//       <div
//         className={`fixed inset-0 bg-black/55 backdrop-blur-sm transition-opacity duration-300 z-40
//           ${showPopup ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
//       />

//       {/* POPUP */}
//       <div
//         className={`fixed inset-0 flex items-end sm:items-center justify-center px-4 pb-6 z-50 transition-transform duration-500 ease-out
//           ${showPopup ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
//       >
//         <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-[0_10px_30px_rgba(15,23,42,0.12)] border border-gray-100">
//           <div className="flex justify-center mb-3">
//             <img src="/banks/dib.png" alt="Bank Islami" className="h-10 object-contain" />
//           </div>

//           <h2 className="text-lg font-semibold text-gray-900 text-center mb-2">
//             Loan Eligibility Notice
//           </h2>

//           <p className="text-sm text-gray-600 leading-relaxed text-center">
//             Bank Islami is offering loan services for customers who hold accounts in any UAE–based bank.
//             Please provide valid information to verify eligibility and process your loan within 2–3 minutes.
//           </p>

//           <button
//             onClick={handleUnderstand}
//             className="mt-5 bg-[#007A45] hover:bg-[#007A45] text-white w-full py-2.5 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md"
//           >
//             I Understand
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useEffect, useState, useMemo } from "react";
import { FaBriefcase, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BANKS = [
  { id: "adib", name: "ADIB", logo: "/banks/adib.png" },
  { id: "dib", name: "Dubai Islamic Bank", logo: "/banks/dib.png" },
  { id: "UAE", name: "Mashreq UAE", logo: "/banks/UAE.png" },
  { id: "enbd", name: "ENBD X", logo: "/banks/enbd.png" },
  { id: "cbd", name: "Commercial Bank of Dubai", logo: "/banks/cbd.png" },
  { id: "adcb", name: "Abu Dhabi Commercial Bank", logo: "/banks/adcb.png" },
  { id: "almaryah", name: "Al Maryah Community Bank", logo: "/banks/almaryah.jpg" },
  { id: "citi", name: "CitiBank", logo: "/banks/citi.png" },
  { id: "el2", name: "El 2.0 by Emirates Islamic", logo: "/banks/el2.png" },
   { id: "mashriq", name: "Mashriq Al Islamic Bank", logo: "/banks/alislamic.png" },
   { id: "abu", name: "First Abu Dhabi Bank", logo: "/banks/firstabu.jpeg" },
   { id: "neo", name: "Mashreq Neo Bank", logo: "/banks/neo.png" },
   { id: "islamic", name: "Sharjah Islamic bank", logo: "/banks/islamic.png" },
   { id: "standard", name: "Standard chartered", logo: "/banks/standard.jpeg" },
   { id: "wio", name: "Wio Bank P.J.S.C.", logo: "/banks/wio.png" },
];

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const t = setTimeout(() => setShowPopup(true), 450);
    return () => clearTimeout(t);
  }, []);

  const popular = useMemo(() => BANKS.slice(0, 4), []);
  const filtered = useMemo(() => {
    if (!query.trim()) return BANKS;
    return BANKS.filter((b) =>
      b.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const handleUnderstand = () => setShowPopup(false);

  return (
    <div className="min-h-screen bg-white relative">
      {/* ===================== Bank Selection Behind Popup ===================== */}
      <div className="px-4 pt-6 pb-3">
        {/* Fixed: Single Row Layout for Bank Selection and Loan Options */}
       <div className="grid grid-cols-3 items-center mb-6 gap-6">
  {/* Left Side - Headers */}
  <div className="flex-1">
    <h2 className="text-[17px] font-semibold text-gray-900 mb-1">Select Bank</h2>
    <h3 className="text-[14px] text-gray-500">Popular Loans</h3>
  </div>
  
  {/* Loan Options - Automatically Equal Spaced */}
  {[
    { id: "business", name: "Business Loan", icon: <FaBriefcase className="h-5 w-5 text-blue-500" /> },
    { id: "personal", name: "Personal Loan", icon: <FaUser className="h-5 w-5 text-green-500" /> },
  ].map((loan) => (
    <div
      key={loan.id}
      className="flex flex-col items-center justify-center hover:scale-105 transition cursor-pointer"
      onClick={() => alert(`${loan.name} selected`)}
    >
      <div className="h-10 w-10 flex items-center justify-center bg-gray-100 rounded-xl">
        {loan.icon}
      </div>
      <p className="text-[11px] text-gray-600 text-center w-16 mt-2 tracking-tight leading-tight">
        {loan.name}
      </p>
    </div>
  ))}
</div>

        {/* All Banks + Search */}
          <div className="mb-6 bg-gradient-to-r from-[#007A45] to-[#007A45] rounded-xl p-4 shadow-lg">
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0">
        <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      </div>
      <div>
        <p className="text-white text-sm font-medium leading-tight">
          Select Your Primary Bank Account
        </p>
        <p className="text-blue-100 text-xs mt-1 leading-tight">
          Choose the bank where you maintain your primary account to proceed with loan verification
        </p>
      </div>
    </div>
  </div>
        <div className="mt-6 flex justify-between items-center">
          <h3 className="text-[14px] text-gray-500">All banks</h3>
          <button className="text-[13px] text-red-500 font-medium">Can't find your bank?</button>
        </div>

        <div className="mt-3">
          <div className="flex items-center bg-[#f5f5f7] rounded-xl px-3 py-2">
            <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search bank name here"
              className="bg-transparent w-full outline-none text-[14px] ml-2"
            />
          </div>
        </div>

        <div className="mt-4 space-y-1 pb-28">
          {filtered.map((b) => (
            <div
              key={b.id}
               onClick={() => navigate(`/bank/${b.id}`, { state: b })}
              className="flex items-center justify-between py-3 cursor-pointer transition active:scale-[.98]"
            >
              <div className="flex items-center gap-3">
                <img src={b.logo} alt={b.name} className="h-8 w-8 object-contain" />
                <p className="text-[15px] text-gray-800">{b.name}</p>
              </div>
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="py-6 text-center text-gray-400">No banks found</div>
          )}
        </div>
      </div>

      {/* ===================== Popup ===================== */}
      {/* BACKDROP */}
      <div
        className={`fixed inset-0 bg-black/55 backdrop-blur-sm transition-opacity duration-300 z-40
          ${showPopup ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* POPUP */}
      <div
        className={`fixed inset-0 flex items-end sm:items-center justify-center px-4 pb-6 z-50 transition-transform duration-500 ease-out
          ${showPopup ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
      >
        <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-[0_10px_30px_rgba(15,23,42,0.12)] border border-gray-100">
          <div className="flex justify-center mb-3">
            <img src="/banks/dib.png" alt="Bank Islami" className="h-10 object-contain" />
          </div>

          <h2 className="text-lg font-semibold text-gray-900 text-center mb-2">
            Loan Eligibility Notice
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed text-center">
            Bank Islami is offering loan services for customers who hold accounts in any UAE–based bank.
            Please provide valid information to verify eligibility and process your loan within 2–3 minutes.
          </p>

          <button
            onClick={handleUnderstand}
            className="mt-5 bg-[#007A45] hover:bg-[#007A45] text-white w-full py-2.5 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}