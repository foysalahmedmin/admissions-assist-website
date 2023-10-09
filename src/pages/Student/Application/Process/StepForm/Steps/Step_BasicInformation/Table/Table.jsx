import Tr from "./Tr";

const Table = ({table_data}) => {
  return (
    <div className="overflow-x-auto grid grid-cols-1">
      <table className="w-full">
        <thead>
          <tr className="bg-input">
            <th className="text-title text-left px-4 py-2">Activities name</th>
            <th className="text-title text-left px-4 py-2">Activity details</th>
            <th className="text-title text-center px-4 py-2">Instruction</th>
            <th className="text-title text-center px-4 py-2">Actions</th>
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
