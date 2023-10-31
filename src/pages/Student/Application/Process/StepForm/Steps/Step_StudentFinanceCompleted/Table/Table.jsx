import Tr from "./Tr";

const Table = ({ table_data }) => {
  return (
    <div className="overflow-x-auto grid grid-cols-1">
      <table className="w-full">
        <thead>
          <tr className="bg-input">
            <th className="text-text-900 text-left px-4 py-2 whitespace-nowrap">
              Activities name
            </th>
            <th className="text-text-900 text-left px-4 py-2 whitespace-nowrap">
              Activity details
            </th>
            <th className="text-text-900 text-center px-4 py-2 whitespace-nowrap">
              Instruction
            </th>
            <th className="text-text-900 text-center px-4 py-2 whitespace-nowrap">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {table_data.map((data, i) => (
            <Tr key={i} data={data} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
