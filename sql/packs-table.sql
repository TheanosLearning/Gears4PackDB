create table packs(
  gamertag  varchar(50),
  pack_type varchar(50),
  card_1    varchar(50),
  card_2    varchar(50),
  card_3    varchar(50),
  card_4    varchar(50),
  card_5    varchar(50),
  opened_at timestamp default current_timestamp
  );
