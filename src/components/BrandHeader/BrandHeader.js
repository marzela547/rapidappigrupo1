import NavBar from "../NavBars/NavBar";
import Brand from "./Brand";
import "./BrandHeader.css";
function BrandHeader({ children }){
  return (
    <header className="menu bg-black shadow-md text-2xl py-0">
      <Brand title="Covid Api"></Brand>
      <NavBar></NavBar>
    </header>
  );
}

export default BrandHeader;
