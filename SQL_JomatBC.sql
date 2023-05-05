use hotel;

CREATE TABLE datos (
	id int NOT NULL AUTO_INCREMENT,
	businessName varchar(100),
	businessAddress varchar(100),
	businessPhone varchar(10),
	businessEmail varchar(65),
	businessWebsite varchar(500),
	businessLogo varchar(800),
	facebookLink varchar(500),
	twitterLink varchar(500),
	linkedinLink varchar(500),
    backgroundLink varchar(800),
	businessJob varchar(100),
    primary key (id)
);

drop table datos;