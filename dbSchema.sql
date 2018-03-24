---------------------------------------------------------------------------
-- BANCO db_prestador;
-- DROP DATABASE db_prestador;
---------------------------------------------------------------------------
CREATE DATABASE IF NOT EXIST db_prestador;

---------------------------------------------------------------------------
-- TABELA tb_usuarios
-- DROP TABLE tb_usuarios
---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS tb_clientes(
	usu_code BIGSERIAL PRIMARY KEY,
	usu_name VARCHAR(50) NOT NULL,
	usu_email VARCHAR(50) UNIQUE NOT NULL,
	usu_user VARCHAR(20) NOT NULL,
	usu_pass VARCHAR(24) NOT NULL,
	usu_status INTEGER NOT NULL
);

--------------------------------------------------------------------------
-- INSERT tb_usuarios
-- DROP TABLE tb_usuarios
--------------------------------------------------------------------------
INSERT INTO 
tb_clientes (
	usu_name,
	usu_email,
	usu_user,
	usu_pass,
	usu_status
) VALUES ('Renato Nascimento', 'infordigirn@gmail.com', 'infordigi', '123456', 1);