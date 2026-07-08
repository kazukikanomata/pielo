---
description: Apply the ui-ux-pro-max design intelligence skill (styles, palettes, fonts, UX guidelines, stack best practices)
---

Read `.agents/skills/ui-ux-pro-max/SKILL.md` in full and follow its workflow:

1. Analyze the request (product type, audience, style keywords, stack).
2. Run `python3 .agents/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system -p "<Project Name>"` to get the design system (colors, typography, effects, anti-patterns). Match `<query>` and `-p` to the request below.
3. Supplement with `--domain <domain>` searches (style, color, typography, ux, chart, etc.) as needed.
4. Add `--stack react` (this project uses React + Vite + Tailwind) for implementation-specific guidance.
5. Run the Quick Reference / Pre-Delivery Checklist from the skill before finishing.

Apply this workflow to the following request:

$ARGUMENTS
