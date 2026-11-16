export UID := $(shell id -u)
export GID := $(shell id -g)

.PHONY: install up down logs build

install: ## npm install dans le conteneur, node_modules remonte dans ./Backend
	docker compose run --rm backend npm install

build:
	docker compose build

up: build install
	docker compose up -d

down:
	docker compose down

logs:
	docker compose logs -f
