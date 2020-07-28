/* eslint-disable import/no-named-as-default-member */
import { Router } from 'express'
import {
    loadBeer,
    createBeer,
    listBeers,
    updateBeer,
    removeBeer,
    getBeer,
} from '../controllers/beer.controller'

const router = Router()

router.route('/').get(listBeers).post(createBeer)

router.route('/:beerId').get(getBeer).put(updateBeer).delete(removeBeer)

router.param('beerId', loadBeer)

export default router
