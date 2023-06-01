import Pagination from "../pagination";

export default function TableHeader({ minSize, tableHeader, children }) {
  return (
    <div className="w-full">
      <div className="overflow-x-auto w-full mb-8">
        <div className={`${minSize}`}>
          <table className="flex flex-col w-full">
            <thead className="text-lg font-semibold">
              <tr className="grid grid-cols-12 w-full bg-white p-4 border-b rounded-t-lg">
                {tableHeader.map((header, headerIndex) => (
                  <th key={headerIndex} className={`${header.style}`}>
                    {header.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="flex flex-col">{children}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
