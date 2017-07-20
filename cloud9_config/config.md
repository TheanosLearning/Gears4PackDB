#### Setting up a new Cloud9 workspace (*Ubuntu 14.04*)

0. Create a new workspace `name > public > php template > create`

1. Start the mysql-server `mysql-ctl start`
```
MySQL 5.5 database added.  Please make note of these credentials:

       Root User: c9_user
   Database Name: c9
```
2. Create a card pack table
```
mysql -u c9_user
user c9;
```
![create table](https://github.com/TheanosLearning/Gears4PackDB/blob/master/sql/packs-table.sql)

