# Fernalion - Luxury E-commerce Website

A modern, luxury fashion e-commerce website built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Luxury-focused UI with elegant animations
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Optimized for speed with Next.js 14
- **Type Safety**: Built with TypeScript for better development experience
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🚀 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS with custom luxury design system
- **Icons**: Lucide React
- **Animations**: CSS animations with Tailwind
- **Fonts**: Playfair Display (luxury) + Inter (modern)

## 📦 Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd fernalion-project
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the development server:**
```bash
npm run dev
```

4. **Open your browser:**
Navigate to `http://localhost:3000`

## 🎨 Design System

### Colors
- **Primary**: Fernalion Purple (#8b47f7 - #56279c)
- **Luxury Accents**: Gold (#D4AF37), Silver (#C0C0C0)
- **Neutrals**: Grays for balance and elegance

### Typography
- **Headings**: Playfair Display (luxury serif)
- **Body**: Inter (modern sans-serif)

### Components
- Custom button styles (`.btn-primary`, `.btn-secondary`)
- Luxury card designs (`.card-luxury`)
- Gradient text effects (`.text-gradient`)

## 📁 Project Structure

```
fernalion-project/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/             # Reusable components
│   ├── layout/            # Layout components
│   │   ├── Header.tsx     # Main navigation
│   │   └── Footer.tsx     # Site footer
│   └── ui/                # UI components
├── styles/                # Style files
│   └── globals.css        # Tailwind imports & custom styles
├── lib/                   # Utility functions
├── public/                # Static assets
└── types/                 # TypeScript type definitions
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Components

1. Create component in appropriate directory under `/components`
2. Use TypeScript for type safety
3. Follow the luxury design system
4. Add proper responsive design

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow the custom color palette
- Implement hover states and animations
- Ensure mobile responsiveness

## 🚀 Deployment

### Netlify (Recommended)

1. **Connect your repository** to Netlify
2. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
3. **Deploy!**

### Vercel

1. **Connect your repository** to Vercel
2. **Auto-deploy** on push to main branch

## 🔮 Future Enhancements

### Phase 1: Core E-commerce
- [ ] Product detail pages
- [ ] Shopping cart functionality
- [ ] User authentication
- [ ] Checkout process

### Phase 2: Content Management
- [ ] Contentful CMS integration
- [ ] Dynamic product data
- [ ] Blog/content pages
- [ ] Admin dashboard

### Phase 3: Advanced Features
- [ ] Payment processing (Stripe)
- [ ] Order management
- [ ] Customer reviews
- [ ] Wishlist functionality
- [ ] Search & filtering

### Phase 4: Marketing & Analytics
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Email marketing
- [ ] Social media integration

## 📞 Support

For questions and support:
- Email: hello@fernalion.lk
- Location: Katunayake, Sri Lanka

## 📄 License

This project is proprietary and confidential.

---

**Built with ❤️ for luxury fashion**
