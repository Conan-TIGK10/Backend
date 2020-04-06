CREATE TABLE IF NOT EXISTS Position (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    x DOUBLE(9, 6) NOT NULL,
    y DOUBLE(9, 6) NOT NULL,
    read_at DATETIME NOT NULL,
    created_at DATETIME
);

CREATE TABLE IF NOT EXISTS Collision (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    positionId INT NOT NULL,
    FOREIGN KEY (positionId) REFERENCES `Position`(id)
);