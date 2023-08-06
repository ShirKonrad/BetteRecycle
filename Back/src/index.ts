import express, {Express, Request, Response} from 'express';
import { router } from "./routes";

const app: Express = express();
const port = 3000;

app.use(router)

app.get('/', (req: Request, res: Response)=>{
    res.send('Hello, this is Express + TypeScript');
});

app.listen(port, ()=> {
console.log(`[Server]: I am running at https://localhost:${port}`);
});