const express = require('express');
const mongoose = require('mongoose');
const Post = require('../models/post');

const router = express.Router();

//Get all Posts
// router.get('/api/posts', (req, res, next) => {
router.get('', (req, res, next) => {

    Post.find()
        .then((posts) => {
            res.status(200).json({
                message: 'Posts fecthed succesfully',
                posts: posts
            });
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
});

//Get a specific Post
// router.get('/api/posts/:id', (req, res, next) => {
router.get('/:id', (req, res, next) => {

    Post.findById(req.params.id)
        .then((post) => {
            res.status(200).json({
                message: 'Post fecthed succesfully',
                post: post
            });
            // console.log(post);
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
});

//Add a post
router.post('', (req, res, next) => {

    const post = new Post({
        _id: mongoose.Types.ObjectId(), // not necessary required as MongoDb creates it automatically
        title: req.body.title,
        body: req.body.body,
        date: new Date()
    });

    post.save()
        .then(() => {
            res.status(201).json({
                message: 'Post added succesfully',
            });
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
});

//Edit a post
router.put('/:id', (req, res, next) => {

    const post = new Post({
        _id: req.body._id, //or req.params.id
        title: req.body.title,
        body: req.body.body,
        date: new Date(),
        likes: req.body.likes,
        dislikes: req.body.dislikes,
        comments: req.body.comments
    });

    Post.updateOne({ _id: req.params.id }, post)
        .then(() => {
            res.status(200).json({
                message: 'Post updated succesfully'
            });
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
});

//Delete a Post
router.delete('/:id', (req, res, next) => {

    Post.deleteOne({ _id: req.params.id })
        .then(() => {
            res.status(200).json({
                message: 'Post deleted succesfully',
            });
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
});

module.exports = router;