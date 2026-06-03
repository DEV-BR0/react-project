import { Wallet, X } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useEffect } from "react";

function Bars({ setOpense }) {
  gsap.registerPlugin(useGSAP);

  const menuRef = useRef();

  useEffect(() => {
    gsap.fromTo(menuRef.current, { x: "100%" }, { x: "0%", duration: 0.2 });
  }, []);

  const handleClose = () => {
    gsap.to(menuRef.current, {
      x: "100%",
      duration: 0.2,
      onComplete: () => {
        setTimeout(() => {
          setOpense(false);
        }, 200);
      },
    });
  };
  return (
    <>
      <div className="fixed inset-0 bg-[rgba(255,255,255,0.03)] backdrop-blur-sm z-50 transition duration-200 flex justify-end">
        <div
          className="w-[45%] shadow-xl/30  rounded-1-[20px]"
          ref={menuRef}
        >
          <div className="w-[100%] h-[100px] flex  bg-linear-[-25deg,_#4ade80,_#60a5fa] justify-center  justify-center items-center p-[20px] ">
            <div
              className="flex items-center gap-[20px] text-white"
              id="Navbar__main--header"
            >
              <Wallet color="white" />
              <div className="flex flex-col ">
                <h2 className="text-[20px] font-bold">Xarajatlar</h2>
                <p className="">Boshqaruv tizimi</p>
              </div>
            </div>
          </div>
          <div onClick={handleClose} className='p-[10px] rounded-4xl bg-red-300 w-[45px] mt-[10px] absolute left-[10px]'>
            <X onClick={handleClose} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Bars;
