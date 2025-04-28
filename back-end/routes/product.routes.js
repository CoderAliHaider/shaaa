// const express = require('express');
// const router = express.Router();
// const {
//   addProduct,
//   getAllProducts,
//   getProductFromCookie,
//   updateProduct,
//   deleteProduct
// } = require('../controllers/product.controller.js');

// router.post('/add', addProduct); // Create
// router.get('/', getAllProducts); // Read all
// router.get('/cookie', getProductFromCookie); // Read from cookie
// router.put('/update/:id', updateProduct); // Update
// router.delete('/delete/:id', deleteProduct); // Delete

// module.exports = router;


const express = require('express');
const router = express.Router();
const {
  addProduct,
  getAllProducts,
  getProductFromCookie,
  getProductById,  // Import the new controller function
  updateProduct,
  deleteProduct
} = require('../controllers/product.controller.js');

// Routes
router.post('/add', addProduct); // Create
router.get('/', getAllProducts); // Read all
router.get('/cookie', getProductFromCookie); // Read from cookie
router.get('/:id', getProductById); // Read single product by ID (NEW)
router.put('/update/:id', updateProduct); // Update
router.delete('/delete/:id', deleteProduct); // Delete

module.exports = router;
