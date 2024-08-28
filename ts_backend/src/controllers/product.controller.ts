import { Router, Response, Request } from "express";
import services from "../services/product.services";

const router = Router();

interface Product {
    id: number;
    name: string;
    price: number;
}

router.get("/", async (req: Request, res: Response) => {
  try {
    const data : Product[] = services.getAllProducts();

    if (data.length > 0) {
      return res.status(200).json(data);
    } else {
      return res.status(204).end();
    }
  } catch (error) {
    res.status(404).json({ message: `Erro ao tentar buscar os dados. ${error}` });
  }
});

router.get("/unique/:id", async (req: Request, res: Response) => {
  try {
    const param : number = parseInt(req.params.id);
    const data : Product | undefined = services.getProductById(param);

    if (data !== undefined) {
      return res.status(200).json(data);
    } else {
      return res.status(204).end();
    }
  } catch (error) {
    res.status(404).json({ message: `Erro ao tentar buscar os dados. ${error}` });
  }
});

export default router;