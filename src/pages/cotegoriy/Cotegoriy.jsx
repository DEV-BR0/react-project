import { Plus } from "lucide-react";
import Card from "./Card";

function Cotegoriy() {

  const 
  return (
    <div className="app flex flex-col gap-[10px] w-full p-[20px]">
      <div className="flex-col gap-[20px] flex lg:flex-row items-end justify-between w-full">
        <div className="left">
          <p className="text-[27px] font-bold">Kategoriyalar</p>
          <p className="text-gray-500">
            Xarajatlaringizni kategoriyalar bo'yicha boshqaring
          </p>
        </div>
        <div className="right">
          <button className="flex gap-[10px] p-[10px] bg-black rounded-xl text-white hover:bg-black/70 transition duration-300">
            <Plus /> Yangi Kategoriya
          </button>
        </div>
      </div>
      <Card />
    </div>
  );
}

export default Cotegoriy;
