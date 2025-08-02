const Category = require('../models/category.model');

//POST /api/categories
exports.createCategory = async (req, res) => {
  try {
    const { name, created_by } = req.body;
    const categoryName = name.trim().toLowerCase();

    const existing = await Category.findOne({ name: categoryName });
    if (existing) {
      return res.status(400).json({ message: 'Category already exists' });
    }

    const category = new Category({
      name: categoryName,
      created_by,
    });

    await category.save();
    return res.status(201).json(category);

  } catch (err) {
    return res.status(500).json({
      message: 'Server error while creating category',
      error: err.message,
    });
  }
};

//GET /api/categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find()
      .populate('created_by', 'name email role')
      .sort({ createdAt: -1 });

    return res.status(200).json(categories);

  } catch (err) {
    return res.status(500).json({
      message: 'Server error while fetching categories',
      error: err.message,
    });
  }
};

//GET /api/categories/:id
exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id)
      .populate('created_by', 'name email');

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    return res.status(200).json(category);

  } catch (err) {
    return res.status(500).json({
      message: 'Server error while retrieving category',
      error: err.message,
    });
  }
};

//DELETE /api/categories/:id
exports.deleteCategory = async (req, res) => {
  try {
    const deleted = await Category.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: 'Category not found' });
    }

    return res.status(200).json({ message: 'Category deleted successfully' });

  } catch (err) {
    return res.status(500).json({
      message: 'Server error while deleting category',
      error: err.message,
    });
  }
};
