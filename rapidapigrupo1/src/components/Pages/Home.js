import imgurl from "../../img/perfil.PNG"

function Home(){
  return (
    <section>
      <div className="foto w-72 h-72 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute">
        <img className="rounded-full" src={imgurl}></img>
      </div>
    </section>
  );
}

export default Home;
