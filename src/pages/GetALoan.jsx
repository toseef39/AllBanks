import { useNavigate } from "react-router-dom";

export default function GetALoan() {
  const navigate = useNavigate();

  const loans = [
    {
      id: "personal",
      title: "Personal Loan",
      description: "Reach your personal goals, big or small!",
    },
    {
      id: "business",
      title: "Business Loan",
      description: "Get funding for your business quickly and easily!",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-4 pt-6">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-600 text-xl mr-3"
        >
          ←
        </button>
        <h1 className="text-lg font-semibold text-gray-900">Get a Loan</h1>
      </div>

      {/* Loan Types */}
      <div className="space-y-6">
        {loans.map((loan) => (
          <div
            key={loan.id}
            className="p-4 bg-gray-50 rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-100 transition"
            onClick={() => navigate(`/benefits?loan=${loan.id}`)}
          >
            <h2 className="text-[15px] font-medium text-gray-900">{loan.title}</h2>
            <p className="text-sm text-gray-500 mt-1">{loan.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
