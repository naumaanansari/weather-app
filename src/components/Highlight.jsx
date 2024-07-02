/* eslint-disable react/prop-types */

function Highlight({ title, value, unit }) {
  return (
    <div className="bg-slate-600 p-2 text-slate-200 flex flex-col justify-start items-center">
      <h2 className="text-sm mt-2 text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-out">{title}</h2>
      <div className="mt-2 text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-out">
        <span className="text-4xl font-bold">{value}</span>
        <span className="text-2xl font-bold">{unit}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700 mt-4">
        <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={{ width: '50%' }}></div>
      </div>
    </div>
  );
}

export default Highlight;
