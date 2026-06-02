import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  ArrowLeftRight,
  FolderKanban,
  ArrowLeft,
  Home,
  MapSearch,
} from "lucide-react";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="relative w-[120px] h-[120px] rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center mb-8">
        <MapSearch size={52} className="text-gray-400" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          404
        </span>
      </div>

      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        Sahifa topilmadi
      </h1>
      <p className="text-gray-500 max-w-xs mb-8 leading-relaxed">
        Siz izlagan sahifa mavjud emas yoki boshqa manzilga ko'chirilgan.
      </p>

      <div className="flex gap-3 flex-wrap justify-center mb-6">
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-85 transition"
        >
          <Home size={16} /> Bosh sahifaga
        </button>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 border border-gray-300 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
        >
          <ArrowLeft size={16} /> Orqaga
        </button>
      </div>

      <p className="text-xs text-gray-400 mb-3">yoki tezkor havolalar</p>

      <div className="flex gap-2 flex-wrap justify-center">
        {[
          {
            path: "/dashboard",
            icon: <LayoutDashboard size={15} />,
            label: "Dashboard",
          },
          {
            path: "/otkazma",
            icon: <ArrowLeftRight size={15} />,
            label: "Tranzaksiyalar",
          },
          {
            path: "/kategoria",
            icon: <FolderKanban size={15} />,
            label: "Kategoriya",
          },
        ].map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className="flex items-center gap-1.5 bg-gray-100 border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-500 hover:text-gray-800 hover:border-gray-300 transition"
          >
            {item.icon} {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NotFound;
