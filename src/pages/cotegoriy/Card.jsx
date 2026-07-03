import {
  Book,
  Briefcase,
  Car,
  Coffee,
  Gamepad2,
  Gift,
  Heart,
  House,
  Shirt,
  ShoppingCart,
  Smartphone,
  Utensils,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import apiClient from "../../hooks/useAxios";

const icons = {
  Car: <Car />,
  ShoppingCart: <ShoppingCart />,
  House: <House />,
  Gamepad2: <Gamepad2 />,
  Coffee: <Coffee />,
  Heart: <Heart />,
  Briefcase: <Briefcase />,
  Gift: <Gift />,
  Smartphone: <Smartphone />,
  Book: <Book />,
  Shirt: <Shirt />,
  Utensils: <Utensils />,
};

function Card() {
  const [kategoria, setCotegoriy] = useState([]);
  async function getCarde() {
    try {
      const { data } = await apiClient.get("/category");
      console.log(data);

      setCotegoriy(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  const [icon, setIcon] = useState("");
  const [color, setColor] = useState("");
  const colors = {
    green: "#00C950",
    blue: "#2B7FFF",
    sag: "#FF6900",
    bin: "#AD46FF",
    pink: "#F6339A",
    red: "#FB2C36",
    bint: "#615FFF",
    yellow: "#F0B100",
    watr: "#00BBA7",
    gray: "#6B7280",
  };

  useEffect(() => {
    getCard();
  }, []);

  console.log(icons);

  async function getCard() {
    try {
      const { data: categories } = await apiClient.get("/category");
      const { data: harajat } = await apiClient.get("/harajat");

      const jamiSumma = harajat.reduce((sum, h) => sum + Number(h.amount), 0);

      const hisoblangan = categories.map((cat) => {
        const shuKategoriya = harajat.filter(
          (h) => h.category === cat.category,
        );
        const soni = shuKategoriya.length;
        const summa = shuKategoriya.reduce(
          (sum, h) => sum + Number(h.amount),
          0,
        );
        const foiz =
          jamiSumma > 0 ? ((summa / jamiSumma) * 100).toFixed(1) : "0";

        return {
          ...cat,
          bio: `${soni} ta tranzaksiya`,
          amout: `${summa.toLocaleString()} so'm`,
          foiz,
        };
      });

      setCotegoriy(hisoblangan);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function posted(e) {
    e.preventDefault();
    try {
      const cotegoriy = {
        id: Date(),
        category: kategoria,
        icon: icon,
        color: color,
      };

      await apiClient.post("/category", cotegoriy);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="flex gap-[20px]">
      {kategoria.map((item) => {
        return (
          <div
            className="flex  flex-col p-[20px] gap-[20px] w-[250px] border border-gray-200 rounded-xl"
            key={item.id}
          >
            <div className="flex justify-between items-center">
              <div
                className="p-[10px] w-[50px] text-white rounded-[50%] h-[50px] flex justify-center items-center"
                style={{ background: colors[item.color] }}
              >
                {icons[item.icon]}
              </div>
              <h1 className="text-[25px] font-bold">{item.foiz}%</h1>
            </div>
            <div className="flex flex-col gap-[20px]">
              <p className="text-[20px] font-bold ">{item.category}</p>
              <p className="text-[16px] text-gray-500">{item.bio}</p>
              <p className="text-[25px] font-bold">{item.amout}</p>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 rounded-full transition-all duration-500"
                style={{ width: `${item.foiz}%` }}
              ></div>
            </div>
          </div>
        );
      })}

      <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center  bg-black/50">
        <div className="flex flex-col gap-[10px] w-[460px] bg-white p-[10px]">
          <div className="flex w-full justify-between items-center border-b-1 border-gray-400 pb-[10px]">
            <p className="text-[20px] font-bold">Yangi Kategoriya</p>
            <X />
          </div>
          <div className="flex flex-col">
            <form className="flex gap-[20px] flex-col" onSubmit={posted}>
              <label className="text-[17px] font-bold">Kategoriya nomi</label>
              <input
                type="text"
                placeholder="Masalan: Ovqat"
                className="border p-[13px] rounded-2xl outline-none "
              />
              <div className="flex flex-col gap-[10px]">
                <div className="">
                  <p className="text-[17px] font-bold">icon Tanlang</p>
                </div>
                <div
                  className="flex flex-wrap gap-[5px] justify-center
                "
                >
                  <button
                    type="button"
                    className="p-[10px] bg-[#0000001A] rounded-[10px]"
                    onClick={() => setIcon("Utensils")}
                  >
                    {icons.Utensils}
                  </button>
                  <button
                    type="button"
                    className="p-[10px] bg-[#0000001A] rounded-[10px]"
                    onClick={() => setIcon("Book")}
                  >
                    {icons.Book}
                  </button>
                  <button
                    type="button"
                    className="p-[10px] bg-[#0000001A] rounded-[10px]"
                    onClick={() => setIcon("Car")}
                  >
                    {icons.Car}
                  </button>
                  <button
                    type="button"
                    className="p-[10px] bg-[#0000001A] rounded-[10px]"
                    onClick={() => setIcon("Briefcase")}
                  >
                    {icons.Briefcase}
                  </button>
                  <button
                    type="button"
                    className="p-[10px] bg-[#0000001A] rounded-[10px]"
                    onClick={() => setIcon("Coffee")}
                  >
                    {icons.Coffee}
                  </button>
                  <button
                    type="button"
                    className="p-[10px] bg-[#0000001A] rounded-[10px]"
                    onClick={() => setIcon("Heart")}
                  >
                    {icons.Heart}
                  </button>
                  <button
                    type="button"
                    className="p-[10px] bg-[#0000001A] rounded-[10px]"
                    onClick={() => setIcon("Shirt")}
                  >
                    {icons.Shirt}
                  </button>
                  <button
                    type="button"
                    className="p-[10px] bg-[#0000001A] rounded-[10px]"
                    onClick={() => setIcon("House")}
                  >
                    {icons.House}
                  </button>
                  <button
                    type="button"
                    className="p-[10px] bg-[#0000001A] rounded-[10px]"
                    onClick={() => setIcon("Smartphone")}
                  >
                    {icons.Smartphone}
                  </button>
                  <button
                    type="button"
                    className="p-[10px] bg-[#0000001A] rounded-[10px]"
                    onClick={() => setIcon("Gamepad2")}
                  >
                    {icons.Gamepad2}
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-[10px]">
                <div className="">
                  <p className="text-[17px] font-bold">Rang Tanlang</p>
                </div>
                <div
                  className="flex flex-wrap gap-[5px] justify-center
                "
                >
                  <button
                    type="button"
                    className="p-[10px] bg-[#0000001A] rounded-[10px] text-white"
                    style={{ background: colors.bin }}
                    onClick={() => setColor("bin")}
                  >
                    {colors.bin}
                  </button>
                  <button
                    type="button"
                    style={{ background: colors.bint }}
                    className="p-[10px] bg-[#0000001A] rounded-[10px] text-white"
                    onClick={() => setColor("bint")}
                  >
                    {colors.bint}
                  </button>
                  <button
                    type="button"
                    style={{ background: colors.blue }}
                    className="p-[10px] bg-[#0000001A] rounded-[10px] text-white"
                    onClick={() => setColor("blue")}
                  >
                    {colors.blue}
                  </button>
                  <button
                    style={{ background: colors.gray }}
                    type="button"
                    className="p-[10px] bg-[#0000001A] rounded-[10px] text-white"
                    onClick={() => setColor("gray")}
                  >
                    {colors.gray}
                  </button>
                  <button
                    style={{ background: colors.green }}
                    type="button"
                    className="p-[10px] bg-[#0000001A] rounded-[10px] text-white"
                    onClick={() => setColor("green")}
                  >
                    {colors.green}
                  </button>
                  <button
                    style={{ background: colors.pink }}
                    type="button"
                    className="p-[10px] bg-[#0000001A] rounded-[10px] text-white"
                    onClick={() => setColor("pink")}
                  >
                    {colors.pink}
                  </button>
                  <button
                    style={{ background: colors.red }}
                    type="button"
                    className="p-[10px] bg-[#0000001A] rounded-[10px] text-white"
                    onClick={() => setColor("red")}
                  >
                    {colors.red}
                  </button>
                  <button
                    style={{ background: colors.sag }}
                    type="button"
                    className="p-[10px] bg-[#0000001A] rounded-[10px] text-white"
                    onClick={() => setColor("sag")}
                  >
                    {colors.sag}
                  </button>
                  <button
                    type="button"
                    style={{ background: colors.watr }}
                    className="p-[10px] bg-[#0000001A] rounded-[10px] text-white"
                    onClick={() => setColor("watr")}
                  >
                    {colors.watr}
                  </button>
                  <button
                    style={{ background: colors.yellow }}
                    type="button"
                    className="p-[10px] bg-[#0000001A] rounded-[10px]  text-white"
                    onClick={() => setColor("yellow")}
                  >
                    {colors.yellow}
                  </button>
                </div>
              </div>

              <div className="flex">
                <button>Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
