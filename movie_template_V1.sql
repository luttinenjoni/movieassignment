-- Active: 1730205098389@@127.0.0.1@5432@postgres@public
CREATE Table movies (
    movie_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    movie_name VARCHAR(100),
    genre_id INT,
    FOREIGN KEY (genre_id) REFERENCES genres(genre_id)
);

CREATE Table genres (
    genre_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    genre_name VARCHAR(100)
);

CREATE Table users (
    users_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    username VARCHAR(100),
    passwords INT,
    date_of_birth DATE
);

CREATE Table movie_review (
    review_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    users_id INT,
    FOREIGN KEY (users_id) REFERENCES users(users_id),
    movie_id INT,
    FOREIGN KEY (movie_id) REFERENCES movies(movie_id),
    stars INT,
    review_text VARCHAR (100)
);