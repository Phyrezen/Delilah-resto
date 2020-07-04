const express = require('express');
const router = express.Router();
const helpers = require('../lib/helpers');
const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');
const { isAdmin } = require('../lib/adm');

router.get('/add', isLoggedIn, (req, res) => {
    res.render('links/add');
});
router.get('/confirmed', isLoggedIn, async(req, res) => {
    const idnro = await pool.query('SELECT  * FROM orders WHERE user_id= ? ORDER by id_menu DESC LIMIT 1', [req.user.id]);
    console.log(idnro);
    res.render('\confirmed', { idnro });
});
router.get('/follow', isLoggedIn, async(req, res) => {
    const idnros = await pool.query('SELECT  * FROM orders WHERE user_id= ?', [req.user.id]);
    console.log(idnros);
    res.render('follow', { idnros });
});
router.get('/admin', isLoggedIn, isAdmin, async(req, res) => {
    const core = await pool.query('SELECT  * FROM orders');
    console.log(core);
    res.render('\admin', { core });
});
router.post('/add', isLoggedIn, isAdmin, async(req, res) => {
    const { image, price, description } = req.body;
    const newLink = {
        image,
        price,
        description,
        user_id: req.user.id
    };
    await pool.query('INSERT INTO links_delilah set ?', [newLink]);
    req.flash('success', 'Link Saved Successfully');
    res.redirect('/delilahresto/profile');
});
router.get('/profile', isLoggedIn, async(req, res) => {
    const links = await pool.query('SELECT * FROM links_delilah');
    const idnros = await pool.query('SELECT  * FROM orders WHERE user_id= ?', [req.user.id]);
    res.render('profile', { links, idnros });
    console.log("Render menu w/DB");
});
router.get('/information', isLoggedIn, async(req, res) => {
    const links = await pool.query('SELECT * FROM usersdelilah WHERE id = ?', [req.user.id]);
    res.render('information', { links });
    console.log("Render profile w/DB");
});
router.get('/confirm', isLoggedIn, async(req, res) => {
    const confirm = await pool.query('SELECT * FROM tobuy WHERE user_id = ?', [req.user.id]);
    const confirmed = await pool.query('SELECT SUM(price)suma FROM tobuy WHERE user_id= ?', [req.user.id]);
    const suma = await pool.query('SELECT COUNT(id)cuenta FROM `tobuy` WHERE user_id= ?', [req.user.id]);
    const dataress = await pool.query('SELECT GROUP_CONCAT(resume SEPARATOR ", ") datares FROM `tobuy` WHERE user_id= ?', [req.user.id]);
    const databigg = await pool.query('SELECT GROUP_CONCAT(description SEPARATOR ", ") databig FROM `tobuy` WHERE user_id= ?', [req.user.id]);
    const idnros = await pool.query('SELECT  * FROM orders WHERE user_id= ?', [req.user.id]);
    res.render('confirm', { confirm, confirmed, suma, dataress, databigg, idnros });
    console.log(confirmed, databigg);
});
router.get('/menu', isLoggedIn, async(req, res) => {
    const links = await pool.query('SELECT * FROM links_delilah WHERE user_id = ?', [req.user.id]);
    res.render('/profile', { links });
});
router.get('/history', async(req, res) => {
    const history = await pool.query('SELECT * FROM history');
    res.render('\history', { history });
});
router.get('/delete/:id_menu', async(req, res) => {
    const { id_menu } = req.params;
    await pool.query('DELETE FROM tobuy WHERE id_menu = ?', [id_menu]);
    req.flash('success', 'Link Removed Successfully');
    res.redirect('/delilahresto/confirm');
});
router.post('/admin/id', isLoggedIn, async(req, res) => {
    const { suma, orders, resume, user_id, pay, estado, id_menu } = req.body;
    const pedido = {
        suma,
        orders,
        resume,
        user_id,
        pay,
        estado,
        id_menu,
    }
    try {
        await pool.query('INSERT INTO history set ?', [pedido]);
        await pool.query('DELETE FROM orders WHERE id_menu = ?', [id_menu]);
        console.log('enviado al reino de las sombras');
        res.redirect('/delilahresto/admin')
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});
router.post('/comeback', isLoggedIn, async(req, res) => {
    const { suma, orders, resume, user_id, pay, estado, id_menu } = req.body;
    const pedido = {
        suma,
        orders,
        resume,
        user_id,
        pay,
        estado,
        id_menu,
    }
    try {
        await pool.query('INSERT INTO orders set ?', [pedido]);
        await pool.query('DELETE FROM history WHERE id_menu = ?', [id_menu]);
        console.log('Comeback');
        res.redirect('/delilahresto/history')
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});
//////////////////////////////////  ADMIN   //////////////////////////////////
router.get('/edit/:id', async(req, res) => {
    const { id } = req.params;
    const links = await pool.query('SELECT * FROM links_delilah WHERE id = ?', [id]);
    console.log(links);
    res.render('links/edit', { link: links[0] });
});

router.post('/edit/:id', async(req, res) => {
    const { id } = req.params;
    const { image, description, price } = req.body;
    const newLink = {
        image,
        description,
        price
    };
    await pool.query('UPDATE links_delilah set ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'Link Updated Successfully');
    res.redirect('/delilahresto/profile');
});
//////////////////////////////////  INSERT   //////////////////////////////////
module.exports = router;

router.post('/profile', isLoggedIn, async(req, res) => {
    const { id, description, image, price, resume } = req.body;
    const tobuyp = {
        id,
        description,
        image,
        price,
        resume,
        user_id: req.user.id

    }
    console.log(tobuyp)
    try {
        let resultado = await pool.query('INSERT INTO tobuy set ?', [tobuyp]);
        req.flash('success', 'added to your cart');
        console.log(resultado);
        res.redirect('/delilahresto/profile')
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});
router.post('/confirm', isLoggedIn, async(req, res) => {
    const { suma, orders, pay, estado, resume } = req.body;
    const pedido = {
        suma,
        orders,
        pay,
        resume,
        estado,
        user_id: req.user.id

    }
    console.log(pedido)
    try {
        let resultado = await pool.query('INSERT INTO orders set ?', [pedido]);
        let asd = await pool.query('DELETE FROM tobuy');
        req.flash('success', 'order added');
        console.log(resultado, asd);
        res.redirect('/delilahresto/confirmed')
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});
//////////////////////////////////  UPDATES   //////////////////////////////////
router.post('/admin', isLoggedIn, async(req, res) => {
    const { estado, menu } = req.body;
    let resultado = await pool.query('UPDATE orders set estado=? WHERE id_menu= ?', [estado, menu]);
    req.flash('success', 'added to your cart');
    console.log(resultado);
    res.redirect('/delilahresto/admin')
});

router.post('/information', isLoggedIn, async(req, res) => {
    const { username } = req.body;
    const userr = {
        username
    }
    try {
        let resultado = await pool.query('UPDATE usersdelilah set ? WHERE id= ?', [userr, req.user.id]);
        req.flash('success', 'added to your cart');
        console.log(resultado);
        res.redirect('/delilahresto/information')
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});
router.post('/mail', isLoggedIn, async(req, res) => {
    const { email } = req.body;
    const userr = {
        email
    }
    try {
        let resultado = await pool.query('UPDATE usersdelilah set ? WHERE id= ?', [userr, req.user.id]);
        req.flash('success', 'added to your cart');
        console.log(resultado);
        res.redirect('/delilahresto/information')
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});
router.post('/name', isLoggedIn, async(req, res) => {
    const { fullname } = req.body;
    const fullnamez = {
        fullname
    }
    try {
        let resultado = await pool.query('UPDATE usersdelilah set ? WHERE id= ?', [fullnamez, req.user.id]);
        req.flash('success', 'added to your cart');
        console.log(resultado);
        res.redirect('/delilahresto/information')
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/phone', isLoggedIn, async(req, res) => {
    const { phone } = req.body;
    const phonez = {
        phone
    }
    try {
        let resultado = await pool.query('UPDATE usersdelilah set ? WHERE id= ?', [phonez, req.user.id]);
        req.flash('success', 'added to your cart');
        console.log(resultado);
        res.redirect('/delilahresto/information')
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});
router.post('/address', isLoggedIn, async(req, res) => {
    const { address } = req.body;
    const addressz = {
        address
    }
    try {
        let resultado = await pool.query('UPDATE usersdelilah set ? WHERE id= ?', [addressz, req.user.id]);
        req.flash('success', 'added to your cart');
        console.log(resultado);
        res.redirect('/delilahresto/information')
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/type', isLoggedIn, async(req, res) => {
    const { type } = req.body;
    await pool.query('UPDATE usersdelilah set type=? WHERE id= ?', [type, req.user.id]);
    res.redirect('/delilahresto/information')
});