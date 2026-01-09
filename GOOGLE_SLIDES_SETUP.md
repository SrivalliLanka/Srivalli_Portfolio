# How to Make Google Slides Publicly Viewable

## Step 1: Publish Your Google Slides to the Web

1. Open your Google Slides presentation
2. Click **File** → **Share** → **Publish to web**
3. In the popup:
   - Select **Embed** tab
   - Choose **Publish** (not just "Link")
   - Make sure "Require viewers to sign in with their Google account" is **UNCHECKED**
   - Click **Publish**
4. Copy the embed URL that appears

## Step 2: Update Sharing Settings

1. Click the **Share** button (top right)
2. Under "Get link", click **Change**
3. Select **Anyone with the link** can view
4. Click **Done**

## Step 3: Use the Correct Embed URL Format

The embed URL should look like:
```
https://docs.google.com/presentation/d/e/PRESENTATION_ID/pub?start=false&loop=false&delayms=3000
```

OR the simpler format:
```
https://docs.google.com/presentation/d/PRESENTATION_ID/preview
```

## Alternative: Use Google Slides Embed Code

If you get an iframe embed code, extract the URL from the `src` attribute:
```html
<iframe src="https://docs.google.com/presentation/d/e/PRESENTATION_ID/embed?start=false&loop=false&delayms=3000" ...></iframe>
```

Use the URL from the `src` attribute.

## Important Notes:

- The presentation must be **published to the web** (not just shared)
- Sharing settings must allow **"Anyone with the link"** to view
- The URL should end with `/preview` or `/embed` (not `/edit`)
- Remove any authentication parameters from the URL

