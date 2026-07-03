import { Plus } from "lucide-react";

function Cotegoriy() {
  return (
    <div className="app flex flex-col gap-[10px]">
      <div className="flex-col gap-[20px] flex lg:flex-row  justify-between w-full">
        <div className="left">
          <p className="text-[27px] font-bold">Tranzaksiyalar</p>
          <p className="text-gray-500">Barcha xarajat va daromadlar</p>
        </div>
        <div className="right">
          <button
            onClick={() => setModal("add")}
            className="flex gap-[10px] p-[10px] bg-black rounded-xl text-white hover:bg-black/70 transition duration-300"
          >
            <Plus /> Yangi tranzaksiya
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cotegoriy;
