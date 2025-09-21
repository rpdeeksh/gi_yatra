# GI Yatra Design System

## 🎨 Visual Identity

### Brand Colors

#### Primary Heritage Palette
```css
/* Sacred & Royal Colors */
--saffron: #ff9933          /* India's heritage saffron - Primary brand color */
--heritage-gold: #ffd700    /* Traditional gold thread - Accent color */
--royal-blue: #000080       /* Royal heritage blue - Text & borders */
--indigo: #4b0082          /* Deep indigo - Dark UI elements */

/* Nature-Inspired Colors */
--peacock-blue: #005f69     /* Peacock feather - Secondary actions */
--lotus-pink: #ff69b4       /* Sacred lotus - Highlights */
--mehendi-green: #355e3b    /* Henna leaf - Success states */
--emerald: #50c878          /* Emerald green - Accent elements */

/* Craft & Material Colors */
--terracotta: #e2725b       /* Traditional pottery - Warm accents */
--khadi-beige: #f5f5dc      /* Handwoven khadi - Background */
--sandalwood: #c19a6b       /* Sandalwood brown - Warm neutrals */
--silver-thread: #c0c0c0    /* Metallic thread - Borders */
```

#### Regional State Colors
```css
/* State-Specific Palettes for GI Products */
--rajasthani-red: #c41e3a   /* Rajasthan crafts */
--kashmiri-saffron: #ff8c00 /* Kashmir products */
--kerala-gold: #ffd700      /* Kerala specialties */
--punjabi-mustard: #ffdb58  /* Punjab agriculture */
--bengali-white: #f8f8ff    /* West Bengal textiles */
```

### Typography System

#### Font Families
```css
/* Primary: Cultural Headers */
font-family: 'Playfair Display', serif;
/* Usage: Headlines, titles, cultural emphasis */

/* Secondary: Modern Readability */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
/* Usage: Body text, UI elements, data */
```

#### Type Scale & Hierarchy
```css
/* Display - Hero Titles */
.display-large { font-size: 4rem; font-weight: 700; } /* Hero main title */
.display-medium { font-size: 3rem; font-weight: 600; } /* Section heroes */

/* Headlines - Page Titles */
.headline-1 { font-size: 2.5rem; font-weight: 600; } /* Page titles */
.headline-2 { font-size: 2rem; font-weight: 600; }   /* Section titles */
.headline-3 { font-size: 1.75rem; font-weight: 500; } /* Subsections */

/* Body Text */
.body-large { font-size: 1.25rem; line-height: 1.6; } /* Lead paragraphs */
.body-medium { font-size: 1rem; line-height: 1.6; }   /* Regular text */
.body-small { font-size: 0.875rem; line-height: 1.5; } /* Captions */

/* UI Text */
.label-large { font-size: 1rem; font-weight: 500; }   /* Button labels */
.label-medium { font-size: 0.875rem; font-weight: 500; } /* Form labels */
.label-small { font-size: 0.75rem; font-weight: 400; }  /* Meta text */
```

## 🧩 Component Library

### 1. Folklore Cards

#### Standard GI Product Card
```css
.folklore-card {
  background: white;
  border-radius: 20px;
  border: 2px solid var(--heritage-gold);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.folklore-card::before {
  content: '';
  height: 4px;
  background: linear-gradient(90deg, var(--saffron), var(--heritage-gold));
}
```

#### Usage Guidelines
- **Content**: Always include cultural story/narrative
- **Images**: Use authentic photography of artisans/products
- **Stats**: Display meaningful data (export value, artisan count)
- **Actions**: Provide clear next steps (view details, book experience)

### 2. Cultural Buttons

#### Primary Heritage Button
```css
.btn-heritage {
  background: linear-gradient(135deg, var(--saffron), var(--heritage-gold));
  color: white;
  border: none;
  border-radius: 25px;
  padding: 0.75rem 2rem;
  font-weight: 600;
  text-transform: none; /* Preserve cultural names */
  box-shadow: 0 4px 15px rgba(255, 153, 51, 0.3);
}
```

#### Button Hierarchy
- **Primary**: Heritage gradient - Main actions (Generate Journey, Book Experience)
- **Secondary**: Cultural gradient - Supporting actions (View Details, Share)
- **Outline**: Border with heritage colors - Tertiary actions (Cancel, Back)

### 3. Timeline Components

#### Cultural Scroll Timeline
```css
.itinerary-scroll {
  background: linear-gradient(135deg, #fefefe, var(--khadi-beige));
  border-radius: 20px;
  padding: 2rem;
  position: relative;
}

.itinerary-scroll::before {
  content: '';
  height: 6px;
  background: linear-gradient(90deg, 
    var(--saffron), var(--heritage-gold), 
    var(--peacock-blue), var(--emerald), var(--lotus-pink)
  );
}
```

#### Day Medallions
```css
.day-medallion {
  width: 50px;
  height: 50px;
  background: var(--heritage-gradient);
  border-radius: 50%;
  position: absolute;
  top: -25px;
  box-shadow: 0 4px 15px rgba(255, 153, 51, 0.3);
}
```

### 4. Search & Input Components

#### Cultural Search Form
```css
.cultural-search-form {
  background: linear-gradient(135deg, white, var(--khadi-beige));
  border: 2px solid var(--heritage-gold);
  border-radius: 20px;
  padding: 2rem;
}

.form-input {
  border: 2px solid var(--heritage-gold);
  border-radius: 10px;
  padding: 1rem;
  transition: border-color 0.2s ease;
}

.form-input:focus {
  border-color: var(--peacock-blue);
  box-shadow: 0 0 0 3px rgba(0, 95, 105, 0.1);
}
```

## 📐 Layout System

### Grid Structure
```css
/* Container Sizes */
.container { max-width: 1280px; margin: 0 auto; padding: 0 1rem; }

/* Grid Layouts */
.gi-grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); 
  gap: 2rem; 
}

.feature-grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
  gap: 2rem; 
}
```

### Spacing Scale
```css
/* Consistent spacing based on 0.25rem (4px) base */
.space-1 { margin: 0.25rem; }   /* 4px */
.space-2 { margin: 0.5rem; }    /* 8px */
.space-3 { margin: 0.75rem; }   /* 12px */
.space-4 { margin: 1rem; }      /* 16px */
.space-6 { margin: 1.5rem; }    /* 24px */
.space-8 { margin: 2rem; }      /* 32px */
.space-12 { margin: 3rem; }     /* 48px */
.space-16 { margin: 4rem; }     /* 64px */
```

## 🎭 Cultural Patterns & Decorations

### Mandala Patterns
```css
.mandala-pattern {
  background: radial-gradient(circle, var(--heritage-gold) 2px, transparent 2px),
              radial-gradient(circle at 50% 50%, transparent 20%, var(--heritage-gold) 21%);
  background-size: 20px 20px, 40px 40px;
  border-radius: 50%;
  opacity: 0.6;
}
```

### Paisley Decorations
```css
.paisley-pattern {
  background: repeating-conic-gradient(
    from 0deg, 
    var(--heritage-gold) 0deg 10deg, 
    transparent 10deg 20deg
  );
  border-radius: 50%;
  opacity: 0.6;
}
```

### Border Patterns
```css
.heritage-border {
  border: 2px solid var(--heritage-gold);
  position: relative;
}

.heritage-border::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--saffron), var(--heritage-gold));
}
```

## 🎬 Animation Principles

### Cultural Motion
```css
/* Gentle floating animation for cultural icons */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* Rotating mandala decoration */
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Orbiting craft icons */
@keyframes orbit {
  0% { transform: rotate(0deg) translateX(120px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
}
```

### Transition Timing
```css
/* Standard easing for cultural feel */
.cultural-transition {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover states */
.folklore-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
}
```

## 📱 Responsive Guidelines

### Breakpoint Strategy
```css
/* Mobile First Approach */
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Large Desktop */ }
```

### Component Adaptations

#### Mobile (< 768px)
- Single column layouts
- Stacked navigation
- Simplified timelines
- Touch-optimized buttons (min 44px)
- Compressed cards with essential info

#### Tablet (768px - 1024px)
- Two-column grids
- Adapted navigation
- Partial timeline expansion
- Medium-sized touch targets

#### Desktop (> 1024px)
- Multi-column layouts
- Full navigation
- Expanded timeline view
- Hover interactions
- Rich cultural decorations

## 🎯 Content Guidelines

### Cultural Storytelling
- **Narrative Voice**: First-person artisan perspectives
- **Historical Context**: Brief heritage background
- **Cultural Significance**: Why this matters to Indian culture
- **Modern Relevance**: Contemporary importance

### Photography Style
- **Authentic**: Real artisans and workshops
- **Warm Lighting**: Golden hour preferred
- **Close-ups**: Detail shots of craftsmanship
- **Environmental**: Context of creation space
- **Respectful**: Dignified representation

### Iconography
- **Cultural Symbols**: Lotus, peacock, mandala motifs
- **Craft Icons**: Pottery, weaving, painting tools
- **Regional Elements**: State-specific symbols
- **Modern Clarity**: Clear, recognizable symbols

## ♿ Accessibility Standards

### Color Contrast
- **Text on Background**: Minimum 4.5:1 ratio
- **Interactive Elements**: Minimum 3:1 ratio
- **Cultural Colors**: Tested against WCAG AA standards

### Focus Management
```css
/* Visible focus indicators */
*:focus {
  outline: 2px solid var(--heritage-gold);
  outline-offset: 2px;
}

/* Skip to content for screen readers */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--royal-blue);
  color: white;
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
}
```

### Screen Reader Support
- **Semantic HTML**: Proper heading hierarchy
- **Alt Text**: Descriptive image descriptions
- **ARIA Labels**: Clear action descriptions
- **Cultural Context**: Explain cultural significance

## 🔧 Implementation Notes

### CSS Custom Properties
Use CSS variables for consistent theming:
```css
:root {
  --primary-color: var(--saffron);
  --secondary-color: var(--heritage-gold);
  --text-color: var(--royal-blue);
  --background-color: var(--khadi-beige);
}
```

### Component Naming Convention
```css
/* Block Element Modifier (BEM) with Cultural Context */
.folklore-card { }                    /* Block */
.folklore-card__header { }            /* Element */
.folklore-card--featured { }          /* Modifier */
.folklore-card__heritage-badge { }    /* Cultural Element */
```

### Performance Considerations
- **Critical CSS**: Inline folklore theme essentials
- **Lazy Loading**: Cultural patterns and decorations
- **Optimized Assets**: Compressed heritage images
- **Progressive Enhancement**: Core functionality first

---

This design system celebrates India's rich cultural heritage while providing a modern, accessible user experience. Every element is thoughtfully crafted to honor traditional craftsmanship while embracing contemporary web standards.
