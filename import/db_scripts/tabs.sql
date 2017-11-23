create table tabs 
(
    id serial primary key,
    window_id integer not null,
    tab_id integer not null,
    image_url varchar(255),
    title varchar(1000) not null,
    url text not null,
    referrer text null,
    last_accessed TIMESTAMP
)