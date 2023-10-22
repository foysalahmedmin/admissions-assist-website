import Button from "@/components/Buttons/Button";
import { BsFileEarmarkPdf } from "react-icons/bs";

const Files = () => {
  return (
    <div>
      <div className="h-14 px-[3.5vw] lg:pl-7 lg:pr-[3.5vw] border-b flex justify-between items-center">
        <div>
          <h3 className="title text-2xl">Files</h3>
        </div>
        <div className="col-span-2 ml-auto">
          <Button
            className={"h-10"}
            text={"New"}
            icon={<span className="material-icons-outlined">add</span>}
          />
        </div>
      </div>
      <div className="px-[3.5vw] lg:pl-7 lg:pr-[3.5vw] py-4 grid grid-cols-1 overflow-x-auto">
        <table className="w-full text-title">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 font-normal text-title">Files</th>
              <th className="text-left py-2 px-7 font-normal text-title">Opened</th>
              <th className="text-left py-2 font-normal text-title">Owner</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-4 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full text-xl bg-input text-secondary">
                    <BsFileEarmarkPdf />
                  </div>
                  <a className="whitespace-nowrap" href="">Passport@Monika_hasan.pdf</a>
                </div>
              </td>
              <td className="py-4 px-7 whitespace-nowrap">Jul 14, 2022</td>
              <td className="py-4 whitespace-nowrap">Monika Hasan</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Files;
