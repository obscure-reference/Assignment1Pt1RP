const url = require('url');
/** Author: Roman Polonyankin
 * File Name: exampleUsage.js
 * Website Name: Assignment 1
 * File Description: This controller is used to get, render, and activate the appropriate route when called from the index route.
 */


//Each of the blocks below is used to get, render, and activate the appropriate route when called from the index route.

exports.home = (req, res, next) => {
  res.render('index', {
    title: 'Home',
    isActive: 'home',
  });
};

exports.contact = (req, res, next) => {
  res.render('contact', {
    title: 'Contact Me',
    isActive: 'contact',
  });
};

exports.projects = (req, res, next) => {
  res.render('projects', {
    title: 'My Projects',
    isActive: 'projects',
  });
};

exports.aboutme = (req, res, next) => {
  res.render('aboutme', {
    title: 'About Me',
    isActive: 'aboutme',
  });
};

exports.services = (req, res, next) => {
  res.render('services', {
    title: 'Services',
    isActive: 'services',
  });
};







