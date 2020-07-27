import express, { Request as ReqType, Response, NextFunction } from "express";
import { Query as ReqQuery } from "express-serve-static-core";
import gm from "gm";
import axios from "axios";

gm.subClass({ imageMagick: true })

const router = express.Router();

interface Query extends ReqQuery {
  url: string,
  fileType?: string,
  dimensions?: string
}

interface Request extends ReqType {
  query: Query
}

/* GET home page. */
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const {
    query
  } = req;
  try {
    const response = await axios.get(query.url, { responseType: 'arraybuffer' });
    gm(response.data) // The name of your pdf
      .setFormat("jpg")
      .resize(500) // Resize to fixed 200px width, maintaining aspect ratio
      .quality(90) // Quality from 0 to 100
      .stream((err, stdout) => {
        stdout.pipe(res)
      })
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
});

export default router;
