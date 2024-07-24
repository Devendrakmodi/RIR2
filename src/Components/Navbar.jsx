import Logo from "../assets/Svg/Logo.svg";

export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full h-[130px] p-3 lg:px-10 flex justify-between items-center z-10">
      <div className="logo w-[250px] h-[60px]">
        <img
          className="object-center object-cover w-full h-full"
          src={Logo}
        ></img>
      </div>
      <menu className="w-1/2 h-full flex justify-around items-center">
        <li className="text-white text-base font-Gustavo">
          <a className="" href="#">
            Mega Cars
          </a>
        </li>
        <li className="text-white text-base font-Gustavo">
          <a className="" href="#">
            Technology
          </a>
        </li>
      </menu>
      <div className="menu-btn group cursor-pointer flex items-center justify-center gap-1 flex-col p-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className="w-7 h-10 font-Basel_Grotesk">
          <path
            className="line line-top group-hover:-translate-y-[2px] transition-all duration-300 ease-[linear] font-Basel_Grotesk"
            d="M0 9.5h25"
            style={{ fill: "#fff", stroke: "#fff", strokeWidth: "1.5px" }}
          ></path>
          <path
            className="line line-bottom group-hover:translate-y-[2px] transition-all duration-300 ease-[linear] font-Basel_Grotesk"
            d="M0 15.5h25"
            style={{ fill: "#fff", stroke: "#fff", strokeWidth: "1.5px" }}
          ></path>
        </svg>
      </div>
    </nav>
  );
}
