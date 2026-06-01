# MeshWork Website

This is the static website content for MeshWork: homepage, privacy page, and the bilingual user manual.

The website is intentionally maintained as plain HTML/CSS/JS so it can be copied to a standalone Pages repository without a build step. Keep homepage claims aligned with implemented product behavior, and keep the manual aligned with the current app model:

- Workbench is an interaction layer, not a Git repository.
- Private libraries and shared spaces are separate data boundaries.
- Git is optional and binds only to a private library or a shared space.
- AI can suggest and use tools, but user confirmation controls document changes and sharing.

## Local preview

Open `index.html` directly in a browser, or serve this directory with any static file server.

When changing the manual, update Chinese and English pages together when possible.

## Publish

Use the contents of this directory as the root of the standalone website repository, then enable GitHub Pages for that repository.
