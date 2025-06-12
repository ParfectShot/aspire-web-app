# Aspire Banking App

A modern, responsive banking application built with Next.js, TypeScript, and Tailwind CSS. This application replicates the Aspire banking interface with pixel-perfect design fidelity and comprehensive functionality.

## 🚀 Features

### Core Functionality
- **Card Management**: Add, freeze/unfreeze, and manage debit cards
- **Card Carousel**: Navigate through multiple cards with smooth transitions
- **Transaction History**: View recent transactions with detailed information
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Real-time Updates**: Dynamic state management with Context API
- **Local Storage**: Persistent data storage for cards and balance

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **Next.js App Router**: Modern Next.js architecture
- **Tailwind CSS**: Utility-first styling with custom components
- **Context API**: Centralized state management
- **Custom Hooks**: Reusable logic for media queries and state
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

## 🛠️ Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd aspire-banking-app
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Usage

### Adding a New Card
1. Click the "New card" button in the top right
2. Enter the cardholder name in the modal
3. Click "Add Card" - card number and expiry will be auto-generated

### Managing Cards
- **Navigate Cards**: Use arrow buttons or dots to switch between cards
- **Freeze/Unfreeze**: Click the freeze button in the card actions
- **Show/Hide Numbers**: Toggle card number visibility with the eye icon

### Responsive Design
- **Desktop**: Full sidebar navigation with transaction panel
- **Mobile**: Bottom navigation bar with optimized layout

## 🏗️ Architecture

### File Structure
\`\`\`
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AddCardModal.tsx
│   ├── Card.tsx
│   ├── CardActions.tsx
│   ├── Sidebar.tsx
│   └── TransactionList.tsx
├── contexts/
│   └── AppContext.tsx
├── hooks/
│   └── useMediaQuery.ts
├── lib/
│   └── utils.ts
└── types/
    └── index.ts
\`\`\`

### State Management
The application uses React Context API for global state management:
- **Cards**: Array of card objects with freeze status
- **Transactions**: Transaction history data
- **UI State**: Current card index, show/hide card numbers, active tabs

### Data Persistence
- Cards and balance are automatically saved to localStorage
- Data persists across browser sessions
- Automatic loading on application startup

## 🎨 Design System

### Colors
- **Primary Green**: `#10B981` (Emerald-500)
- **Primary Blue**: `#3B82F6` (Blue-500)
- **Background**: `#F9FAFB` (Gray-50)
- **Card Background**: `#1F2937` (Gray-800)

### Typography
- **Font Family**: Inter
- **Headings**: Semibold weights
- **Body**: Regular weights
- **Monospace**: Card numbers

## 🧪 Testing

Run tests with:
\`\`\`bash
npm test
\`\`\`

For watch mode:
\`\`\`bash
npm run test:watch
\`\`\`

## 🚀 Deployment

### Build for Production
\`\`\`bash
npm run build
npm start
\`\`\`

### Deploy to Vercel
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

## 📋 Requirements Checklist

### Must Have ✅
- [x] TypeScript with proper interfaces
- [x] Modern React framework (Next.js)
- [x] Desktop resolution CSS challenge
- [x] Pixel-perfect design implementation
- [x] High-performance optimized code
- [x] Clean, consistent code style
- [x] Add new card functionality
- [x] Freeze/unfreeze card functionality
- [x] Card carousel with navigation
- [x] Local storage persistence

### Nice to Have ✅
- [x] Responsive mobile design
- [x] Tailwind CSS framework
- [x] Custom UI components
- [x] Form validation
- [x] Accessibility features
- [x] Smooth animations and transitions

## 🔧 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is created for educational and demonstration purposes.
