const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');

const swaggerDocs = require('../utils/swagger/swagger-output.json')

router.get('/', (req, res) => {
  // #swagger.ignore = true
  res.send('API Home route. Go to /contacts to see all contacts.')
})

router.use('/api', swaggerUi.serve)
router.get('/api', swaggerUi.setup(swaggerDocs) /* #swagger.ignore = true*/)

module.exports = router;