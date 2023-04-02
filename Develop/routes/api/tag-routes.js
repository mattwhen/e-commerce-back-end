const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // including its associated Product data
  try {
    const productTag = await ProductTag.findAll();
    res.status(200).json(productTag); 
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // including its associated Product data
  try {
    const productTag = await ProductTag.findByPk(req.params.id, {
      include: [{model: Product}]
    })
  } catch (err) {
    res.status(500).json(err);
  }
  
  
});

router.post('/', (req, res) => {
  // create a new tag
  
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', async(req, res) => {
  // delete on tag by its `id` value
  try {
    const productTag = await ProductTag.destroy({
      where: {
        id: req.params.id,
      }
    });
    if(!productTag) {
      res.status(404).json({message: 'no user found'})
    };
  }
  catch {
    res.status(500).json(err);
  }
});

module.exports = router;
