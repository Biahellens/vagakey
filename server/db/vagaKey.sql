CREATE TABLE `costumers` (
  `id` integer PRIMARY KEY NOT NULL,
  `name` varchar(64) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `email` varchar(64) NOT NULL,
  `phone` varchar(16) NOT NULL,
  `password` varchar(255) NOT NULL,
  `plan` varchar(16) NOT NULL
);

CREATE TABLE `vacancy_maps` (
  `id` integer PRIMARY KEY NOT NULL
);

CREATE TABLE `floors` (
  `id` integer PRIMARY KEY NOT NULL,
  `map_id` integer NOT NULL,
  `floor` integer NOT NULL
);

CREATE TABLE `vacancies` (
  `id` integer PRIMARY KEY NOT NULL,
  `floor_id` integer NOT NULL,
  `location` point NOT NULL
);

CREATE TABLE `vacancy_transactions` (
  `id` integer PRIMARY KEY NOT NULL,
  `vacancy_id` integer NOT NULL,
  `start_timestamp` timestamp NOT NULL,
  `end_timestamp` timestamp NOT NULL
);

CREATE TABLE `tickets` (
  `id` integer PRIMARY KEY NOT NULL,
  `costumer_id` integer NOT NULL,
  `vacancy_id` integer NOT NULL,
  `transaction_id` integer NOT NULL,
  `start_time` timestamp NOT NULL,
  `expiration_time` time NOT NULL
);

ALTER TABLE `vacancies` ADD FOREIGN KEY (`floor_id`) REFERENCES `floors` (`id`);

ALTER TABLE `floors` ADD FOREIGN KEY (`map_id`) REFERENCES `vacancy_maps` (`id`);

ALTER TABLE `vacancy_transactions` ADD FOREIGN KEY (`vacancy_id`) REFERENCES `vacancies` (`id`);

ALTER TABLE `tickets` ADD FOREIGN KEY (`vacancy_id`) REFERENCES `vacancies` (`id`);

ALTER TABLE `vacancy_transactions` ADD FOREIGN KEY (`id`) REFERENCES `tickets` (`transaction_id`);

ALTER TABLE `tickets` ADD FOREIGN KEY (`costumer_id`) REFERENCES `costumers` (`id`);
