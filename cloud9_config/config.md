#### Setting up a new Cloud9 workspace (*Ubuntu 14.04*)

0. Create a new workspace `name > public > php template > create`

1. Start the mysql-server `mysql-ctl start`
```
MySQL 5.5 database added.  Please make note of these credentials:

       Root User: c9_user
   Database Name: c9
```
2. Create a card pack table
```sql
mysql -u c9_user
user c9;
create table packs(
       gamertag varchar(50),
       pack_type varchar(50),
       card_1 varchar(50),
       card_2 varchar(50),
       card_3 varchar(50),
       card_4 varchar(50),
       card_5 varchar(50),
       opened_at timestamp default current_timestamp
);
```
3. Configure Apache CORS
```sh
sudo vim /etc/apache2/sites-enabled/000-default.conf@
sudo vim /etc/apache2/sites-enabled/001-cloud9.conf@
```
