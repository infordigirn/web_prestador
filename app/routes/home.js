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

	var query = {
		usu_name 	: req.body.nome,
		usu_email 	: req.body.email,
		usu_user 	: req.body.user,
		usu_pass 	: req.body.pass,
		usu_tipo_code : req.body.tipo,
		usu_status 	: req.body.status
	};
	
	if(req.body.action == 'delete'){
		var pass = req.body.pass;

		if(!pass){
			res.redirect('/clientes');
		} else {
			app.database.tb_usuarios.destroy({ usu_code: req.body.client_code }).then(data => {
				res.redirect('/clientes')
			}).catch(err => {
				res.redirect('/clientes')
			});
		}

	} else {

		if (req.body.action == 'edit') {
			// app.database.tb_usuarios.update({}).then(data => {}).catch({});
			res.redirect('/clientes' );
		} else {
			app.database.tb_usuarios.insert(query).then(data => {
				res.redirect('/clientes' );
			}).catch(error => { res.redirect('/clientes') });
		}
	}
    })
}