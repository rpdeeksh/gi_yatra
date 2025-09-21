# GI Yatra - Cultural Heritage Travel Planner

![GI Yatra](https://img.shields.io/badge/GI%20Yatra-Cultural%20Heritage-orange)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Folklore Design](https://img.shields.io/badge/Design-Folklore%20Theme-purple)

A travel itinerary planner focused on India's Geographical Indication (GI) products, featuring traditional Indian folklore design aesthetics and cultural storytelling.

## 🎨 Design Philosophy

### Folklore Theme
Our design is inspired by traditional Indian art forms, creating an immersive cultural experience:

- **Color Palette**: Heritage colors inspired by traditional Indian textiles and crafts
- **Typography**: Playfair Display for headings (reminiscent of historical documents) and Inter for body text
- **Patterns**: Mandala, paisley, and geometric patterns as decorative elements
- **Cultural Elements**: Traditional motifs, craft icons, and heritage-inspired gradients

### Color System
```css
/* Heritage Colors */
--saffron: #ff9933          /* India's heritage saffron */
--heritage-gold: #ffd700    /* Traditional gold thread */
--royal-blue: #000080       /* Royal heritage blue */
--peacock-blue: #005f69     /* Peacock feather inspiration */
--lotus-pink: #ff69b4       /* Sacred lotus */
--terracotta: #e2725b       /* Traditional pottery */
--khadi-beige: #f5f5dc      /* Handwoven khadi texture */
--mehendi-green: #355e3b    /* Henna leaf green */
```

## 🚀 Features

### Core Functionality
- **Smart Search**: Location-based GI product discovery with auto-detection
- **AI-Powered Itineraries**: Personalized cultural journey generation
- **Interactive Maps**: Visual exploration of GI products and cultural sites
- **Folklore Cards**: Beautifully designed product showcases with cultural stories
- **Timeline Visualization**: Cultural scroll-inspired itinerary display

### Design Features
- **Cultural Storytelling**: Each component tells a story of heritage
- **Traditional Patterns**: Mandala, paisley, and geometric design elements
- **Heritage Typography**: Traditional Indian design-inspired fonts
- **Immersive Animations**: Subtle movements inspired by Indian art
- **Mobile-First**: Responsive design optimized for all devices

## 📁 Project Structure

```
gi-yatra/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Landing page with hero & features
│   │   ├── search/            # Search results
│   │   ├── gi/[slug]/         # GI product details
│   │   ├── itinerary/[id]/    # Generated itinerary display
│   │   └── explorer/          # GI products explorer
│   ├── components/
│   │   ├── common/            # Shared components
│   │   ├── search/            # Search & filtering
│   │   ├── gi/                # GI product components
│   │   ├── itinerary/         # Timeline & journey planning
│   │   └── maps/              # Interactive mapping
│   ├── hooks/                 # Custom React hooks
│   ├── services/              # API & external services
│   ├── utils/                 # Utilities & types
│   └── styles/
│       ├── globals.css        # Base styles
│       └── folklore.css       # Cultural theme styles
├── public/
│   ├── icons/                 # Cultural icons & symbols
│   ├── images/                # GI product images
│   └── patterns/              # Traditional pattern assets
└── package.json
```

## 🎯 Key Components

### 1. Timeline Component (`/components/itinerary/Timeline.tsx`)
Cultural scroll-inspired itinerary display with:
- **Day Cards**: Folklore-styled daily journey cards
- **Activity Timeline**: Traditional timeline with cultural icons
- **Summary Stats**: Journey impact and statistics
- **Cultural Narratives**: Story-driven descriptions

### 2. GI Cards (`/components/gi/GICard.tsx`)
Heritage-themed product showcase featuring:
- **Cultural Stories**: Traditional narratives for each product
- **Statistical Data**: Export values, artisan numbers, heritage status
- **Visual Design**: Folklore patterns and traditional color schemes
- **Interactive Elements**: Hover effects and expand functionality

### 3. Search Form (`/components/search/SearchForm.tsx`)
Cultural journey planning interface with:
- **Location Intelligence**: Auto-detection and manual input
- **Date Flexibility**: Custom dates or quick options (1-day, 2-day)
- **Cultural Preferences**: Interest-based filtering
- **Generate Button**: AI-powered itinerary creation

### 4. Landing Page (`/app/page.tsx`)
Immersive homepage featuring:
- **Hero Section**: Cultural introduction with statistics
- **Search Interface**: Prominent journey planning
- **Featured GI Products**: Showcase of popular items
- **How It Works**: 3-step cultural journey explanation

## 🎨 Design Specifications

### Typography Hierarchy
```css
/* Headings - Playfair Display (Cultural/Traditional) */
h1: 2.5rem, weight: 600, color: royal-blue
h2: 2rem, weight: 600, color: royal-blue  
h3: 1.75rem, weight: 500, color: royal-blue

/* Body - Inter (Modern/Readable) */
body: 1rem, weight: 400, line-height: 1.6
```

### Component Design Patterns

#### 1. Folklore Cards
- **Border**: 2px solid heritage-gold with 20px border-radius
- **Shadow**: 0 8px 25px rgba(0,0,0,0.1) with hover elevation
- **Header**: 4px heritage-gradient top border
- **Content**: Structured with cultural storytelling sections

#### 2. Cultural Buttons
- **Primary**: Heritage gradient background with white text
- **Secondary**: Cultural gradient with backdrop blur
- **Outline**: Border with heritage-gold, hover fill effect
- **Shapes**: 25px border-radius for premium feel

#### 3. Timeline Design
- **Scroll Aesthetic**: Parchment-like background with decorative borders
- **Medallions**: Circular day numbers with traditional patterns
- **Connection**: Gradient timeline connecting journey points
- **Activities**: Cultural icon-based activity categorization

### Animation Principles
- **Subtle Movement**: 0.2-0.3s transitions for smooth interactions
- **Cultural Elements**: Rotating mandalas, floating icons
- **Hover Effects**: Gentle elevation and color transitions
- **Loading States**: Heritage-themed spinners with rotating colors

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+
- npm 8+

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd gi-yatra

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_MAPS_API_KEY=your_maps_api_key
```

## 🎯 Usage Examples

### Integrating with Backend APIs
```typescript
// Example: Generating itinerary
import { apiService } from '@/services/apiService';

const generateItinerary = async (preferences: TravelPreferences) => {
  try {
    const response = await apiService.generateItinerary(preferences);
    return response.data;
  } catch (error) {
    console.error('Failed to generate itinerary:', error);
  }
};
```

### Using Folklore Components
```tsx
import ItineraryTimeline from '@/components/itinerary/Timeline';
import GICard from '@/components/gi/GICard';

// Display cultural journey
<ItineraryTimeline itinerary={itineraryData} />

// Show GI product
<GICard 
  product={giProduct}
  onExpand={handleExpand}
  isExpanded={false}
/>
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px - Single column, stacked components
- **Tablet**: 768px - 1024px - Adapted grid layouts
- **Desktop**: > 1024px - Full multi-column experience

### Mobile Optimizations
- Touch-friendly button sizes (minimum 44px)
- Simplified navigation with cultural icons
- Compressed timeline view with expand options
- Optimized image loading for cultural visuals

## 🎨 Customization Guide

### Extending Color Palette
Add new heritage colors in `folklore.css`:
```css
:root {
  --new-heritage-color: #colorcode;
  --new-gradient: linear-gradient(135deg, color1, color2);
}
```

### Creating New Folklore Components
Follow the established pattern:
```tsx
const NewComponent = () => (
  <div className="folklore-component">
    <div className="heritage-header">
      <h3 className="heritage-heading">Title</h3>
      <div className="mandala-decoration"></div>
    </div>
    <div className="cultural-content">
      {/* Component content */}
    </div>
  </div>
);
```

## 🎯 Performance Considerations

### Optimization Strategies
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Dynamic imports for heavy components
- **CSS Optimization**: Critical CSS inlining for folklore styles
- **Bundle Analysis**: Regular bundle size monitoring

### Cultural Asset Management
- **Pattern SVGs**: Optimized traditional pattern graphics
- **Icon Fonts**: Custom icon set for cultural symbols
- **Image Compression**: WebP format for heritage photographs

## 🤝 Contributing

### Design Guidelines
1. **Cultural Sensitivity**: Ensure respectful representation of Indian heritage
2. **Accessibility**: Maintain WCAG 2.1 AA compliance
3. **Performance**: Keep bundle size minimal while maintaining richness
4. **Consistency**: Follow established folklore design patterns

### Code Style
- Use TypeScript for type safety
- Follow React best practices
- Maintain component modularity
- Document cultural design decisions

## 📄 License

MIT License - Feel free to use for cultural and educational purposes.

## 🙏 Acknowledgments

- **Indian Artisans**: For preserving traditional crafts and knowledge
- **GI Registry**: For documenting India's geographical indications
- **Cultural Heritage**: Inspired by centuries of Indian artistic traditions

---

**Built with ❤️ for preserving and celebrating India's rich cultural heritage**
