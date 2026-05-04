class AuthController {
    // Middleware
    static checkAuth(req, res, next) {
        if (req.session.isLoggedIn) {
            return next();
        }
        res.redirect('/login');
    }

    static renderLogin(req, res) {
        res.render('login');
    }

    static handleLogin(req, res) {
        if (req.body.username === 'admin' && req.body.password === 'admin123') {
            req.session.isLoggedIn = true;
            req.session.username = req.body.username;
            res.redirect('/');
        } else {
            res.render('login', { error: 'Username atau Password salah!' });
        }
    }

    static handleLogout(req, res) {
        req.session.destroy();
        res.redirect('/login');
    }
}

module.exports = AuthController;