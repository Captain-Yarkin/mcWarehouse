-- Buildings table
CREATE TABLE buildings (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Materials table
CREATE TABLE materials (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  quantity INT(11) NOT NULL,
  building_id INT(11) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (building_id) REFERENCES buildings(id) ON DELETE CASCADE
);
