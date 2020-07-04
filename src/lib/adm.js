const pool = require('../database');


module.exports = {
    async isAdmin(req, res, next) {
        const admincheck = await pool.query('SELECT * FROM usersdelilah WHERE id = ? AND type ="akx24fyc78v_%&!"', [req.user.id]);
        if (admincheck != "") {
            return next();
        } else {
            return res.redirect('/delilahresto/profile');
        }
    }
};