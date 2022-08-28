const Header = (Props) =>{


    return(
        <div className="divheader bg-info">
        <h1 className=" pt-3 pb-3">Buscador de Colaboradores</h1>
        <input type="text" className="mt-4 form-control inputbusq" 
        onChange={(e) => {Props.setTermino(e.target.value);}} />
        
        </div>


    )}

    export default Header;