# Initial validation

Validated on Windows with Node.js 24.16.0 and installed Microsoft Edge on October 27, 2026.

## Automated checks

- npm test: all three test groups passed. Assertions cover curriculum discovery, path containment, Markdown escaping, session/Origin rejection, source isolation, stdin, errors, active-run rejection, and cancellation.
- npm run check: all 120 lesson packages validated; every JavaScript source parsed and all 96 Node examples executed successfully. Selected deterministic results are also checked against expected output fragments.
- Browser harness: all 24 browser lessons loaded and ran without page errors. Functional assertions covered hide/show and ARIA state, accordions, conditional disabled fields, validation, row add/remove and 0.10+0.20 currency totals, sorting/filtering, unique template IDs, note dialogs, literal HTML-looking text, invoice reconciliation, delegation, Learning Log deletion/import/export, HTML/CSS edits and per-file reset, editable Node support modules, terminal input, and completion persistence.
- Desktop and narrow-viewport screenshots were inspected. Narrow layout did not introduce document horizontal overflow.

The three groups in npm test contain several assertions each. They are integration checks of behavior, not a claim that every possible input has been tested. Learner exercise solutions still need the boundary-case review described in their lessons.

## Repeat browser QA

The optional tests/browser-qa.mjs harness needs Playwright and an installed Edge browser. Playwright is a development-time test tool; it is not a dependency of the runner or course. Make it available in your local Node module environment, or set PLAYWRIGHT_MODULE to its installed module path, then run:

```powershell
node tests/browser-qa.mjs
```

The harness launches its own temporary runner and browser context. It creates temporary test files and a screenshot; it does not use your normal browser profile or saved learner progress. PORT is not required. To use a different installed browser, set QA_BROWSER_CHANNEL to chrome or an appropriate Playwright channel.

## Scope still requiring external validation

Linux and remote GitHub CI were not executed in this session. The included workflow is prepared for Windows and Linux. Enterprise standards, SonarQube, and Snyk workflows are not configured or claimed to have passed. No application was deployed, no package was published, and no real OnBase/MySQL/MongoDB service was contacted.

The course is an initial implementation with small staged examples and integration exercises. Game levels/lives, a combined chart/filter UI, server-side Learning Log accounts, and real external database integrations are explicitly follow-on work, not hidden completed features.
