create table tabs 
(
    id serial primary key,
    window_id integer,
    image_url varchar(255),
    last_accessed TIMESTAMP
)