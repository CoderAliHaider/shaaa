
// const Product = require('../models/product.js');

// // Create Product and store in cookie
// const addProduct = async (req, res) => {
//   const { name, description, price, imageUrl, category, stockQuantity } = req.body;

//   try {
//     const newProduct = await Product.create({
//       name,
//       description,
//       price,
//       imageUrl,
//       category,
//       stockQuantity
//     });

//     res.cookie('productData', JSON.stringify(newProduct), {
//       httpOnly: true,
//       maxAge: 24 * 60 * 60 * 1000,
//     });

//     res.status(201).json({ message: 'Product added', product: newProduct });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to add product' });
//   }
// };

// // Get All Products
// const getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch products' });
//   }
// };

// // Get Product from Cookie
// const getProductFromCookie = (req, res) => {
//   const productData = req.cookies.productData;
//   if (!productData) {
//     return res.status(404).json({ error: 'No product data in cookies' });
//   }
//   res.status(200).json(JSON.parse(productData));
// };

// // Get a Single Product by ID
// const getProductById = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const product = await Product.findById(id);
//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }
//     res.status(200).json({ message: 'Product found', product });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch product by ID' });
//   }
// };

// // Update Product by ID
// const updateProduct = async (req, res) => {
//   const { id } = req.params;
//   const updateData = req.body;

//   try {
//     const updatedProduct = await Product.findByIdAndUpdate(id, updateData, { new: true });
//     if (!updatedProduct) {
//       return res.status(404).json({ message: 'Product not found' });
//     }
//     res.status(200).json({ message: 'Product updated successfully', updatedProduct });
//   } catch (error) {
//     res.status(500).json({ message: 'An error occurred while updating the product' });
//   }
// };

// // Delete Product by ID
// const deleteProduct = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const deletedProduct = await Product.findByIdAndDelete(id);
//     if (!deletedProduct) {
//       return res.status(404).json({ message: 'Product not found' });
//     }
//     res.clearCookie('productData'); // Remove cookie if needed
//     res.status(200).json({ message: 'Product deleted successfully', product: deletedProduct });
//   } catch (error) {
//     res.status(500).json({ message: 'An error occurred while deleting the product' });
//   }
// };

// module.exports = {
//   addProduct,
//   getAllProducts,
//   getProductFromCookie,
//   getProductById,
//   updateProduct,
//   deleteProduct,
// };


const Product = require('../models/product.js');

// Create Product and store in cookie
const addProduct = async (req, res) => {
  const { title, description, price, image, quantity } = req.body;

  try {
    const newProduct = await Product.create({
      title,
      description,
      price,
      image,
      quantity
    });

    res.cookie('productData', JSON.stringify(newProduct), {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res.status(201).json({ message: 'Product added', product: newProduct });
  } catch (error) {
    console.error('Add Product Error:', error); // Helpful for debugging
    res.status(500).json({ error: 'Failed to add product' });
  }
};

// Get All Products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error('Fetch All Error:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

// Get Product from Cookie
const getProductFromCookie = (req, res) => {
  const productData = req.cookies.productData;
  if (!productData) {
    return res.status(404).json({ error: 'No product data in cookies' });
  }
  res.status(200).json(JSON.parse(productData));
};

// Get a Single Product by ID
const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product found', product });
  } catch (error) {
    console.error('Fetch by ID Error:', error);
    res.status(500).json({ error: 'Failed to fetch product by ID' });
  }
};

// Update Product by ID
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product updated successfully', updatedProduct });
  } catch (error) {
    console.error('Update Error:', error);
    res.status(500).json({ message: 'An error occurred while updating the product' });
  }
};

// Delete Product by ID
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.clearCookie('productData');
    res.status(200).json({ message: 'Product deleted successfully', product: deletedProduct });
  } catch (error) {
    console.error('Delete Error:', error);
    res.status(500).json({ message: 'An error occurred while deleting the product' });
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getProductFromCookie,
  getProductById,
  updateProduct,
  deleteProduct,
};
