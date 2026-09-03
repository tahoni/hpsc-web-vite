# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository. Full guidance —
project overview, tech stack, build/run commands, environment variables, architecture, code quality & CI, documentation
conventions, roadmap planning, Claude Code skills, testing, git workflow and the release checklist — lives in
[`AGENTS.md`](AGENTS.md), the cross-tool source of truth also followed by other AI coding agents. Claude Code reads
`AGENTS.md` directly; this file exists only because some tooling looks specifically for `CLAUDE.md`, and to hold the
one piece of guidance genuinely specific to Claude Code below.

## Working on Complex Tasks

For multistep or non-trivial tasks, use the TodoWrite tool to create and maintain a todo list, updating it as work
progresses — this keeps progress visible and keeps the work on track, per [`AGENTS.md`](AGENTS.md)'s Git Workflow
Conventions.
