docker compose up 

docker start mysql 

docker exec -it mysql mysql -u root -p 

GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'abc' WITH GRANT OPTION;
FLUSH PRIVILEGES; 

CREATE DATABASE hotel; 