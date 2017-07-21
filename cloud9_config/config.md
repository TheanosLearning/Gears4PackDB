> Go back to [main](https://github.com/TheanosLearning/Gears4PackDB) page.
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
```ruby
sudo vim /etc/apache2/sites-enabled/000-default.conf
sudo vim /etc/apache2/sites-enabled/001-cloud9.conf
```
by appending the following header rules to the [virtualhost config](https://benjaminhorn.io/code/setting-cors-cross-origin-resource-sharing-on-apache-with-correct-response-headers-allowing-everything-through/).
```xml
</VirtualHost>

       # stuff from before...
       
       # Always set these headers.
       Header always set Access-Control-Allow-Origin "*"
       Header always set Access-Control-Allow-Methods "POST, GET, OPTIONS, DELETE, PUT"
       Header always set Access-Control-Max-Age "1000"
       Header always set Access-Control-Allow-Headers "x-requested-with, Content-Type, origin, authorization, accept, client-security-token"
       
       # Added a rewrite to respond with a 200 SUCCESS on every OPTIONS request.
       RewriteEngine On
       RewriteCond %{REQUEST_METHOD} OPTIONS
       RewriteRule ^(.*)$ $1 [R=200,L]
       
</VirtualHost>
```
4. Enable `mod_headers` module so that apache will [recognize](http://blog.adin.pro/2013-09-09/invalid-command-header-perhaps-misspelled-or-defined-by-a-module-not-included-in-the-server-configuration/) header rules
```bash
sudo a2enmode headers
service apache2 restart
```
