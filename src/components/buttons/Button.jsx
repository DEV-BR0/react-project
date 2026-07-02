import { NavLink } from "react-router-dom";
function Button({ text, icon, Kes }) {
  return (
    <>
      <NavLink
        to={Kes}
        className={({ isActive }) =>
          `flex gap-[20px] p-[20px] transition duration-200 font-medium rounded-2xl ${
            isActive ? "bg-black text-white" : "text-black"
          }`
        }
      >
        {icon}
        <h4 className="hidden lg:block xl:block">{text}</h4>{" "}
      </NavLink>
    </>
  );
}

export default Button;
