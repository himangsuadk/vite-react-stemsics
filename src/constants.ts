import { 
  Upload, 
  Bot, 
  Volume2, 
  Eye, 
  Layers, 
  Brain, 
  Zap, 
  Library
} from 'lucide-react';
import { NavItem, Feature, Step, Testimonial, PricingPlan } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
];

export const FEATURES: Feature[] = [
  {
    id: 'upload',
    title: 'Instant Note Conversion',
    description: 'Upload PDFs, docs, or handwritten notes. Our engine converts them into structured study data instantly.',
    icon: Upload,
  },
  {
    id: 'ai-tutor',
    title: 'Personal AI Tutor',
    description: 'Stuck on a concept? Chat with an AI that knows your specific study materials inside and out.',
    icon: Bot,
  },
  {
    id: 'voice',
    title: 'Smart Voice Reading',
    description: 'Listen to your notes on the go. Natural text-to-speech ensures you can study while commuting.',
    icon: Volume2,
  },
  {
    id: 'visualizers',
    title: 'Concept Visualizers',
    description: 'Turn complex text into flowcharts, mind maps, and diagrams automatically to boost visual memory.',
    icon: Eye,
  },
  {
    id: 'flashcards',
    title: 'Auto-Gen Flashcards',
    description: 'We generate quizzes and flashcards from your material so you can start testing yourself immediately.',
    icon: Layers,
  },
  {
    id: 'retention',
    title: 'Retention Engine',
    description: 'Spaced repetition algorithms schedule reviews at the perfect time to maximize long-term memory.',
    icon: Brain,
  },
  {
    id: 'dopamine',
    title: 'Gamified Motivation',
    description: 'Earn XP, streaks, and rewards. Our dopamine-boosting system keeps you addicted to learning.',
    icon: Zap,
  },
  {
    id: 'library',
    title: 'Browser Utils',
    description: 'Access your study tools directly in your browser with our extension. Study anywhere on the web.',
    icon: Library,
  },
];

export const STEPS: Step[] = [
  {
    id: 1,
    title: 'Upload Materials',
    description: 'Drag and drop your lecture slides, textbook PDFs, or messy handwritten notes.',
  },
  {
    id: 2,
    title: 'AI Processing',
    description: 'Stemsics analyzes the content, extracting key concepts, definitions, and relationships.',
  },
  {
    id: 3,
    title: 'Start Learning',
    description: 'Interact with generated quizzes, chat with the tutor, or listen to the audio summary.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Med Student',
    quote: 'Stemsics cut my study time in half. The visualizer tool specifically saved me during anatomy finals.',
    avatar: 'https://picsum.photos/100/100?random=1',
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'Law Student',
    quote: 'The voice reading feature is a game changer. I review cases while at the gym. Absolutely essential.',
    avatar: 'https://picsum.photos/100/100?random=2',
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Computer Science',
    quote: 'I love the gamification. Maintaining my streak actually motivates me to open my notes every day.',
    avatar: 'https://picsum.photos/100/100?random=3',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Free',
    price: '$0',
    features: ['5 Uploads/mo', 'Basic AI Chat', 'Standard Flashcards', 'Mobile Access'],
  },
  {
    name: 'Pro',
    price: '$12',
    features: ['Unlimited Uploads', 'Advanced Voice Mode', 'Visualizer Tools', 'Spaced Repetition', 'Priority Support'],
    isPopular: true,
  },
  {
    name: 'Team',
    price: '$29',
    features: ['Everything in Pro', 'Collaborative Decks', 'Group Analytics', 'Admin Dashboard', 'API Access'],
  },
];
