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
  async function getCards() {
    try {
      const { data } = await apiClient.get("/category");
      console.log(data);

      setCotegoriy(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getCards();
  }, []);

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

  useEffect(() => {
    getCard();
  }, []);

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

  return (
    <div className="flex flex-col mt-[40px] gap-[20px]">
      <div className="flex flex-wrap gap-[10px]">
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
      </div>
      {kategoria.map((item) => (
        <div key={item.id} className="mb-5">
          <div className="flex justify-between mb-2">
            <span className="font-medium">{item.category}</span>
            <span>{item.foiz}%</span>
          </div>

          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${item.foiz}%`,
                background: colors[item.color],
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
