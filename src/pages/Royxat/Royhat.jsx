import { NavLink } from "react-router-dom";
import { Wallet } from "lucide-react";
import Input from "../../components/input/Input";
import { useGSAP } from '@gsap/react';
import gsap from "gsap"
function Royhat() {
  {
    useGSAP(() => {
      gsap.from("#Royhat", {
        y: 100,
        opacity: 0,
        duration: 1.5,
      });
    });
  }

  return (
    <>
      <div className="flex w-[100%] h-[100%] justify-center items-center mt-[50px]" id='Royhat'>
        <div className="w-[300px] h-[700px] bg-blue-100 rounded-2xl  flex flex-col justify-center items-center 2xl:w-[25%]">
          <div className="flex justify-center p-[30px] flex-col items-center w-[100%] gap-[30px]">
            <div className="flex  bg-linear-[-25deg,_#4ade80,_#60a5fa]  rounded-[50%] justify-center items-center p-[20px] ">
              <Wallet color="white" size={30} />
            </div>
            <div className="text-center">
              <h3 className="text-[25px] font-medium text-gray-900">
                Xush Kelibsiz
              </h3>
              <p className="text-gray-500">M'lumot Kiriting</p>
            </div>

            <div className="flex gap-[20px] flex-col w-[100%]">
              <div className="">
                <Input text={"Ismigiz"} Label={"Ism"} />
              </div>
              <div className="">
                <Input text={"Email"} type={"email"} Label={"Email"} />
              </div>
              <div className="">
                <Input
                  text={"***** "}
                  type={"password"}
                  Label={"Parol kiriting"}
                />
              </div>
              <div className="">
                <Input
                  text={"*****  "}
                  type={"password"}
                  Label={"Parolni tasdiqlang"}
                />
              </div>
              <div className="w-[100%]">
                <NavLink className="block text-center text-white bg-black rounded-[10px] w-[100%] p-[15px]">
                  Kirish
                </NavLink>
              </div>
              <div className="w-[100%] flex justify-center">
                <p className="text-gray-600">
                  Hisobingiz bormi ?{" "}
                  <NavLink to={"/"} className="text-black font-bold">
                    Ortga qaytish
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Royhat;
