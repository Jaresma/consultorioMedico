create table category (
	id int not null auto_increment primary key,
	name varchar(200)
	);

insert into category (name) value ("Modulo 1");


create table medic (
	id int not null auto_increment primary key,
	no varchar(50),
	name varchar(50),
	lastname varchar(50),
	gender varchar(1),
	day_of_birth date,
	email varchar(255),
	address varchar(255),
	phone varchar(255),
	image varchar(255),
	is_active boolean not null default 1,
	created_at datetime,
	category_id int,
	foreign key (category_id) references category(id)
);