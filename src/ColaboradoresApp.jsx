import { useState } from "react";
import { baseColab } from "./components/baseColab"

const ColaboradoresApp = (Props) =>{

const [nombres,setNombres] = useState("")
const [correo,setCorreo] = useState("")
const [base,setBase] = useState(baseColab)

const agregarColaborador = (e) => {
    e.preventDefault();
    if (!nombres.trim() || !correo.trim()) {
      alert("Completa los datos");
    } else {
    setBase([...base,{nombre: nombres, correo: correo }
      ]);
    }
  };
  
return(
<div className="container">
<form onSubmit={agregarColaborador}>

<p className="mt-3"><strong>Nombre de colaborador</strong></p>
<input className="form-control input" type="text" onChange={(e) => setNombres(e.target.value)}/>

<p className="mt-4"><strong>Email de colaborador</strong></p>
<input className="form-control input" type="text" onChange={(e) => setCorreo(e.target.value)}/>

<input type="submit"className="btn btn-info mt-4" />
</form>
            
<div>
    <h2 className="mt-5">Lista de Colaboradores</h2>
    {base.filter((ele) => {
            if (Props.termino === "") {
              return ele;} 
            else if (
              ele.nombre.toLocaleLowerCase().includes(Props.termino.toLocaleLowerCase())
              ) {
                return ele;}
            }).map((ele) => (
              <div key={ele.id}>
                <p>
                  {ele.nombre} - {ele.correo}
                </p>
              </div>
            ))}       
</div>

</div>
 )};          

 export default ColaboradoresApp; 