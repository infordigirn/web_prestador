---------------------------------------------------------------------------
-- BANCO db_prestador;
-- DROP DATABASE db_prestador;
---------------------------------------------------------------------------
CREATE DATABASE IF NOT EXIST db_prestador;

---------------------------------------------------------------------------
-- TABELA tb_clientes
-- DROP TABLE tb_clientes
---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS tb_clientes(
	cli_code BIGSERIAL PRIMARY KEY,
	cli_name VARCHAR(50) NOT NULL,
	cli_email VARCHAR(50) UNIQUE NOT NULL,
	cli_user VARCHAR(20) NOT NULL,
	cli_pass VARCHAR(24) NOT NULL,
	cli_status INTEGER NOT NULL
);

--------------------------------------------------------------------------
-- INSERT tb_clientes
-- DROP TABLE tb_clientes
--------------------------------------------------------------------------
INSERT INTO 
tb_clientes (
	cli_name,
	cli_email,
	cli_user,
	cli_pass,
	cli_status
) VALUES ('Renato Nascimento', 'infordigirn@gmail.com', 'infordigi', '123456', 1);