const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  // You can read the whole table from the database with the findAll method:
  try {
    const categoriesData = await Category.findAll({
      include: [{ model: Product }],
    });
    console.log(categoriesData);
    res.status(200).json(categoriesData);

    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET/find one category by its `id` value.
// be sure to include its associated Products
router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {
  // create a new category
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
