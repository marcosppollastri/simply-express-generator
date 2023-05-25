import * as express from 'express';
import { Request, Response, Express } from 'express';
const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => res.send('Hello World!'));

const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export {app, server}

