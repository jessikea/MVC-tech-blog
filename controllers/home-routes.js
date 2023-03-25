const router = require('express').Router();
const { User, Comment, Post } = require('../models');
// const withAuth = require('../../utils/auth');

// GET all post

router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll({
        include: [User],
      });
  
      const posts = postData.map((post) => post.get({ plain: true }));
  
      res.render('all-posts', { posts });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// GET one post
router.get('/post/:id', async (req, res) => {
    try {   
        const postData = await Post.findByPk(req.params.id, {
            include: [
            User, {
                model: Comment, include: [User] 
            }
            ],
            });
            if (postData){
                const post = postData.get({ plain: true });
                res.render('post', { post });
            }
            else {
                res.status(404).end();
            }
        } catch (err) {
            res.status(500).json(err);
        }
    });

    // get signup page
    router.get('/signup', (req, res) => {
        if (req.session.loggedIn) {
            res.redirect('/');
            return;
        }
        res.render('signup');
    });

    // get login page
    router.get('/login', (req, res) => {
        if (req.session.loggedIn) {
            res.redirect('/');
            return;
        }
        res.render('login');
    }
    );

    module.exports = router;
