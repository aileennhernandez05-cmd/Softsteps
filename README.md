# soft steps.

*move with grace* · Pilates grip socks with little bows.

The shop website: plain HTML, CSS and JavaScript, with no build step.

- `index.html`: the page
- `styles.css`: colors, fonts and layout
- `app.js`: the shop (English/Spanish, filters, sizes, bag with bundle pricing, welcome popup, partner form)
- `images/`: sock photos
- `assets/` and `luxe-showcase.html`: the luxe illustration and a showcase section you can add to the page

## See it

Open `index.html` in a browser.

## Put it online (GitHub Pages)

1. Merge this branch into `main`.
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, pick **Deploy from a branch**, then choose `main` and `/ (root)`, and click **Save**.
4. After a minute your site is live at `https://<your-username>.github.io/Softsteps/`.

## Hidden until ready

To keep the site looking finished, these are switched off for now. Each one is marked with a comment in the code.

- **Checkout**: the bag shows "Online checkout opens soon". Connect Shopify or Stripe, then set `checkoutReady: true` at the top of `app.js`.
- **15% welcome popup**: paused, because it doesn't send emails yet. Connect an email list, then set `emailListReady: true` in `app.js`.
- **Reviews** and **Partners** sections, plus their menu links: remove `hidden` in `index.html` once you have real reviews and perks.
- **FAQ washing and shipping answers**, and **footer contact**: fill in the text, then remove `hidden` in `index.html`.
- **Sizes FAQ**: add which shoe sizes fit Small, Medium and Large.
