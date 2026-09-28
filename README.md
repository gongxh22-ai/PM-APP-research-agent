# Research Agent — Alpha

Evidence-first AI product research workspace. The product is designed around a simple principle: **actually use the product before analyzing it**.

## Alpha loop

Research intent → research plan → real browser task → human takeover / decision gates → timestamped evidence → structured observations → research workspace.

## Core research semantics

- `VERIFIED`: the agent actually executed and verified the behavior.
- `OBSERVED`: the interface exposed the behavior, but the agent did not execute it.
- `ANALYSIS`: interpretation derived from one or more observations.
- L3/L4/AUTH actions pause for human approval or takeover.

## Run the UI

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Browser layer (next integration)

The UI and data model deliberately do not depend on one browser-agent framework. The intended adapter can use Playwright directly for deterministic actions and an agent SDK such as Stagehand for page interpretation/self-healing actions.

Authenticated browser state must be treated as a secret and kept out of git (`playwright/.auth/` is ignored).

## Next implementation slice

1. `BrowserAdapter` interface + Playwright implementation.
2. Real action/evidence event stream into `ResearchSession`.
3. Human takeover pause/resume.
4. Screenshot persistence and Observation generation.
5. Research plan creation and interruption/replanning.
