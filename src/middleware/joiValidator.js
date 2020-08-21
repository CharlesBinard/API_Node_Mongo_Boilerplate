import _ from 'lodash'

const joiValidator = (schema) => {
    return (req, res, next) => {
        const errors = _.compact(
            _.map(schema, (key, index) => {
                const { error } = schema[index].validate(req[index], {
                    abortEarly: false,
                    allowUnknown: true,
                    stripUnknown: true,
                })
                return error
            })
        )
        const valid = !errors.length
        if (valid) {
            next()
        } else {
            const messages = errors.map((error) => {
                const { details } = error
                return details.map((i) => i.message)
            })

            res.status(422).json({
                errors: [].concat(...messages),
            })
        }
    }
}

export default joiValidator
