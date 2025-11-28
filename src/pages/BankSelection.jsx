import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const BANKS = [
  { id: "adcb", name: "Abu Dhabi Commercial Bank", logo: "/banks/adcb.png" },
  { id: "almaryah", name: "Al Maryah Community Bank", logo: "/banks/almaryah.jpg" },
  { id: "citi", name: "CitiBank", logo: "/banks/citi.png" },
  { id: "cbd", name: "Commercial Bank of Dubai", logo: "/banks/cbd.png" },
  { id: "dib", name: "Dubai Islamic Bank", logo: "/banks/dib.png" },
  { id: "el2", name: "El 2.0 by Emirates Islamic", logo: "/banks/el2.png" },
  { id: "enbd", name: "ENBD X", logo: "/banks/enbd.png" },
];

export default function BankSelection() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const popular = useMemo(() => BANKS.slice(0, 4), []);
  const filtered = useMemo(() => {
    if (!query.trim()) return BANKS;
    return BANKS.filter((b) =>
      b.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-white">
      
      {/* Header */}
      <div className="px-4 pt-6 pb-3 flex items-center gap-3 border-b border-gray-100">
        <button onClick={() => navigate(-1)} className="text-gray-600 text-xl">←</button>
        <div>
          <h4 className="text-[13px] text-gray-400">Add money</h4>
          <h2 className="text-[17px] font-semibold text-gray-900">Select bank</h2>
        </div>
      </div>

      {/* Popular Banks */}
      <div className="px-4 mt-4">
        <h3 className="text-[14px] text-gray-500 mb-3">Popular banks</h3>

        <div className="flex gap-7 overflow-x-auto no-scrollbar pb-1">
          {popular.map((b) => (
            <div key={b.id} className="flex-shrink-0 flex flex-col items-center hover:scale-105 transition">
              <img
                src={b.logo}
                alt={b.name}
                className="h-12 w-12 object-contain"
              />
              <p className="text-[12px] text-gray-600 text-center w-20 leading-tight mt-2 tracking-tight">
                {b.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* All Banks */}
      <div className="px-4 mt-6 flex justify-between items-center">
        <h3 className="text-[14px] text-gray-500">All banks</h3>
        <button className="text-[13px] text-red-500 font-medium">
          Can't find your bank?
        </button>
      </div>

      {/* Search Box */}
      <div className="px-4 mt-3">
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

      {/* Bank List */}
      <div className="px-4 mt-4 space-y-1 pb-28">
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
  );
}
