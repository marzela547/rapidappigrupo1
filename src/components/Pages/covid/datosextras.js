
function DatosExtra(){
    return (
        <section className=" ml-8 min-w-full box-border overflow-hidden">
        <h1 className="">Estadísticas sobre el Covid19 en Centroamérica</h1>
        <section className=" min-w-full m-2 flex justify-between pr-24 mb-10">
            <section className="bg-blue-300 text-white w-1/5 rounded-lg overflow-hidden shadow-lg">
                <section className="w-full ml-2 mt-2 flex justify-between">
                    <h2 className=" w-auto text-lg bold">150 <br></br>nuevas contribuciones</h2>
                    <p className=" w-min text-6xl mr-2 my-auto text-blue-800 text-opacity-30"><ion-icon name="hand-right-sharp"></ion-icon></p>
                </section>
                <div className="w-full mt-9 bg-blue-500 opacity-50 hover:opacity-100"><p className="w-40 self-center m-auto text-lg">Más información <ion-icon name="add-circle-outline" ></ion-icon></p></div>
            </section>
            <section className="bg-green-400 text-white w-1/5 rounded-lg overflow-hidden shadow-xl">
                <section className="w-full ml-2 mt-2 flex justify-between">
                    <h2 className="w-auto text-lg bold">24 <br></br>actualizaciones diarias</h2>
                    <p className="w-min text-6xl mr-2 my-auto text-green-800 text-opacity-30"><ion-icon name="notifications-sharp"></ion-icon></p>
                </section>
                <div className=" bg-green-600 opacity-50 hover:opacity-100 w-full mt-9"><p className="w-40 self-center m-auto text-lg">Más información <ion-icon name="add-circle-outline"></ion-icon></p></div>
            </section>
            <section className="bg-yellow-300 text-white w-1/5 overflow-hidden rounded-lg shadow-xl">
                <section className="w-full ml-2 mt-2  flex justify-between">
                    <h2 className="  w-auto text-lg bold">4 400 <br></br> nuevos registros</h2>
                    <p className="w-min text-6xl mr-3 my-auto text-yellow-600 text-opacity-30"><ion-icon name="person-add-sharp"></ion-icon></p>
                </section>
                <div className="bg-yellow-600 opacity-50 hover:opacity-100 w-full mt-9"><p className="w-40 self-center m-auto text-lg">Más información <ion-icon name="add-circle-outline"></ion-icon></p></div>
            </section>
            <section className="bg-red-600 w-1/5 text-white overflow-hidden rounded-lg shadow-xl">
                <section className="w-full ml-2 mt-2 flex justify-between">
                    <h2 className=" w-auto text-lg bold">10 000 <br></br> nuevos visitantes</h2>
                    <p className="w-min text-6xl mr-2 my-auto text-red-900 text-opacity-30"><ion-icon name="eye-sharp"></ion-icon></p>
                </section>
                <div className="bg-red-800 opacity-50 hover:opacity-100 w-full mt-9"><p className="w-40 self-center m-auto text-lg">Más información <ion-icon name="add-circle-outline"></ion-icon></p></div>
            </section>
        </section>
    </section>
);
}

export default DatosExtra;