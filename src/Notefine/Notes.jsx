import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { NavLink } from "react-router-dom";

function Notes() {
  return (
    <>
      <div className="mx-auto w-[100vw] h-[70vh] flex justify-center items-center text-center flex-col">
        <div className="404">
          <h1 className="text-[80px] font-bold">404</h1>
          <p>Ushbu Sahida Topilmadi</p>
          <div className="">
            <DotLottieReact
              src="https://lottie.host/d3ae1449-9f7a-4107-b45c-6253ae1d60ba/7Fc9tg8wmM.lottie"
              loop
              autoplay
              height={300}
              width={300}
            />
          </div>
        </div>
        <div className="flex gap-[30px]">
          <NavLink
            className="p-[20px] border-1 rounded-3xl  hover:bg-blue-400 hover:text-white transition duration-200"
            to={"/dashboard"}
          >
            Bosh Sahifa
          </NavLink>
          <NavLink className="p-[20px] border-1 rounded-3xl  hover:bg-blue-400 hover:text-white transition duration-200" to={"/"}>
            Sing Up
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Notes;
