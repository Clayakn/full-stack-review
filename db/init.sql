DROP TABLE IF EXISTS users CASCADE; 
DROP TABLE IF EXISTS words; 

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    auth0_id TEXT UNIQUE NOT NULL,
    email TEXT NOT NULL,
    name TEXT NOT NULL,
    picture_url TEXT NOT NULL
);

CREATE TABLE words (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (id),
    text TEXT
)