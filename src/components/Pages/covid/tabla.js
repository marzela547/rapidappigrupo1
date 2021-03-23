
const estilos = "border-gray-200 border-2";


function Tables(){
    return (
        <section className="bg-white lg:w-1/3 lg:h-1/3 my-auto lg:text-lg">
            <table className={estilos} width={50}>
                <thead >
                    <tr>
                       <th className={estilos}>    </th>
                       <th className={estilos} colSpan={5}>País</th>
                       <th className={estilos}>Color</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={estilos}><ion-icon name="ellipse-sharp"></ion-icon></td>
                        <td className={estilos} colSpan={5}>Guatemala</td>
                        <td className="border-gray-200 border-2 text-yellow-400"><ion-icon name="ellipse-sharp"></ion-icon></td>
                    </tr>
                    <tr>
                        <td className={estilos}><ion-icon name="ellipse-sharp"></ion-icon></td>
                        <td className={estilos}>Belize</td>
                        <td className="border-gray-200 border-2 text-red-700"><ion-icon name="ellipse-sharp"></ion-icon></td>
                    </tr>
                    <tr>
                        <td className={estilos}><ion-icon name="ellipse-sharp"></ion-icon></td>
                        <td className={estilos}>El Salvador</td>
                        <td className="border-gray-200 border-2 text-blue-400"><ion-icon name="ellipse-sharp"></ion-icon></td>
                    </tr>
                    <tr>
                        <td className={estilos}><ion-icon name="ellipse-sharp"></ion-icon></td>
                        <td className={estilos}>Honduras</td>
                        <td className="border-gray-200 border-2 text-green-600"><ion-icon name="ellipse-sharp"></ion-icon></td>
                    </tr>
                    <tr>
                        <td className={estilos}><ion-icon name="ellipse-sharp"></ion-icon></td>
                        <td className={estilos}>Nicaragua</td>
                        <td className="border-gray-200 border-2 text-purple-500"><ion-icon name="ellipse-sharp"></ion-icon></td>
                    </tr>
                    <tr>
                        <td className={estilos}><ion-icon name="ellipse-sharp"></ion-icon></td>
                        <td className={estilos}>Costa Rica</td>
                        <td className="border-gray-200 border-2 text-pink-300"><ion-icon name="ellipse-sharp"></ion-icon></td>
                    </tr>
                    <tr>
                        <td className={estilos}><ion-icon name="ellipse-sharp"></ion-icon></td>
                        <td className={estilos}>Panamá</td>
                        <td className="border-gray-200 border-2 text-green-300"><ion-icon name="ellipse-sharp"></ion-icon></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3} className={estilos}>Total:</td>
                    </tr>
                </tfoot>
            </table>
        </section>
        );
}

export default Tables;