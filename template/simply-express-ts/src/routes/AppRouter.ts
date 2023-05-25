import { AppController } from '@src/controllers';
import { Router} from 'express';

const AppRouter: Router = Router();

AppRouter.get('/', AppController);

export {
    AppRouter
};
