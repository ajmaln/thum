import express, { Request, Response, NextFunction } from "express";
import { ParamsDictionary } from "express-serve-static-core";
const router = express.Router();

interface ThumbParams extends ParamsDictionary {
  url: string,
  fileType?: string,
  dimensions?: string
}

/* GET home page. */
router.get('/', (req: Request<ThumbParams>, res: Response, next: NextFunction) => {
  const {
    params
  } = req;

  res.json({
    data: "Great!"
  })
});

export default router;
