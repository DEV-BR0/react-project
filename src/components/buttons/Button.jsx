import { NavLink } from "react-router-dom";
function Button({ text, icon, Kes }) {
  return (
    <>
      <NavLink
        to={Kes}
        className="flex gap-[20px] p-[20px] focus:bg-black focus:text-white transition duration-200 font-medium rounded-2xl hover:bg-blue-200 hover:to-black "
      >
        {icon}
        <h4 className='hidden lg:block xl:block'>{text}</h4>{" "}
      </NavLink>
    </>
  );
}

export default Button;
