/* eslint-disable import/no-named-as-default-member */
import { Router } from 'express'
import BeerController from '../controllers/beer.controller'

const router = Router()

router.route('/').get(BeerController.list).post(BeerController.create)

router
    .route('/:beerId')
    .get(BeerController.get)
    .post(BeerController.create)
    .put(BeerController.update)
    .delete(BeerController.remove)

router.param('beerId', BeerController.load)

export default router
