# Kennedy Yard Services Website

A clean, professional 2-page website for Kennedy Yard Services built with Next.js and Tailwind CSS.

## Features

- **Modern Design**: Professional aesthetic using John Deere green (#367C2B) and yellow (#FFD700) color scheme
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Two Pages**:
  - **Home**: Hero section, about, services grid, testimonials, and call-to-action
  - **Contact**: Contact form, business information, and map placeholder
- **Navigation**: Sticky header with "Get a Quote" CTA button
- **Optimized**: Built with Next.js 14 and Tailwind CSS for optimal performance

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React**: UI library

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd kennedy-yard-services
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## Building for Production

To create an optimized production build:

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. **Sign up for Vercel**: Go to [vercel.com](https://vercel.com) and sign up (it's free)

2. **Install Vercel CLI**:
```bash
npm install -g vercel
```

3. **Deploy**:
```bash
vercel
```

4. **Connect Custom Domain**:
   - Go to your Vercel dashboard
   - Select your project
   - Go to "Settings" → "Domains"
   - Add your custom domain (e.g., kennedyyardservices.com)
   - Follow the DNS configuration instructions

### Deploy to Netlify

1. **Sign up for Netlify**: Go to [netlify.com](https://netlify.com) and sign up

2. **Install Netlify CLI**:
```bash
npm install -g netlify-cli
```

3. **Build the project**:
```bash
npm run build
```

4. **Deploy**:
```bash
netlify deploy --prod
```

5. **Connect Custom Domain**:
   - Go to your Netlify dashboard
   - Select your site
   - Go to "Domain settings"
   - Add your custom domain
   - Configure DNS settings as instructed

## Customization Guide

### Updating Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  'jd-green': '#367C2B',  // Change this
  'jd-yellow': '#FFD700',  // Change this
}
```

### Updating Text Content

- **Home Page**: Edit `app/page.tsx`
- **Contact Page**: Edit `app/contact/page.tsx`
- **Navigation**: Edit `components/Navigation.tsx`
- **Footer**: Edit `components/Footer.tsx`

### Adding a Logo

1. Place your logo file (PNG format recommended) in the `public` folder
2. Name it `logo.png`
3. Update `components/Navigation.tsx` to use the actual logo image instead of the "K" placeholder

### Changing Fonts

Edit `app/globals.css` and update the Google Fonts import:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700;800&display=swap');
```

Then update `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['YourFont', 'system-ui', 'sans-serif'],
}
```

### Adding New Pages

1. Create a new folder in the `app` directory (e.g., `app/services`)
2. Create a `page.tsx` file inside it
3. Add navigation link in `components/Navigation.tsx`

Example structure:
```
app/
  services/
    page.tsx
```

### Updating Contact Information

Edit the contact details in:
- `app/contact/page.tsx` (Contact page)
- `components/Footer.tsx` (Footer section)

### Adding Google Maps

Replace the map placeholder in `app/contact/page.tsx` with an embedded Google Maps iframe:

```html
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  width="100%"
  height="320"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
></iframe>
```

To get your embed code:
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your address
3. Click "Share" → "Embed a map"
4. Copy the iframe code

## Folder Structure

```
kennedy-yard-services/
├── app/
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── Footer.tsx            # Footer component
│   └── Navigation.tsx        # Navigation component
├── public/
│   └── .gitkeep              # Placeholder (add logo.png here)
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## Form Integration

The contact form currently logs data to the console. To make it functional:

1. **Use a form service** (easiest):
   - [Formspree](https://formspree.io)
   - [Netlify Forms](https://www.netlify.com/products/forms/)
   - [Web3Forms](https://web3forms.com)

2. **Build a backend API**:
   - Create API route in `app/api/contact/route.ts`
   - Use services like SendGrid or Mailgun to send emails

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Kennedy Yard Services. All Rights Reserved.

## Support

For questions or issues, please contact the development team.

