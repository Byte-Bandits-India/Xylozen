# 🚀 Xylozen Production Deployment Guide

This guide details the complete deployment setup, GitHub Actions CI/CD automation, server requirements, and troubleshooting instructions for **`xylozentech.com`**.

---

## 1. 🖥️ Server & Domain Information

| Parameter | Value |
| :--- | :--- |
| **Domain** | `https://xylozentech.com/` and `https://www.xylozentech.com/` |
| **Server Public IP** | `3.24.216.177` |
| **Server User** | `ec2-user` |
| **Server Working Directory** | `/home/ec2-user/xylozen` |
| **Local SSH Key (Example)** | `~/Downloads/xylozen.pem` |
| **SSH Command** | `ssh -i ~/Downloads/xylozen.pem ec2-user@3.24.216.177` |

---

## 2. 🔐 Step 1: Configure GitHub Repository Secrets

Go to your GitHub repository:
👉 **`https://github.com/Byte-Bandits-India/Xylozen`** -> **Settings** -> **Secrets and variables** -> **Actions** -> **New repository secret**

Add the following required secrets:

| Secret Name | Value | Description |
| :--- | :--- | :--- |
| `EC2_HOST` | `3.24.216.177` | Server Public IPv4 address |
| `EC2_USER` | `ec2-user` | SSH Username on EC2 |
| `EC2_SSH_KEY` | *(Content of `xylozen.pem`)* | The complete private SSH key (including `-----BEGIN RSA PRIVATE KEY-----` and `-----END RSA PRIVATE KEY-----`) |

---

## 3. 🌐 Step 2: Configure DNS Records

In your DNS provider (Cloudflare, GoDaddy, Namecheap, Route53, etc.), configure the following DNS records:

| Type | Name / Host | Target / Value | TTL | Proxy Status |
| :--- | :--- | :--- | :--- | :--- |
| **A** | `@` (or `xylozentech.com`) | `3.24.216.177` | Auto / 300 | DNS Only (or Proxied) |
| **A** | `www` (or `www.xylozentech.com`) | `3.24.216.177` | Auto / 300 | DNS Only (or Proxied) |

> **Note**: Caddy automatically provisions and renews Let's Encrypt / ZeroSSL SSL certificates on port 80 & 443 once DNS points to the server.

---

## 4. ⚡ Step 3: Trigger Automated Deployment

Whenever you push commits to the `main` branch:
```bash
git add .
git commit -m "feat: setup docker containerization and github actions deployment"
git push origin main
```

The GitHub Actions workflow will automatically:
1. Build the multi-stage Next.js standalone container image.
2. Push it to GitHub Container Registry (`ghcr.io/byte-bandits-india/xylozen:latest`).
3. SSH into `3.24.216.177`.
4. Pull the latest image and launch the containers via Docker Compose.
5. Provide automatic zero-downtime container updates and SSL configuration.

You can also trigger a manual deployment anytime from GitHub under the **Actions** tab -> **Build & Deploy to EC2** -> **Run workflow**.

---

## 5. ⚙️ Step 4: Server-side `.env` Secrets

On the EC2 server, the environment file is stored at:
`/home/ec2-user/xylozen/.env`

To edit SMTP passwords or production API URLs directly on the server:
```bash
ssh -i ~/Downloads/xylozen.pem ec2-user@3.24.216.177
cd /home/ec2-user/xylozen
nano .env
```

After updating `.env`, restart the container:
```bash
docker compose up -d
```

---

## 6. 🛠️ Handy Server Management Commands

| Task | Command |
| :--- | :--- |
| **Check running containers** | `cd /home/ec2-user/xylozen && docker compose ps` |
| **View live application logs** | `cd /home/ec2-user/xylozen && docker compose logs -f xylozen-app` |
| **View live reverse proxy logs** | `cd /home/ec2-user/xylozen && docker compose logs -f caddy` |
| **Restart services** | `cd /home/ec2-user/xylozen && docker compose restart` |
| **Inspect resource usage** | `docker stats` |
| **Check server storage** | `df -h` |
| **Prune unused Docker images** | `docker image prune -a -f` |
