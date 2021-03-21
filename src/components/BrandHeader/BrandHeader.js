import NavBar from "../NavBars/NavBar";
import Brand from "./Brand";
import "./BrandHeader.css";
function BrandHeader({ children }){
  return (
    <header className="menu bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 shadow-md text-2xl py-0">
      <Brand title="Covid Api"></Brand>
      <NavBar></NavBar>
    </header>
  );
}

export default BrandHeader;
