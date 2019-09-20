-- ***********************************************************
-- TABLA CLIENTE
-- ORDEN:1
-- AUTOR: BQ
-- ACTUALIZACION: 30/07/19
-- ***********************************************************

DROP TABLE IF EXISTS CLIENTE;
CREATE TABLE CLIENTE
(
	Id_Cliente SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Id autogenerado',
	RUC VARCHAR(11) NOT NULL COMMENT 'Ruc del cliente',
	Razon_Social VARCHAR(50) NOT NULL COMMENT 'Razon social del cliente',
	Email VARCHAR(50) NOT NULL COMMENT 'email del cliente',
	Telefono CHAR(9) NOT NULL COMMENT 'Telefono del Cliente',
	Contacto VARCHAR(50) NOT NULL COMMENT 'Contacto del cliente',
	Status_Activo BIT, 
	Created_Id SMALLINT UNSIGNED NOT NULL COMMENT 'Id del usuario que creo' ,
	Created_At DATETIME COMMENT 'Fecha de la creacion',
	Updated_id SMALLINT NOT NULL  COMMENT'Id del usuario quien lo modifico ',
	Updated_At DATETIME COMMENT 'Fecha y hora de la ultima actualizacion',
	PRIMARY KEY (Id_Cliente)
)
ENGINE=INNODB;

-- ***********************************************************
-- TABLA USUARIO
-- ORDEN:2
-- AUTOR: BQ
-- ACTUALIZACION: 30/07/19
-- ***********************************************************

DROP TABLE IF EXISTS USUARIO;
CREATE TABLE USUARIO
(
	Id_Usuario SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Id autogenerado',
	Usuario VARCHAR(50) NOT NULL COMMENT 'Usuario del Cliente',
	Contrasena VARCHAR(50) NOT NULL COMMENT 'Contraseña del usuario',
	Id_Cliente SMALLINT UNSIGNED NOT NULL COMMENT 'Id del cliente ',
	Status_Activo BIT, 
	Created_Id SMALLINT UNSIGNED NOT NULL COMMENT 'Id del usuario que creo' ,
	Created_At DATETIME COMMENT 'Fecha de la creacion',
	Updated_id SMALLINT NOT NULL  COMMENT'Id del usuario quien lo modifico ',
	Updated_At DATETIME COMMENT 'Fecha y hora de la ultima actualizacion',
	PRIMARY KEY (Id_Usuario),
	FOREIGN KEY (Id_Cliente) REFERENCES cliente(Id_Cliente)
)
ENGINE=INNODB;

-- ***********************************************************
-- TABLA CONTACTO
-- ORDEN:3
-- AUTOR: BQ
-- ACTUALIZACION: 30/07/19
-- ***********************************************************
DROP TABLE IF EXISTS CONTACTO;
CREATE TABLE CONTACTO
(
	Id_Contacto SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Id autogenerado',
	Nombres VARCHAR(50) NOT NULL COMMENT 'Nombres del Contacto ',
	Apellidos VARCHAR(50) NOT NULL COMMENT 'Apellidos del Contacto',
	Direccion VARCHAR(50) NOT NULL COMMENT 'Direccion de Contacto',
	Telefono VARCHAR(9) NOT NULL COMMENT 'Telefono de Contacto',
	Email VARCHAR(50) NOT NULL COMMENT 'Email del contacto',
	Id_Cliente SMALLINT UNSIGNED NOT NULL COMMENT 'Id del cliente ',
	Status_Activo BIT, 
	Created_Id SMALLINT UNSIGNED NOT NULL COMMENT 'Id del usuario que creo' ,
	Created_At DATETIME COMMENT 'Fecha de la creacion',
	Updated_id SMALLINT NOT NULL  COMMENT'Id del usuario quien lo modifico ',
	Updated_At DATETIME COMMENT 'Fecha y hora de la ultima actualizacion',
	PRIMARY KEY (Id_Contacto),
	FOREIGN KEY (Id_Cliente) REFERENCES cliente(Id_Cliente)
)
ENGINE=INNODB;

-- ***********************************************************
-- TABLA ESTADO_REGISTRO
-- ORDEN:4
-- AUTOR: CR
-- ACTUALIZACION: 30/07/19
-- ***********************************************************
DROP TABLE IF EXISTS ESTADO_REGISTRO;
CREATE TABLE ESTADO_REGISTRO
(
	Id_Estado_Registro SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Id autogenerado',
	Nombre_Estado VARCHAR(50) NOT NULL COMMENT 'Nombre del Estado ',
	Status_Activo BIT, 
	Created_Id SMALLINT UNSIGNED NOT NULL COMMENT 'Id del usuario que creo' ,
	Created_At DATETIME COMMENT 'Fecha de la creacion',
	Updated_id SMALLINT NOT NULL  COMMENT'Id del usuario quien lo modifico ',
	Updated_At DATETIME COMMENT 'Fecha y hora de la ultima actualizacion',
	PRIMARY KEY (Id_Estado_Registro)
)
ENGINE=INNODB;

-- ***********************************************************
-- TABLA ESTADO CLIENTE
-- ORDEN:5
-- AUTOR: CR
-- ACTUALIZACION: 30/07/19
-- ***********************************************************
DROP TABLE IF EXISTS ESTADO_CLIENTE;
CREATE TABLE ESTADO_CLIENTE
(
	Id_Cliente SMALLINT UNSIGNED NOT NULL  COMMENT 'Id del cliente',
	Id_Estado_Registro SMALLINT UNSIGNED NOT NULL  COMMENT 'Id del estado de registro',
	Status_Activo BIT, 
	Created_Id SMALLINT UNSIGNED NOT NULL COMMENT 'Id del usuario que creo' ,
	Created_At DATETIME COMMENT 'Fecha de la creacion',
	Updated_id SMALLINT NOT NULL  COMMENT'Id del usuario quien lo modifico ',
	Updated_At DATETIME COMMENT 'Fecha y hora de la ultima actualizacion',
	PRIMARY KEY (Id_Cliente,Id_Estado_Registro)
)
ENGINE=INNODB;


-- ***********************************************************
-- TABLA PLAN_FACTURACION
-- ORDEN: 6
-- AUTOR: CR
-- ACTUALIZACION: 30/07/19
-- ***********************************************************

DROP TABLE IF EXISTS PLAN_FACTURACION;
CREATE TABLE PLAN_FACTURACION
(
	Id_Plan_Facturacion SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Id autogenerado',
	Nombre_Plan VARCHAR(50) NOT NULL COMMENT 'Nombre del plan de facturacion',
	Detalle TEXT NULL COMMENT 'Descripcion detalla de las caracteristicas del plan, puede estar en HTML',
	Precio DECIMAL(10,2) NOT NULL COMMENT 'precio del plan de facturacion',
	Duracion VARCHAR (50) NOT NULL COMMENT 'tiempo de duracion del plan',
	Status_Activo BIT, 
	Created_Id SMALLINT UNSIGNED NOT NULL COMMENT 'Id del usuario que creo',
	Created_At DATETIME COMMENT 'Fecha hora de creacion',
	Updated_Id SMALLINT NOT NULL COMMENT 'Id del usuario que actualizo por ultima vez',
	Updated_At DATETIME COMMENT 'fecha hora de ultima actualizacion',
	PRIMARY KEY (Id_Plan_Facturacion)
)
ENGINE=INNODB;


-- ***********************************************************
-- TABLA FORMA_PAGO
-- ORDEN: 7
-- AUTOR: CR
-- ACTUALIZACION: 30/07/19
-- ***********************************************************

DROP TABLE IF EXISTS FORMA_PAGO;
CREATE TABLE FORMA_PAGO
(
	Id_Forma_Pago SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Id autogenerado',
	Forma_Pago VARCHAR(50) NOT NULL COMMENT 'Nombre de la forma de pago',
	Status_Activo BIT, 
	Created_Id SMALLINT UNSIGNED NOT NULL COMMENT 'Id del usuario que creo',
	Created_At DATETIME COMMENT 'Fecha hora de creacion',
	Updated_Id SMALLINT NOT NULL COMMENT 'Id del usuario que actualizo por ultima vez',
	Updated_At DATETIME COMMENT 'fecha hora de ultima actualizacion',
	PRIMARY KEY (Id_Forma_Pago)
)
ENGINE=INNODB;

-- ***********************************************************
-- TABLA CONTRATO
-- ORDEN: 8
-- AUTOR: CR
-- ACTUALIZACION: 30/07/19
-- ***********************************************************

DROP TABLE IF EXISTS CONTRATO;

CREATE TABLE CONTRATO
(
Id_Contrato SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Id autogenerado',
Id_Cliente SMALLINT UNSIGNED NOT NULL COMMENT 'FK cliente asociado al contrato',
Id_Plan_Facturacion SMALLINT UNSIGNED NOT NULL COMMENT 'FK plan de facturacion asociado al contrato',
Fecha_Inicio DATETIME NOT NULL COMMENT 'Fecha del inicio del contrato',
Fecha_Fin DATETIME NOT NULL COMMENT 'fecha fin del contrato',
Monto DECIMAL(10,2) NOT NULL COMMENT 'monto del contrato',
Path_Pdf VARCHAR(250) COMMENT 'ruta del archivo pdf',
Path_Pdf_Firmado VARCHAR(250) COMMENT 'ruta del archivo firmado', 
Status_Activo BIT,
Created_Id SMALLINT UNSIGNED NOT NULL COMMENT 'Id del usuario que creo',
Created_At DATETIME COMMENT 'Fecha hora de creacion',
Updated_Id SMALLINT NOT NULL COMMENT 'Id del usuario que actualizo por ultima vez',
Updated_At DATETIME COMMENT 'fecha hora de ultima actualizacion',
PRIMARY KEY (Id_Contrato),
FOREIGN KEY (Id_Cliente) REFERENCES CLIENTE(Id_cliente) ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (Id_Plan_Facturacion) REFERENCES PLAN_FACTURACION(Id_Plan_Facturacion) ON UPDATE CASCADE ON DELETE CASCADE
)
ENGINE = INNODB;


-- ***********************************************************
-- TABLA PAGO
-- ORDEN: 9
-- AUTOR: CR
-- ACTUALIZACION: 30/07/19
-- ***********************************************************

DROP TABLE IF EXISTS PAGO;

CREATE TABLE PAGO
(
Id_Pago SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Id autogenerado',
Id_Forma_Pago SMALLINT UNSIGNED NOT NULL  COMMENT 'Fk forma de pago asociado',
Fecha_Emision DATETIME NOT NULL COMMENT 'Fecha de emision de factura',
Monto DECIMAL(10,2) NOT NULL COMMENT 'monto de pago',
Path_Voucher VARCHAR(250) COMMENT 'ruta del archivo voucher',
Status_Validacion BIT(1),
Status_Activo BIT(1),
Created_Id SMALLINT UNSIGNED NOT NULL COMMENT 'Id del usuario que creo',
Created_At DATETIME COMMENT 'Fecha hora de creacion',
Updated_Id SMALLINT NOT NULL COMMENT 'Id del usuario que actualizo por ultima vez',
Updated_At DATETIME COMMENT 'fecha hora de ultima actualizacion',
PRIMARY KEY (Id_Pago),
FOREIGN KEY (Id_Forma_Pago) REFERENCES FORMA_PAGO(Id_Forma_Pago) ON UPDATE CASCADE ON DELETE CASCADE
)
ENGINE = INNODB;

-- ***********************************************************
-- TABLA FACTURA VENTA
-- ORDEN: 10
-- AUTOR: CR
-- ACTUALIZACION: 30/07/19
-- ***********************************************************

DROP TABLE IF EXISTS FACTURA_VENTA;

CREATE TABLE FACTURA_VENTA
(
Id_Factura_Venta SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Id autogenerado',
Id_Pago SMALLINT UNSIGNED NOT NULL  COMMENT 'Fk pago asociado',
Fecha_Emision DATETIME NOT NULL COMMENT 'Fecha de emision de factura',
Monto DECIMAL(10,2) NOT NULL COMMENT 'monto de pago',
Path_Comprobante VARCHAR(250) COMMENT 'ruta del archivo voucher',
Status_Pale BIT(1) COMMENT 'Estado que indica si se encuentra enviado/registrado al sistema de facturacion de pale',
Created_Id SMALLINT UNSIGNED NOT NULL COMMENT 'Id del usuario que creo',
Created_At DATETIME COMMENT 'Fecha hora de creacion',
Updated_Id SMALLINT NOT NULL COMMENT 'Id del usuario que actualizo por ultima vez',
Updated_At DATETIME COMMENT 'fecha hora de ultima actualizacion',
PRIMARY KEY (Id_Factura_Venta),
FOREIGN KEY (Id_Pago) REFERENCES PAGO(Id_Pago) ON UPDATE CASCADE ON DELETE CASCADE
)
ENGINE = INNODB;



