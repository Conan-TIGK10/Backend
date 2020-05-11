CREATE TABLE IF NOT EXISTS `Session` (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    created_at DATETIME
);

CREATE TABLE IF NOT EXISTS Position (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    sessionId INT NOT NULL,
    x DOUBLE(12, 6) NOT NULL,
    y DOUBLE(12, 6) NOT NULL,
    read_at INT UNSIGNED NOT NULL,
    created_at DATETIME,
    rotation INT NOT NULL,
    FOREIGN KEY (sessionId) REFERENCES `Session`(id)
);

CREATE TABLE IF NOT EXISTS Collision (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    sessionId INT NOT NULL,
    positionId INT NOT NULL UNIQUE,
    FOREIGN KEY (positionId) REFERENCES `Position`(id),
    FOREIGN KEY (sessionId) REFERENCES `Session`(id)
);

INSERT INTO `Session`
    (name, created_at) VALUES ('Session One', NOW());

INSERT INTO `Position`
    (sessionId, x, y, rotation, read_at, created_at) VALUES 
    (1, 0, 0, 135, 0, NOW()),
    (1, 1, 1, 90, 1000, NOW()),
    (1, 2, 1, 135, 2000, NOW()),
    (1, 3, 2, 180, 3000, NOW()),
    (1, 3, 3, 180, 4000, NOW()),
    (1, 3, 4, 90, 5000, NOW()),
    (1, 4, 4, 90, 6000, NOW()),
    (1, 5, 4, 90, 7000, NOW()),
    (1, 6, 4, 180, 8000, NOW()),
    (1, 6, 5, 180, 9000, NOW()),
    (1, 6, 6, 180, 10000, NOW()),
    (1, 6, 7, 180, 11000, NOW()),
    (1, 6, 8, 225, 12000, NOW()),
    (1, 5, 9, 270, 13000, NOW()),
    (1, 4, 9, 270, 14000, NOW()),
    (1, 3, 9, 270, 15000, NOW()),
    (1, 2, 9, 270, 16000, NOW()),
    (1, 1, 9, 270, 17000, NOW()),
    (1, 0, 9, 270, 18000, NOW()),
    (1, -1, 9, 0, 19000, NOW()),
    (1, -1, 8, 0, 20000, NOW()),
    (1, -1, 7, 0, 21000, NOW()),
    (1, -1, 6, 0, 22000, NOW()),
    (1, -1, 5, 0, 23000, NOW()),
    (1, -1, 4, 0, 24000, NOW()),
    (1, -1, 3, 315, 25000, NOW()),
    (1, -2, 2, 315, 26000, NOW()),
    (1, -3, 1, 270, 27000, NOW()),
    (1, -4, 1, 270, 28000, NOW()),
    (1, -5, 1, 0, 29500, NOW());

INSERT INTO Collision
    (sessionId, positionId) VALUES
    (1,4),
    (1,9),
    (1,14),
    (1,20),
    (1,23),
    (1,30);