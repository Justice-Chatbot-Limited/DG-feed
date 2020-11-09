import Authorization from "../controllers/post.feed.controller";
import checkAuth from "../middlewares/checkauth";
import express from "express";
const router = express.Router();

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});
router.get("/post/all", checkAuth, Authorization.allAcess);
router.get("/post/:id", checkAuth, Authorization.singlePost);
router.delete("/post/:id", checkAuth, Authorization.singlePostDelete);
router.put("/post/:id", checkAuth, Authorization.updatePost);
router.post("/post", checkAuth, Authorization.createPost);
module.exports = router;

//const express = require('express');
//const { body } = require('express-validator');
//
//const feedController = require('../controllers/feed');
//
//const router = express.Router();
//
//// GET /feed/posts
//router.get('/posts', feedController.getPosts);
//
//// POST /feed/post
//router.post('/post',
//[
//body('title')
//.trim()
//.isLength({min: 5}),
//body('content')
//.trim()
//.isLength({min: 5})
//],feedController.createPost);
//
//module.exports = router;