.PHONY: help dev build lint docker-build docker-run docker-stop ssh server-logs server-status server-restart deploy-push

# Default target: show help
help:
	@echo "================================================================="
	@echo "🛠️  XYLOZEN WEBSITE - AUTOMATION & DEPLOYMENT COMMANDS"
	@echo "================================================================="
	@echo "  make dev            - Start local Next.js development server"
	@echo "  make build          - Build production standalone bundle locally"
	@echo "  make lint           - Run Next.js linter"
	@echo "  make docker-build   - Build Docker container image locally"
	@echo "  make docker-run     - Run application via Docker Compose locally"
	@echo "  make docker-stop    - Stop local Docker Compose services"
	@echo "  make deploy-push    - Stage, commit, and push changes to trigger CI/CD"
	@echo "  make ssh            - SSH connect to the EC2 production server"
	@echo "  make server-status  - View live container status on EC2"
	@echo "  make server-logs    - Stream live container logs on EC2"
	@echo "  make server-restart - Restart all Docker services on EC2"
	@echo "================================================================="

# Local Development
dev:
	npm run dev

build:
	npm run build

lint:
	npm run lint

# Local Docker
docker-build:
	docker build -t xylozen-website:latest .

docker-run:
	docker compose up -d

docker-stop:
	docker compose down

# Git CI/CD deployment shortcut
deploy-push:
	@read -p "Enter commit message: " msg; \
	git add .; \
	git commit -m "$$msg"; \
	git push origin main

# Server Operations (EC2)
SERVER_IP ?= 3.24.216.177
SERVER_USER ?= ec2-user
SSH_KEY ?= ~/Downloads/xylozen.pem

ssh:
	ssh -i $(SSH_KEY) $(SERVER_USER)@$(SERVER_IP)

server-status:
	ssh -i $(SSH_KEY) $(SERVER_USER)@$(SERVER_IP) "cd /home/$(SERVER_USER)/xylozen && docker compose ps"

server-logs:
	ssh -i $(SSH_KEY) $(SERVER_USER)@$(SERVER_IP) "cd /home/$(SERVER_USER)/xylozen && docker compose logs -f"

server-restart:
	ssh -i $(SSH_KEY) $(SERVER_USER)@$(SERVER_IP) "cd /home/$(SERVER_USER)/xylozen && docker compose restart"
