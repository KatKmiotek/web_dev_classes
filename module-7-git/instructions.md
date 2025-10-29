# Git for beginners — VS Code GUI workflow

## Quick checklist

- [ ] Install VS Code
- [ ] Install recommended extensions (GitHub Pull Requests and Issues; optional: GitHub Repositories, GitLens)
- [ ] (Optional) Install Git or accept VS Code's prompt to install command line tools
- [ ] Clone the repository using VS Code GUI
- [ ] Open the repo in VS Code and use the Source Control view to Pull updates

---

## 1 — Prerequisites

- VS Code installed. Download: https://code.visualstudio.com/
- Git: VS Code will prompt to install Git command line tools if needed.

Notes: For read-only cloning and pulling from public repositories the GitHub extensions can often handle everything without extra setup. Installing Git makes the experience more reliable.

## 2 — Install recommended extensions (one-time)

1. Open VS Code → Extensions (left sidebar).
2. Search and install:
	- **GitHub Pull Requests and Issues** (official)
	- Optional: **GitHub Repositories** (open repo remotely without cloning)
	- Optional: **GitLens** (helps visualise history)

Signing in to GitHub (optional but helpful)
- Click the Accounts icon (bottom-left) → `Sign in to GitHub` → follow the browser flow. This grants nicer integration but is not required for pulling from this public repo.

## 3 — Clone the repository (GUI; no terminal)

Option A — Recommended (local clone):

1. Command Palette: Cmd+Shift+P → type `Git: Clone` → press Enter.
2. Paste the HTTPS repo URL: `https://github.com/KatKmiotek/web_dev_classes.git` and press Enter.
3. Choose a folder on your computer to save the project.
4. Once cloning finishes, VS Code shows a notification — click **Open** to open the cloned folder.

Option B — Open remote without cloning (read-only):

1. Command Palette → `GitHub: Open Remote Repository...` → enter `KatKmiotek/web_dev_classes` → choose **Open**. This opens the repo in a virtual workspace (no local copy required).

## 4 — Pull updates (GUI)

With the repository open in VS Code:

- Open the Source Control view (left bar) or click the branch/status area in the bottom-left.
- Click the `...` menu in Source Control → choose **Pull** (or **Pull from...** and select `origin/main`).
- Alternatively, click the circular sync icon in the status bar (pulls + pushes).

Command palette alternative: Cmd+Shift+P → `Git: Pull`.

## 5 — Save / Commit before pulling (important)

If you have unsaved changes or uncommitted edits they should either commit or stash before pulling to avoid merge problems.

To commit in VS Code (GUI):

1. Save files.
2. Open Source Control view → type a short commit message in the message box → click the checkmark to commit.

To stash: Cmd+Shift+P → `Git: Stash` → follow the prompt.

