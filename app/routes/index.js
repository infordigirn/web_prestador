module.exports = (app) => {
      app.get('/', (req, res, next) => {
            res.render('index');
      })

      app.post('/', (req, res, next) => {
            res.redirect('index');
      })

      app.get('/cadastro',(req, res, next) => {
            res.render('cadastro_usuarios');
      })

      app.post('/cadastro', (req, res ,next) => {
            res.redirect('cadastro_usuarios');
      })

      app.get('/login', (req, res, next) => {
            res.render('login');
      })

      app.post('/login', (req, res, next) => {
            console.log(req.body);
            res.redirect('/');
      })
}