import { Router, request } from "express";
import { addProducto, getProducto, getProductos, deleteProducto, updateProducto } from "../controllers/producto.controller";


const router = Router ();

router.get ("/", getProductos);
router.post ("/", addProducto)
router.get ('/:id', getProducto)
router.delete ('/:id', deleteProducto)
router.put ('/:id', updateProducto)

export default router;

