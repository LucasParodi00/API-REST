import { getConnection } from "./../database/database";

export const getProductos  = async ( req, res ) => {
    try {
        const connection = await getConnection (); 
        const [ result ] = await connection.query ("CALL obtenerProductoConParametros ('', 0)");
        res.json (result);
    } catch (error) {
        res.status (500);
        res.send (error.message);
    }
}

export const getProducto  = async ( req, res ) => {
    try {
        console.log (req.params);
        const {id} = req.params; 
        const connection = await getConnection (); 
        const [result] = await connection.query ("CALL obtenerProductoConParametros (?, 0)", id);
        res.json (result);
    } catch (error) {
        res.status (500);
        res.send (error.message);
    }
}

export const addProducto = async (req, res) => {
    try {
        const {...producto} = req.body
        console.log (producto)
        const connection = await getConnection (); 
        // Aqui iria lo necesario para agregar a la BDD. 1.02
        const result = await connection.query ( `CALL InsertarProducto ( '${JSON.stringify(producto)}' )`)
        res.json ({"message": "Producto agregado correctamente"})
    } catch (error) {
        res.status (500);
        res.send (error.message);
    }
}

export const deleteProducto  = async ( req, res ) => {
    try {
        const {id} = req.params; 
        const connection = await getConnection (); 
        const [result] = await connection.query ('UPDATE producto SET estado = false WHERE codProducto = ?', id);
        res.json (result);
    } catch (error) {
        res.status (500);
        res.send (error.message);
    }
}


export const updateProducto = async (req, res) => {
    try {
        const {...producto} = req.body
        console.log (producto)
        const connection = await getConnection (); 
        // Aqui iria lo necesario para agregar a la BDD. 1.02
        const result = await connection.query ( `CALL ModificarProducto ( '${JSON.stringify(producto)}' )`)
        res.json ({"message": "Producto Modificado Correctamente"})
    } catch (error) {
        res.status (500);
        res.send (error.message);
    }
}


