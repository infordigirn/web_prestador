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
-- TABELA tb_atuacao
-- DROP TABLE tb_atuacao
---------------------------------------------------------------------------
CREATE TABLE "tb_atuacao" (
	"atuacao_code" BIGSERIAL PRIMARY KEY NOT NULL,
	"atuacao_name" VARCHAR(20) NOT NULL
);

--------------------------------------------------------------------------
-- INSERT tb_atuacao
-- DROP TABLE tb_atuacao
--------------------------------------------------------------------------
INSERT INTO "tb_atuacao" (
	atuacao_name
) VALUES ("Administração");

---------------------------------------------------------------------------
-- TABELA tb_profissoes
-- DROP TABLE tb_profissoes
---------------------------------------------------------------------------
CREATE TABLE "tb_profissoes" (
	"prof_code" BIGSERIAL PRIMARY KEY NOT NULL,
	"prof_name" VARCHAR(20) NOT NULL
);

--------------------------------------------------------------------------
-- INSERT tb_status
-- DROP TABLE tb_profissoes
--------------------------------------------------------------------------
INSERT INTO "tb_profissoes" (
	prof_name
) VALUES ("Analista de Sistemas");

---------------------------------------------------------------------------
-- TABELA tb_usuarios
-- DROP TABLE tb_usuarios
---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS tb_usuarios(
	"usu_code" BIGSERIAL PRIMARY KEY,
	"usu_tipo_code" BIGINT REFERENCES "tb_tipos"("tipo_code"),
	"usu_status_code" BIGINT REFERENCES "tb_status"("status_code"),
	"usu_atuacao_code" BIGINT REFERENCES "tb_atuacao"("atuacao_code"),
	"usu_prof_code" BIGINT REFERENCES "tb_profissoes"("prof_code"),
	"usu_created_at" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
	"usu_updated_at" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
	"usu_name" VARCHAR(50) NOT NULL,
	"usu_endereco" VARCHAR(50) NOT NULL,
	"usu_number" INTEGER NOT NULL,
	"usu_email" VARCHAR(50) UNIQUE NOT NULL,
	"usu_rg"	VARCHAR(20) NOT NULL,
	"usu_cpf" VARCHAR (14) NOT NULL,
	"usu_contato" VARCHAR (14) NOT NULL,
	"usu_cep" VARCHAR (10) NOT NULL,
	"usu_user" VARCHAR(20) NOT NULL,
	"usu_pass" VARCHAR(24) NOT NULL
	
);

--------------------------------------------------------------------------
-- INSERT tb_usuarios
-- DROP TABLE tb_usuarios
--------------------------------------------------------------------------
INSERT INTO "tb_usuarios" (
	"usu_tipo_code",
	"usu_status_code",
	"usu_name",
	"usu_email",
	"usu_user",
	"usu_pass"
) VALUES (1,1,'Renato Nascimento', 'infordigirn@gmail.com', 'infordigi', '123456');



