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

## Design direction (rewritten 22 Oct 2026)

The first build landed in the "tasteful AI" cluster: cream ground with a
terracotta accent, one italicised word in the headline, decorative 01/02/03
numerals, Inter and Fraunces. The `avoid-ai-design` scanner flagged all of it
(1 P0, 8 P1). It has been replaced.

**Municipal sanction.** The artefacts this business actually runs on are
approval letters, layout drawings and roadside signboards.

- Ground is a cool plan-print grey-green, deliberately not cream.
- Deep field green carries whole blocks (hero, history, contact, footer)
  rather than appearing as a sliver of accent.
- The violet-blue of a rubber approval stamp is reserved strictly for
  approval badges. Nothing else uses it.
- Libre Franklin for headings, drawn from signage lettering. Public Sans for
  text. Neither is Inter, and neither is from the overused "indie" set.
- No accented headline word, no decorative numerals, no tracked all-caps
  labels, no middle-dot metadata strings, no em dashes anywhere in the copy.

## Open with the client

- **The history dates are unverified.** 2001, through 2012, and 2015 came from
  the brief, not from `CONTENT.md`, which only records that RB Group was
  founded in 2001. Confirm the 2015 date and what happened between 2012 and
  2015 before this goes live.
- **"More than ten projects"** comes from the 2025 site's own "10+ Projects
  Experience" claim. Five are shown in detail because only those five have
  photographs and approval details. Get the remaining names and locations.
- The enquiry forms on the live site have never worked. See above.
