const url = 'https://fakestoreapi.com/products';
const comando = process.argv[2];
const parametro = process.argv[3];
const [recurso, productoID] = parametro.split("/");
const titulo = process.argv[4];
const precio = process.argv[5];
const categoria = process.argv[6];


if (comando === "GET" && parametro === "products" ){
    fetch(url)
        //.then(response => response.json())
        .then (response => {
            console.log(response.status);
            return response.json();
        })
        .then(data => {
            console.log("Lista de Productos: \n");
            data.forEach(producto => {
            console.log(producto.title);
            })
        })
        .catch(error => {
        console.log("Error: > > >",error);
        })

        .finally(()=> {
            console.log("\n Proceso Finalizado");
        });
        
        
} else if (comando === "GET" && recurso === "products" ) {

    fetch(url+"/"+productoID)
        //.then(response => response.json())
        .then (response => {
            console.log(response.status);
            return response.json();
        })
        .then(data => {
            console.log(`El ID es: ${data.id}`);
            console.log(`El producto es: ${data.title}`);
        })
        .catch(error => {
        console.log("Error:",error);
        })

        .finally(()=> {
            console.log("\n Proceso Finalizado");
        });

} else if (comando === "POST" && parametro === "products"){
    fetch(url, { 
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
                title: titulo,
                price: precio,
                category: categoria
            })    
    
    })
        //.then (response => response.json())
        .then (response => {
            console.log(response.status);
            return response.json();
        })
        .then(data => {
            console.log(`Producto ${titulo},creado correctamente`);
            console.log("ID:", data.id);
            
        })
        .catch(error => {
        console.log("Error",error);
        })

        .finally(()=> {
            console.log("\n Proceso Finalizado");
        });

} else if (comando === "DELETE" && recurso === "products") {
    fetch(url+"/"+productoID, {
        method: "DELETE",
        id:productoID
    })
    .then (response => {
        console.log(response.status);
        return response.json();
    })
    .then(data => {
        console.log("Producto eliminado correctamente")
        console.log("ID :",data.id);
    })

    .catch(error => {
        console.log("Error",error);
    })

    .finally(()=> {
        console.log("\n Proceso Finalizado");
    });
    
} 

