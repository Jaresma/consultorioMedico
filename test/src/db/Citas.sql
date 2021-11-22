create table status (
	id int not null auto_increment primary key,
	name varchar(100)
);

insert into status (id,name) values (1,"Pendiente"), (2,"Aplicada"),(3,"No asistio"),(4,"Cancelada");

create table payment (
	id int not null auto_increment primary key,
	name varchar(100)
);

insert into payment (id,name) values  (1,"Pendiente"),(2,"Pagado"),(3,"Anulado");

create table reservation(
	id int not null auto_increment primary key,
	title varchar(100),
	note text,
	message text,
	date_at varchar(50),
	time_at varchar(50),
	created_at datetime,
	pacient_id int,
	symtoms text,
	sick text,
	medicaments text,
	user_id int,
	medic_id int,
	price double,
	is_web boolean not null default 0,
	payment_id int not null default 1,
	foreign key (payment_id) references payment(id),
	status_id int not null default 1,
	foreign key (status_id) references status(id),
	foreign key (user_id) references user(id),
	foreign key (pacient_id) references pacient(id),
	foreign key (medic_id) references medic(id)
);