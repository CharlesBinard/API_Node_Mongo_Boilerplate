/* eslint-disable import/no-named-as-default-member */
import { Router } from 'express'
import BeerController from '../controllers/beer.controller'
import joiValidator from '../middleware/joiValidator'

const router = Router()

router
    .route('/')
    .get(BeerController.list)
    .post(joiValidator(BeerController.validation.create), BeerController.create)

router
    .route('/:beerId')
    .get(BeerController.get)
    .put(BeerController.update)
    .delete(BeerController.remove)

router.param('beerId', BeerController.load)

export default router
