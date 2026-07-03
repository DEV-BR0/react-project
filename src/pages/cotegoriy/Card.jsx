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

function Card({ setModalOpen }) {
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

      <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black/50 backdrop-blur-sm z-50">
        <div className="flex flex-col gap-[16px] w-[460px] max-h-[90vh] overflow-y-auto bg-white p-[20px] rounded-2xl shadow-xl">
          <div className="flex w-full justify-between items-center border-b border-gray-200 pb-[14px]">
            <p className="text-[20px] font-bold">Yangi Kategoriya</p>
            <button
              onClick={() => setModalOpen(false)}
              className="p-[6px] bg-gray-100 hover:bg-gray-200 transition-colors rounded-full"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex flex-col">
            <form className="flex gap-[18px] flex-col" onSubmit={posted}>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[15px] font-semibold text-gray-700">
                  Kategoriya nomi
                </label>
                <input
                  type="text"
                  placeholder="Masalan: Ovqat"
                  className="border border-gray-300 p-[12px] rounded-xl outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors text-[15px]"
                />
              </div>

              <div className="flex flex-col gap-[10px]">
                <p className="text-[15px] font-semibold text-gray-700">
                  Icon tanlang
                </p>
                <div className="grid grid-cols-6 gap-[8px]">
                  <button
                    type="button"
                    className="p-[10px] bg-gray-100 hover:bg-gray-200 transition-colors rounded-xl flex items-center justify-center"
                    onClick={() => setIcon("Utensils")}
                  >
                    {icons.Utensils}
                  </button>
                  <button
                    type="button"
                    className="p-[10px] bg-gray-100 hover:bg-gray-200 transition-colors rounded-xl flex items-center justify-center"
                    onClick={() => setIcon("Book")}
                  >
                    {icons.Book}
                  </button>
                  <button
                    type="button"
                    className="p-[10px] bg-gray-100 hover:bg-gray-200 transition-colors rounded-xl flex items-center justify-center"
                    onClick={() => setIcon("Car")}
                  >
                    {icons.Car}
                  </button>
                  <button
                    type="button"
                    className="p-[10px] bg-gray-100 hover:bg-gray-200 transition-colors rounded-xl flex items-center justify-center"
                    onClick={() => setIcon("Briefcase")}
                  >
                    {icons.Briefcase}
                  </button>
                  <button
                    type="button"
                    className="p-[10px] bg-gray-100 hover:bg-gray-200 transition-colors rounded-xl flex items-center justify-center"
                    onClick={() => setIcon("Coffee")}
                  >
                    {icons.Coffee}
                  </button>
                  <button
                    type="button"
                    className="p-[10px] bg-gray-100 hover:bg-gray-200 transition-colors rounded-xl flex items-center justify-center"
                    onClick={() => setIcon("Heart")}
                  >
                    {icons.Heart}
                  </button>
                  <button
                    type="button"
                    className="p-[10px] bg-gray-100 hover:bg-gray-200 transition-colors rounded-xl flex items-center justify-center"
                    onClick={() => setIcon("Shirt")}
                  >
                    {icons.Shirt}
                  </button>
                  <button
                    type="button"
                    className="p-[10px] bg-gray-100 hover:bg-gray-200 transition-colors rounded-xl flex items-center justify-center"
                    onClick={() => setIcon("House")}
                  >
                    {icons.House}
                  </button>
                  <button
                    type="button"
                    className="p-[10px] bg-gray-100 hover:bg-gray-200 transition-colors rounded-xl flex items-center justify-center"
                    onClick={() => setIcon("Smartphone")}
                  >
                    {icons.Smartphone}
                  </button>
                  <button
                    type="button"
                    className="p-[10px] bg-gray-100 hover:bg-gray-200 transition-colors rounded-xl flex items-center justify-center"
                    onClick={() => setIcon("Gamepad2")}
                  >
                    {icons.Gamepad2}
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-[10px]">
                <p className="text-[15px] font-semibold text-gray-700">
                  Rang tanlang
                </p>
                <div className="flex flex-wrap gap-[10px]">
                  <button
                    type="button"
                    className="w-[36px] h-[36px] rounded-full ring-offset-2 hover:ring-2 hover:ring-black transition-all"
                    style={{ background: colors.bin }}
                    onClick={() => setColor("bin")}
                  />
                  <button
                    type="button"
                    className="w-[36px] h-[36px] rounded-full ring-offset-2 hover:ring-2 hover:ring-black transition-all"
                    style={{ background: colors.bint }}
                    onClick={() => setColor("bint")}
                  />
                  <button
                    type="button"
                    className="w-[36px] h-[36px] rounded-full ring-offset-2 hover:ring-2 hover:ring-black transition-all"
                    style={{ background: colors.blue }}
                    onClick={() => setColor("blue")}
                  />
                  <button
                    type="button"
                    className="w-[36px] h-[36px] rounded-full ring-offset-2 hover:ring-2 hover:ring-black transition-all"
                    style={{ background: colors.gray }}
                    onClick={() => setColor("gray")}
                  />
                  <button
                    type="button"
                    className="w-[36px] h-[36px] rounded-full ring-offset-2 hover:ring-2 hover:ring-black transition-all"
                    style={{ background: colors.green }}
                    onClick={() => setColor("green")}
                  />
                  <button
                    type="button"
                    className="w-[36px] h-[36px] rounded-full ring-offset-2 hover:ring-2 hover:ring-black transition-all"
                    style={{ background: colors.pink }}
                    onClick={() => setColor("pink")}
                  />
                  <button
                    type="button"
                    className="w-[36px] h-[36px] rounded-full ring-offset-2 hover:ring-2 hover:ring-black transition-all"
                    style={{ background: colors.red }}
                    onClick={() => setColor("red")}
                  />
                  <button
                    type="button"
                    className="w-[36px] h-[36px] rounded-full ring-offset-2 hover:ring-2 hover:ring-black transition-all"
                    style={{ background: colors.sag }}
                    onClick={() => setColor("sag")}
                  />
                  <button
                    type="button"
                    className="w-[36px] h-[36px] rounded-full ring-offset-2 hover:ring-2 hover:ring-black transition-all"
                    style={{ background: colors.watr }}
                    onClick={() => setColor("watr")}
                  />
                  <button
                    type="button"
                    className="w-[36px] h-[36px] rounded-full ring-offset-2 hover:ring-2 hover:ring-black transition-all"
                    style={{ background: colors.yellow }}
                    onClick={() => setColor("yellow")}
                  />
                </div>
              </div>

              <div className="flex pt-[6px]">
                <button className="w-full py-[12px] bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
