import { Router } from 'express'
import testRoutes from './beer.routes'

const router = Router()

router.get('/', (req, res) =>
    res.json({
        status: 'ok',
    })
)

router.use('/beer', testRoutes)

export default router
