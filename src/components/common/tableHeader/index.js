import Pagination from "../pagination";

export default function TableHeader({ minSize, tableHeader, children }) {
  return (
    <div className="w-full">
      <div className="w-full mb-0 overflow-x-auto">
        <div className={`${minSize}`}>
          <table className="flex flex-col w-full">
            <thead className="text-lg font-semibold">
              <tr className="grid w-full grid-cols-12 p-4 bg-white border-b rounded-t-lg">
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
