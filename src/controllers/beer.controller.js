import BeerModel from '../models/beer.model'

const load = (req, res, next, id) => {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({
            status: 400,
            message: 'beer id invalid format',
        })
    }
    return BeerModel.findById(id)
        .exec()
        .then((beer) => {
            if (!beer) {
                return res.status(404).json({
                    status: 400,
                    message: 'beer not found',
                })
            }
            req.beer = beer
            return next()
        })
        .catch((e) => next(e))
}

const create = (req, res, next) => {
    BeerModel.create({
        name: req.body.name,
        description: req.body.description,
        note: req.body.note,
        author: req.body.author,
    })
        .then((savedBeer) => {
            return res.json(savedBeer)
        })
        .catch((e) => next(e))
}

const get = (req, res) => {
    return res.json(req.beer)
}

const update = (req, res, next) => {
    const { beer } = req

    beer.patch(req.body)
        .then(() => res.sendStatus(204))
        .catch((e) => next(e))
}

const list = (req, res, next) => {
    const { limit = 50, skip = 0 } = req.query
    BeerModel.find()
        .skip(skip)
        .limit(limit)
        .exec()
        .then((beers) => res.json(beers))
        .catch((e) => next(e))
}

const remove = (req, res, next) => {
    const { beer } = req
    beer.remove()
        .then(() => res.sendStatus(204))
        .catch((e) => next(e))
}

export default {
    load,
    create,
    get,
    update,
    remove,
    list,
}
