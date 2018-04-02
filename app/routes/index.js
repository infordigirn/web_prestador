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

      app.get('/registro', (req, res, next) => {
            res.render('index');
      })

      app.post('/registro', (req, res, next) => {
            redirect('/index');
      })
}