# Smart City Infra Developers

Website for Smart City Infra Developers, a real estate developer in Hyderabad (smartcityinfradevelopers.com).

Static HTML, CSS and jQuery. No build step: the files in this repository are the website.

## Run locally

    python3 -m http.server 8080

Then open http://localhost:8080.

## Structure

| Path | Contents |
|---|---|
| `index.html` | Home: banner slider, introduction, why choose us, project overview |
| `about.html`, `contact.html` | Company profile; office details and WhatsApp enquiry form |
| `completed-projects.html`, `running-projects.html`, `future-projects.html` | Project listings |
| `lakeview.html`, `parkview.html`, `parkview1.html`, `smartcity.html`, `smartcityphase-ll.html`, `maytrikuteer.html`, `srisaitowers.html` | Project detail pages |
| `gallery.html`, `videos.html`, `news.html`, `salient-features.html` | Media and feature pages |
| `css/` | Theme styles. `css/merged.css` holds the newer sections (why choose us, enquiry form, WhatsApp button). |
| `js/`, `assets/` | jQuery, Bootstrap, slider and icon libraries |
| `img/`, `images/`, `media/` | Photos, banners, logos |
| `files/` | Downloadable brochure (PDF) |

## Contact details used on the site

Update these in every page if they change:

- Phone: 040 - 4222 1039, 99084 20985
- WhatsApp: +91 99084 20985 (floating button and contact form)
- Email: smartcityinfradeveloper@gmail.com
- Facebook: facebook.com/SmartCityInfraDevelopers

## Known gaps

The original site was rebuilt from the Internet Archive after the hosting was lost. Some project
gallery photos were never archived and show as missing images until replacements are added to `img/`.
