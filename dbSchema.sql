---------------------------------------------------------------------------
-- BANCO db_prestador;
-- DROP DATABASE db_prestador;
---------------------------------------------------------------------------
CREATE DATABASE IF NOT EXIST "db_prestador";

---------------------------------------------------------------------------
-- TABELA tb_tipos
-- DROP TABLE tb_tipos
---------------------------------------------------------------------------
CREATE TABLE "tb_tipos" (
	"tipo_code" BIGSERIAL PRIMARY KEY NOT NULL,
	"tipo_name" VARCHAR(20) NOT NULL
);

--------------------------------------------------------------------------
-- INSERT tb_tipos
-- DROP TABLE tb_tipos
--------------------------------------------------------------------------
INSERT INTO "tb_tipos" (
	"tipo_name"
) VALUES ("Ativo");

---------------------------------------------------------------------------
-- TABELA tb_status
-- DROP TABLE tb_status
---------------------------------------------------------------------------
CREATE TABLE "tb_status" (
	"status_code" BIGSERIAL PRIMARY KEY NOT NULL,
	"status_name" VARCHAR(20) NOT NULL
);

--------------------------------------------------------------------------
-- INSERT tb_status
-- DROP TABLE tb_status
--------------------------------------------------------------------------
INSERT INTO "tb_status" (
	status_name
) VALUES ("Ativo");

---------------------------------------------------------------------------
-- TABELA tb_usuarios
-- DROP TABLE tb_usuarios
---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS tb_usuarios(
	"usu_code" BIGSERIAL PRIMARY KEY,
	"usu_tipo_code" BIGINT REFERENCES "tb_tipos"("tipo_code"),
	"usu_status_code" BIGINT REFERENCES "tb_status"("status_code"), 
	"usu_name" VARCHAR(50) NOT NULL,
	"usu_email" VARCHAR(50) UNIQUE NOT NULL,
	"usu_user" VARCHAR(20) NOT NULL,
	"usu_pass" VARCHAR(24) NOT NULL
);

--------------------------------------------------------------------------
-- INSERT tb_usuarios
-- DROP TABLE tb_usuarios
--------------------------------------------------------------------------
INSERT INTO "tb_usuarios" (
	"usu_name",
	"usu_email",
	"usu_user",
	"usu_pass",
	"usu_status"
) VALUES ('Renato Nascimento', 'infordigirn@gmail.com', 'infordigi', '123456', 1);



