/** Author: Roman Polonyankin
 * File Name: index.js
 * Website Name: Assignment 1
 * File Description: This is routing index file. It is used to control all the routing of the website and diverts
 *  it's logic to exampleUsage.js according to the page called.
 */


var express = require('express');
var router = express.Router();
const loaderController = require('../controllers/exampleUsage');

router.get('/', loaderController.home);
router.get('/index', loaderController.home);
router.get('/contact', loaderController.contact);
router.get('/aboutme', loaderController.aboutme); //This whole block is used to reference the loaderController aka the exampleUsage.js file
router.get('/projects', loaderController.projects); //which contains all the routing information logic
router.get('/services', loaderController.services);

module.exports = router;
