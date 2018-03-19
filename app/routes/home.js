module.exports = (app) => {

    app.get('/clientes', (req, res, next) => {
    	app.database.run(`
    		SELECT
    			*
    		FROM tb_usuarios
    	`,[]).then(data => {
    		res.render('tabela_clientes', { usuarios : data });
    	}).catch(error => {
    		res.render('tabela_clientes', { usuarios : null, status : 'Error, tente novamente mais tarde.' });
    	});
    })

    app.get('/cadastro', (req, res, next) => {
    	app.database.tb_clientes.insert(`
			name 	: req.body.name,
			email 	: req.body.email,
			user 	: req.body.user,
			pass 	: req.body.pass,
			status 	: req.body.status
    	`,[]).then(data => {
    		res.render('cadastro_clientes', { cadastro : data, status : 'Dados cadastrados com sucesso!' });
    	}).catch(error => {
    		res.render('cadastro_clientes', { cadastro : null, status : 'Erro ao tentar cadastrar dados!' });
    	});
    })
}