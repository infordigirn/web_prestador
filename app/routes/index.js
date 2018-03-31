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

      app.get('/registro_prestador', (req, res, next) => {
            res.render('register');
      })

      app.post('registro_prestadores', (req, res, next) => {
            redirect('/cadastro');
      })
}