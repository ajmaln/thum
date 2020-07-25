import express, { Request, Response, NextFunction } from "express";
const router = express.Router();

/* GET home page. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  // res.render('index', { title: 'Express' });
  res.json({
    data: "Great!"
  })
});

export default router;
