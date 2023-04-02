const router = require("express").Router();
const { Category, Product } = require("../../models");
const { update } = require("../../models/Product");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  // You can read the whole table from the database with the findAll method:
  try {
    const categoriesData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET/find one category by its `id` value.
// be sure to include its associated Products
router.get("/:id", async (req, res) => {
  try {
    const categoriesData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if(!categoriesData) {
      res.status(404).send('Invalid ID :(')
      // Return statement stops further execution in callback. 
      return; 
    }

    res.status(200).json(categoriesData);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

// Create a category
router.post("/", async (req, res) => {
  try {
    const categoriesData = await Category.create(req.body);
    console.log('this is req.body', req.body);
    res.status(200).json(categoriesData);
  }
  catch {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
// update a category by its `id` value
 try {
  const userData = await Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
 } catch {
    res.status(400).json(err);
 }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoriesData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoriesData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
