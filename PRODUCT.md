# Smart City Infra Developers — product context

Written 22 Oct 2026 from the brief and `CONTENT.md`. Items marked *(assumption)*
were not supplied by the client and need confirming.

## What this is

A Hyderabad real-estate developer, part of RB Group (founded 2001), led by
Sri Rallabandi Balachary. Sells residential plots and villas in Maheshwaram,
plus completed apartments in Santosh Nagar.

## Who it is for

Families and small investors buying land in Maheshwaram, Ranga Reddy district.
They are spending a significant portion of their savings on a plot they cannot
inspect from a brochure, which makes **proof** the thing the page must deliver:
approval status, who built it, what is already finished, what the site looks
like today.

- *(assumption)* Majority arrive on a phone, on mobile data, often via WhatsApp
  or a Facebook link rather than search.
- *(assumption)* Many are first-time buyers of land rather than apartments, so
  the layout, approval and boundary questions matter more than interior fit-out.

## What success looks like

One conversation started. The visitor calls or messages on WhatsApp with a
project name in mind. Nothing else on the page is worth a conversion.

## Hard truths the design must respect

- Four of the five projects share **the same overview text**, copy-pasted, with
  "Smart City" never swapped out for Maytri Kuteer. Repeating it across cards
  would make the whole page read as filler. Each project gets only what is
  actually true and distinct about it.
- The newest site status dates are **2016–2019**. Presenting them as current
  would be a lie; they are shown with their dates attached.
- The 2025 site and the 2016–2022 site **contradict each other** on what each
  project is (plots vs 160 2BHK apartments vs 120 villas). Section 10 of
  `CONTENT.md` lists these. The page uses the older, more specific descriptions
  and avoids unit counts entirely until the client settles it.
- The enquiry forms on the live site post to `ContactEnquiry.php`, which does
  not exist. Every enquiry since launch has been discarded. This redesign ships
  **no form**; it sends people to WhatsApp, phone and email, all of which work.

## Constraints

- Static HTML/CSS, no framework, no build step. It has to open on 3G.
- Content only from `CONTENT.md`. No invented distances, approvals, counts or
  amenities.
- Photography is the existing site's own project photos, recompressed.
