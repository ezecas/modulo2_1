import React,{useState} from "react";
import './Producto.css';

function Producto(){	
	const [mensaje, setMensaje]= useState("");
		if (mensaje === ""){
			return(
				<div className="contenedor">
					<div className="card">	
						<div className="imagen">
							<img src="http://medias.musimundo.com/medias/00242038-138228-138228-01-138228-01.jpg-size300?context=bWFzdGVyfGltYWdlc3w0Njk0NXxpbWFnZS9qcGVnfGhkNy9oMTgvMTAzNTM5MTQwODU0MDYvMDAyNDIwMzgtMTM4MjI4LTEzODIyOF8wMS0xMzgyMjhfMDEuanBnX3NpemUzMDB8MDc3OTZmODJiN2Q0OTM3MmVkY2E0NTFiNTI1MjA3NTE3YmNiZGI5NWU3ZDVjZDhmMWY4NDE3YzFmMWIyOGFiMw" alt="Televisor"></img>
						</div>	
						<div className="marca">
							<span title="televisor BGH">BGH</span>
						</div>
						<div>
							<p className="descripcion">SMART TV BGH 32 PULGADAS HD B3219K5</p>
							<p className="SKU">CODC176646E138228</p>
							<p className="cantidad">Cantidad Disponible: 15 Unidades</p>						
						</div>
						
						<div className="precio-box">
							<p className="precio-contado">
								<span className="contado">Precio contado: </span>
								<span className="contado-valor">$44.500,00</span>
							</p>				
						</div>
						<button type="submit" onClick={()=>setMensaje("Gracias por su compra!")} className="agregar">Comprar</button>
					</div>
				</div>
			)
		}
			else{
				return(
					<div className="contenedor">
						<div className="card">	
							<div className="imagen">
								<img src="http://medias.musimundo.com/medias/00242038-138228-138228-01-138228-01.jpg-size300?context=bWFzdGVyfGltYWdlc3w0Njk0NXxpbWFnZS9qcGVnfGhkNy9oMTgvMTAzNTM5MTQwODU0MDYvMDAyNDIwMzgtMTM4MjI4LTEzODIyOF8wMS0xMzgyMjhfMDEuanBnX3NpemUzMDB8MDc3OTZmODJiN2Q0OTM3MmVkY2E0NTFiNTI1MjA3NTE3YmNiZGI5NWU3ZDVjZDhmMWY4NDE3YzFmMWIyOGFiMw" alt="Televisor"></img>
							</div>	
							<div className="marca">
								<span title="televisor BGH">BGH</span>
							</div>
							<div>
								<p className="descripcion">SMART TV BGH 32 PULGADAS HD B3219K5</p>
								<p className="SKU">CODC176646E138228</p>						
							</div>
							{/* <div>
								<p className="cantidad">Cantidad Disponible: 15 unidades</p>													
							</div>
							<div className="precio-box">
								<p className="precio-contado">
									<span className="contado">Precio contado: </span>
									<span className="contado-valor">$44.500,00</span>
								</p>				
							</div> */}
							<button type="submit" onClick={()=>setMensaje("")} className="agregar">Volver</button>
							<span className="mensaje">{mensaje}</span>
						</div>
					</div>
				)
		}
	
}
export default Producto;
