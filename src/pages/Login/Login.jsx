import { NavLink } from "react-router-dom";
import { Wallet } from "lucide-react";
import { useState } from "react";
import Input from "../../components/input/Input";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Login() {
  const [show, setSHow] = useState(false);

  gsap.registerPlugin(useGSAP);

  {
    useGSAP(() => {
      gsap.from("#Login", {
        y: 100,
        opacity: 0,
        duration: 1.5,
      });
    });
  }

  return (
    <>
      <div
        className="flex w-[100%] h-[100%] justify-center items-center mt-[200px] bg-white"
        id="Login"
      >
        <div className="w-[100%] h-[100%] rounded-2xl xl:w-[300px flex flex-col justify-center items-center">
          <div className="flex justify-center p-[30px] flex-col items-center w-[300px] gap-[30px] h-[550px]  bg-blue-100 rounded-2xl 2xl:w-[25%]">
            <div className="flex  bg-linear-[-25deg,_#4ade80,_#60a5fa]  rounded-[50%] justify-center items-center p-[20px] ">
              <Wallet color="white" size={30} />
            </div>
            <div className="text-center">
              <h3 className="text-[25px] font-medium text-gray-900">
                Xush Kelibsiz
              </h3>
              <p className="text-gray-500">Hisobingizga kiring</p>
            </div>

            <form className="flex gap-[20px] flex-col w-[100%]">
              <div className="flex flex-col gap-[10px]">
                <Input text={"Ism"} Label={"Foydalanuvchi nomi"} />
              </div>
              <div className="flex flex-col gap-[10px]">
                <Input
                  text={"Parol"}
                  type={show ? "text" : "password"}
                  Label={"Foydalanuvchi Paroli"}
                />
              </div>
              <div className="w-[100%]">
                <NavLink className="block text-center text-white bg-black rounded-[10px] w-[100%] p-[15px]" to={"/dashboard"}>
                  Kirish
                </NavLink>
              </div>
              <div className="w-[100%] flex justify-center">
                <p className="text-gray-600">
                  Hisobingiz yo'qmi?{" "}
                  <NavLink to={"/royhat"} className="text-black font-bold">
                    Ro'yxatdan o'tish
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
