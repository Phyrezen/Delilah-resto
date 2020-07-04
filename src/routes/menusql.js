
const express = require('express');
const router = express.Router();

const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');



router.get('/', isLoggedIn, async (req, res) => {
    const links = await pool.query('SELECT * FROM menu WHERE user_id = ?', [req.user.id]);
    res.render('links/list', { links });
});