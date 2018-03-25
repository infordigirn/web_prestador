module.exports = (app) => {

    app.get('/clientes', (req, res, next) => {
    	app.database.run(`
    		SELECT
    			*
		    FROM tb_usuarios AS u 
		    INNER JOIN tb_tipos AS t ON u.usu_tipo_code=t.tipo_code
		    INNER JOIN tb_status AS s ON u.usu_status_code=status_code
		    ORDER BY usu_code
    	`,[]).then(data => {
    		res.render('tabela_clientes', { usuario : data });
    	}).catch(error => {
    		res.render('tabela_clientes', { usuario : null, status : 'Error, tente novamente mais tarde.' });
    	});
    })
    
    app.post('/clientes', (req, res, next) => {
	console.log(req.body);
	//var usu_code = req.body.client_code;
	var query = {
		usu_name 		: req.body.nome,
		usu_email 		: req.body.email,
		usu_user 		: req.body.user,
		usu_pass 		: req.body.pass,
		usu_tipo_code	: req.body.tipo,
		usu_status_code	: req.body.status
	};
	
	if(req.body.action == 'delete'){
		var pass = req.body.pass;

		if(!pass){
			res.redirect('/clientes');
		} else {
			app.database.tb_usuarios.destroy({ usu_code: usu_code }).then(data => {
				res.redirect('/clientes')
			}).catch(err => {
				res.redirect('/clientes')
			});
		}

	} else {

		if (req.body.action == 'edit') {
			app.database.query(`
				UPDATE tb_usuarios SET
					usu_name = req.body.nome,
					usu_email = req.body.email,
					usu_user = req.body.user,
					usu_tipo_code = req.body.tipo,
					usu_status_code = req.body.status,
				WHERE usu_code = req.body.client_code 
			`,[]).then(data => {
				console.log('Gravou!')
				res.redirect('/clientes' );
			}).catch(err => {
				console.log('Ocorreu algum erro!')
				res.redirect('/clientes' );
			});
			
		} else {
			app.database.tb_usuarios.insert(query).then(data => {
				res.redirect('/clientes' );
			}).catch(error => { res.redirect('/clientes') });
		}
	}
    })
}