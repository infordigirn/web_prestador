module.exports = (app) => {

    app.get('/administracao', (req, res, next) => {
    	app.database.run(`
    		SELECT
    			*
		    FROM tb_usuarios AS u 
		    INNER JOIN tb_tipos AS t ON u.usu_tipo_code=t.tipo_code
			INNER JOIN tb_status AS s ON u.usu_status_code=status_code
			INNER JOIN tb_profissoes AS p ON u.usu_prof_code=prof_code
			INNER JOIN tb_atuacao AS a ON usu_atuacao_code=atuacao_code
		    ORDER BY usu_code
    	`,[]).then(data => {
    		res.render('administrativo', { usuario : data });
    	}).catch(error => {
    		res.render('administrativo', { usuario : null, status : 'Error, tente novamente mais tarde.' });
    	});
    })
    
    app.post('/administracao', (req, res, next) => {
	console.log(req.body);
	var usu_code = req.body.client_code;
	var query = {
		usu_code		: req.body.client_code,
		usu_name 		: req.body.nome,
		usu_endereco	: req.body.endereco,
		usu_number		: req.body.number,
		usu_email 		: req.body.email,
		usu_rg			: req.body.rg,
		usu_cpf			: req.body.cpf,
		usu_contato		: req.body.contato,
		usu_user 		: req.body.user,
		usu_pass 		: req.body.pass,
		usu_tipo_code	: req.body.tipo,
		usu_status_code	: req.body.status,
		usu_atuacao_code: req.body.atuacao,
		usu_prof_code	: req.body.profissao,
		usu_cep			: req.body.cep
	};
	
	if(req.body.action == 'delete'){
		var pass = req.body.pass;

		if(!pass){
			res.redirect('/administracao');
		} else {
			app.database.tb_usuarios.destroy({ usu_code: usu_code }).then(data => {
				res.redirect('/administracao')
			}).catch(err => {
				res.redirect('/administracao', err);
			});
		}

	} else if (req.body.action == 'edit') {
		delete query.usu_pass;
		app.database.tb_usuarios.update(query).then(data => {
			console.log('Gravou!')
			res.redirect('/administracao' );
		}).catch(err => {
			console.log('Ocorreu algum erro!', err);
			res.redirect('/administracao' );
		});
			
	} else {
		delete query.usu_code;
		app.database.tb_usuarios.insert(query).then(data => {
			res.redirect('/administracao' );
		}).catch(error => { res.redirect('/administracao', err) });
	}
	
    })
}