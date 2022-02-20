self.addEventListener("install",()=>{
	console.log("Service Worker instalado correctamente");
});

self.addEventListener("activate",()=>console.log("El Service Worker se encuentra activo"));

let mensajeEsNombre = true;

self.addEventListener("message",e=>{
	if(mensajeEsNombre) {
		const nombre = e.data;
		mensajeEsNombre = false;
	};
	else{
	e.source.postMessage(`<h3>${nombre}</h3>
						   <p>${e.data}</p>`);
}
});
