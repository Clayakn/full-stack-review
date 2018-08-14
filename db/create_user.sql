INSERT INTO users 
(auth0_id, email, name, picture_url)
VALUES
($1,$2,$3,$4)
RETURNING *;