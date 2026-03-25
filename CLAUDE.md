# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **interlang.github.io**, a GitHub Pages site served from the `master` branch. The site is static HTML — no build step, bundler, or framework is involved.

## Development

- To preview locally, open `index.html` in a browser or use any static file server (e.g., `npx serve .`).
- Deployment is automatic: pushing to `master` publishes via GitHub Pages.

## Architecture

Pure static site. All content is served as-is from the repository root — there is no compilation, templating, or asset pipeline.
