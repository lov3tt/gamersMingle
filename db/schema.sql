CREATE DATABASE sequelize_passport;
USE sequelize_passport;

CREATE TABLE Users(
'user_id' int(20) NOT NULL AUTO_INCREMENT,
'email' VARCHAR(255) NOT NULL,
'username' VARCHAR(25) NOT NULL,
'password' VARCHAR(255) NOT NULL,
'first_name' VARCHAR(255) NOT NULL,
'last_name' VARCHAR(255) NOT NULL,
'gender' ENUM('M', 'F'),
'city' VARCHAR(255),
'state' VARCHAR(255),
'country' VARCHAR(255),
'profile_picture_url' VARCHAR(255),
'birth_date' VARCHAR(255),
'date_created' DATE NOT NULL,
'date_updated' DATE,
PRIMARY KEY ('user_id'),
UNIQUE KEY 'email' ('email'),
UNIQUE KEY 'username' ('username')
);

CREATE TABLE Posts(
'post_id' int(20) NOT NULL AUTO_INCREMENT,
'user_id' int(20) NOT NULL
'caption'  VARCHAR(255),
'post_url' VARCHAR(255) NOT NULL,
'date_created' DATE NOT NULL,
'date_updated' DATE,
PRIMARY KEY ('post_id'),
FOREIGN KEY ('user_id') REFERENCES Users('user_id')
);