# Adams County Information

A searchable, filterable directory of meaningful links across **Adams County, Ohio** (county seat: West Union) — government, education, health, business, community, recreation, and news.

## What's inside

```
AdamsCountyInformation/
├── react-app/                 # the Vite + React browsing app
│   └── src/data/links.js      # single source of truth for all links
├── data/
│   └── adams_county_links.csv   # the same directory as a spreadsheet
└── README.md
```

## Run it

```bash
cd react-app
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173/AdamsCountyInformation/).

## Add or edit links

Edit `react-app/src/data/links.js`. Keep `data/adams_county_links.csv` in sync if you rely on the spreadsheet.

## Notes

- Links were researched and reviewed on July 11, 2026 (18 links).
- This is a community reference tool, not an official government site.
