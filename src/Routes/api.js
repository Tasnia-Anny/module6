// Routes/api.js
const express = require('express');
const router = express.Router();

// Import controller files
const blogController = require('../Controllers/blogController');
const blogDetailsController = require('../Controllers/blogDetailsController');
const commentController = require('../Controllers/commentController');
const messageController = require('../Controllers/messageController');
const portfolioController = require('../Controllers/portfolioController');
const productController = require('../Controllers/productController');
const profitController = require('../Controllers/profitController');
const projectController = require('../Controllers/projectController');
const serviceController = require('../Controllers/serviceController');
const titleController = require('../Controllers/titleController');

// Define router paths for each controller function
router.get('/blog/create', blogController.create);
router.get('/blog/read', blogController.read);
router.get('/blog/delete', blogController.delete);
router.get('/blog/update', blogController.update);

router.get('/blog/create', blogDetailsController.create);
router.get('/blog/read', blogDetailsController.read);
router.get('/blog/delete', blogDetailsController.delete);
router.get('/blog/update', blogDetailsController.update);

router.get('/blog/create', commentController.create);
router.get('/blog/read', commentController.read);
router.get('/blog/delete', commentController.delete);
router.get('/blog/update', commentController.update);

router.get('/blog/create', messageController.create);
router.get('/blog/read', messageController.read);
router.get('/blog/delete', messageController.delete);
router.get('/blog/update', messageController.update);

router.get('/blog/create', portfolioController.create);
router.get('/blog/read', portfolioController.read);
router.get('/blog/delete', portfolioController.delete);
router.get('/blog/update', portfolioController.update);

router.get('/blog/create', productController.create);
router.get('/blog/read', productController.read);
router.get('/blog/delete', productController.delete);
router.get('/blog/update', productController.update);

router.get('/blog/create', profitController.create);
router.get('/blog/read', profitController.read);
router.get('/blog/delete', profitController.delete);
router.get('/blog/update', profitController.update);

router.get('/blog/create', projectController.create);
router.get('/blog/read', projectController.read);
router.get('/blog/delete', projectController.delete);
router.get('/blog/update', projectController.update);

router.get('/blog/create', serviceController.create);
router.get('/blog/read', serviceController.read);
router.get('/blog/delete', serviceController.delete);
router.get('/blog/update', serviceController.update);

router.get('/blog/create', titleController.create);
router.get('/blog/read', titleController.read);
router.get('/blog/delete', titleController.delete);
router.get('/blog/update', titleController.update);

// Define routes for the other controllers and functions...

module.exports = router;
