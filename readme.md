# MaxRoom Chrome Extension

A Chrome extension that talks to APIs on [MaxRoom Next.js Backend](https://github.com/MaxRoomOrg/maxroom).

- extracts HTML content from active page
- communicates with service workers
- has a popup interface for UI

## Setup

1. Install dependencies

   ```bash
   pnpm install
   ```

2. Build the extension as a zip file

   ```bash
   pnpm run build:zip
   ```

## Installation

1. Clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension directory
