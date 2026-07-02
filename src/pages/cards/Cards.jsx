import { Wallet, TrendingUp, TrendingDown } from "lucide-react";

function Cards() {
  return (
    <>
      <div className="flex gap-[30px] w-[100%] flex-wrap justify-center mt-[30px]">
        <div className="flex flex-col gap-[20px] grow-[1] border-1 border-gray-500 rounded-2xl p-[20px] hover:shadow-xl/20 duration-200">
          <div className="flex justify-between">
            <div className="">
              <h1 className="text-[25px] font-medium text-gray-400">Balans</h1>
            </div>
            <div className="">
              <Wallet />
            </div>
          </div>
          <div className="">
            <h3 className="text-[40px] font-bold">2,760,000 so'm</h3>
          </div>
          <div className="">
            <h3 className="text-[20px] font-medium text-gray-400">
              Umumiy balans
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] grow-[1] border-1 border-gray-500 rounded-2xl p-[20px] hover:shadow-xl/20 duration-200">
          <div className="flex justify-between">
            <div className="">
              <h1 className="text-[25px] font-medium text-gray-400">Daromad</h1>
            </div>
            <div className="">
              <TrendingUp color="#00C950" />
            </div>
          </div>
          <div className="">
            <h3 className="text-[40px] font-bold text-green-400">
              5,000,000 so'm
            </h3>
          </div>
          <div className="">
            <h3 className="text-[20px] font-medium text-gray-400">Ushbu Oy</h3>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] grow-[1] border-1 border-gray-500 rounded-2xl p-[20px] hover:shadow-xl/20 duration-200 ">
          <div className="flex justify-between">
            <div className="">
              <h1 className="text-[25px] font-medium text-gray-400">Harajat</h1>
            </div>
            <div className="">
              <TrendingDown color="#FB2C36" />
            </div>
          </div>
          <div className="">
            <h3 className="text-[40px] font-bold text-red-500">
              2,240,000 so'm
            </h3>
          </div>
          <div className="">
            <h3 className="text-[20px] font-medium text-gray-400">Ushbu Oy</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
