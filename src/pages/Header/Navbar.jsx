import { Outlet } from "react-router-dom";

import {
  Wallet,
  LayoutDashboard,
  ArrowLeftRight,
  FolderKanban,
  ChartColumn,
  User,
  Menu,
} from "lucide-react";
import Button from "../../components/buttons/Button";
import Bars from "../Bars/Bars";
import { useState } from "react";

function Navbar() {
  const [opense, setOpense] = useState(false);

  return (
    <>
      <nav className="lg:w-[300px] hidden lg:block md:block sm:  h-[100%]  flex flex-clo gap-[-100px] fixed border-1 border-gray-300 ">
        <div
          className="flex gap-[20px] items-center border-1 border-gray-200 w-[100% ] justify-center p-[20px] pr-[0px] "
          id="Navbar__main"
        >
          <div className="w-[50px] h-[50px] flex  bg-linear-[-25deg,_#4ade80,_#60a5fa] justify-center rounded-[50%] justify-center items-center p-[20px] ">
            <div className="flex " id="Navbar__main--header">
              <Wallet color="white"  />
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[20px] font-bold hidden lg:block xl:block">
              Xarajatlar
            </h2>
            <p className="hidden lg:block xl:block">Boshqaruv tizimi</p>
          </div>
        </div>
        <div className="p-[30px] flex flex-col gap-[30px]">
          <div className="" id="Navbar__btn--main">
            <Button
              Kes={"/dashboard"}
              icon={<LayoutDashboard />}
              text={"Dashboard"}
            />
          </div>
          <div className="" id="Navbar__btn--main">
            <Button
              Kes={"/otkazma"}
              icon={<ArrowLeftRight />}
              text={"Tranzaksiyalar"}
            />
          </div>
          <div className="" id="Navbar__btn--main">
            <Button
              Kes={"/kategoria"}
              icon={<FolderKanban />}
              text={"Kategoria"}
            />
          </div>
          <div className="" id="Navbar__btn--main">
            <Button
              Kes={"/statistika"}
              icon={<ChartColumn />}
              text={"Statistika"}
            />
          </div>
          <div className="" id="Navbar__btn--main">
            <Button Kes={"/info"} icon={<User />} text={"Profil"} />
          </div>
        </div>
      </nav>
      <div className="flex justify-center">
        <div className="container mx-auto shadow-[10px_35px_35px_rgba(0,0,0,0.25)] w-[100%] rounded-2xl fixed bg-white">
          <div className="logo"></div>
          <div className="flex justify-between mt-1 lg:hidden md:hidden mr-4 items-center p-[10px] ">
            <div className="w-[50px] h-[50px] flex  bg-linear-[-25deg,_#4ade80,_#60a5fa] justify-center rounded-[50%] justify-center items-center p-[20px]  ">
              <div className="flex " id="Navbar__main--header">
                <Wallet color="white" />
              </div>
            </div>
            <Menu onClick={() => setOpense(!opense) } />
          </div>
        </div>
      </div>

      {opense && <Bars Kes={opense} setOpense={setOpense} />}
      <main className="md:ml-[130px] md:p-[10px] lg:ml-[300px] w-[80%] p-[0] ml-[0px] p-[10px] md:mt-0 mt-[80px]">
        <Outlet />
      </main>
    </>
  );
}

export default Navbar;
