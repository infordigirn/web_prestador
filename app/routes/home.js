module.exports = (app) => {

    app.get('/clientes', (req, res, next) => {
    	app.database.run(`
    		SELECT
    			*
    		FROM tb_usuarios
    	`,[]).then(data => {
    		res.render('tabela_clientes', { usuario : data });
    	}).catch(error => {
    		res.render('tabela_clientes', { usuario : null, status : 'Error, tente novamente mais tarde.' });
    	});
    })
    
    app.post('/clientes', (req, res, next) => {
	
    	app.database.tb_usuarios.insert({
			usu_name 	: req.body.nome,
			usu_email 	: req.body.email,
			usu_user 	: req.body.user,
			usu_pass 	: req.body.pass,
			usu_tipo_code : req.body.tipo,
			usu_status 	: req.body.status
    	}).then(data => {
    		res.redirect('/clientes' );
    	}).catch(error => {
    		res.redirect('/clientes');
    	});
    })
}