 //  || barras para el OR

// array para almacenar los productos

let products = [] ;

//funcion con todos los parametros de nuestros productos

const addProduct = (title, description, price, thumbnail, code, stock ) =>{


// creamos el objeto con todas las propiedades antes mencionadas

const newProduct = {
    id: products.length + 1,  // para que el id incremente de uno en uno
    title,
    description,
    price,
    thumbnail,
    code,
    stock
}

//  if(title === undefined  || description === undefined  || price === undefined  || thumbnail === undefined  || code === undefined  || stock === undefined ) {
//      console.log("Todos los campos son obligatorios");  // aca controlamos que esten todas las propiedades
//       return;   //y aca controlamos para que no se repita
//     }

// aca hacemos lo mismo que hacemos arriba
// que controle dentro de los valores (que retornan del array)
// nos fijamos si alguna propiedad tiene un undefined

console.log( Object.values(newProduct) )   //=====>>       ESTO SIRVE PARA CUANDO SON MUCHAS PROPIEDADES
if(Object.values(newProduct).includes(undefined)) {
    console.log("Todos los campos son obligatorios");  // aca controlamos que esten todas las propiedades
         return;   //y aca controlamos para que no se repita
       }           //y no dañar la base de datos a futuro


const productExist = products.find(product => product.code === code);
if(productExist) {
    console.log(`El producto ${title} con el codigo ${code} ya existe`);
    return;
}

products.push(newProduct); // agregamos con el push cada nuevo producto al array

} 


// funcion que nos mostrara los productos

const getProducts = ( ) =>{
    console.log(products)
    return products;

}


//funcion que mostrara los productos que recibe por id como parametro

const getProductById = (id) =>{
    const product = products.find( product => product.id === id);
    if(!product){
        console.log(`No se encontro el producto con el id ${id}`);
        return;
    }

console.log(product);
    return product;
};


addProduct("Producto 1", "el primer producto", 299, "https://media.istockphoto.com/id/1479548500/es/foto/dise%C3%B1o-de-arte-de-u%C3%B1as-negras.jpg?s=1024x1024&w=is&k=20&c=3Vx8KlinjJX97TdqAvsuMWNyEQygjeA5wcNs12hV7jo=","ABC123",20);
addProduct("Producto 2", "el segundo producto", 499, "https://media.istockphoto.com/id/1479548500/es/foto/dise%C3%B1o-de-arte-de-u%C3%B1as-negras.jpg?s=1024x1024&w=is&k=20&c=3Vx8KlinjJX97TdqAvsuMWNyEQygjeA5wcNs12hV7jo=","ABC124",10);
addProduct("Producto 3", "el tercer producto", 199, "https://media.istockphoto.com/id/1479548500/es/foto/dise%C3%B1o-de-arte-de-u%C3%B1as-negras.jpg?s=1024x1024&w=is&k=20&c=3Vx8KlinjJX97TdqAvsuMWNyEQygjeA5wcNs12hV7jo=","ABC124",15);
addProduct("Producto 4", "el cuarto producto", 399, "https://media.istockphoto.com/id/1479548500/es/foto/dise%C3%B1o-de-arte-de-u%C3%B1as-negras.jpg?s=1024x1024&w=is&k=20&c=3Vx8KlinjJX97TdqAvsuMWNyEQygjeA5wcNs12hV7jo=","ABC125",15);
addProduct("Producto 5", "el quinto producto", 99, "https://media.istockphoto.com/id/1479548500/es/foto/dise%C3%B1o-de-arte-de-u%C3%B1as-negras.jpg?s=1024x1024&w=is&k=20&c=3Vx8KlinjJX97TdqAvsuMWNyEQygjeA5wcNs12hV7jo=","ABC126");

//  getProducts();

getProductById(1);

