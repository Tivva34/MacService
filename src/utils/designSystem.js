/**
 * Premium Design System
 * Tailwind class tokens for consistent, high-end UI
 */

export const colors = {
  // Primary backgrounds
  bgPrimary: 'bg-zinc-950',
  bgSecondary: 'bg-zinc-900',
  bgTertiary: 'bg-zinc-800',

  // Card backgrounds (glassmorphism)
  cardBg: 'bg-white/5',
  cardBgHover: 'bg-white/8',
  cardBgAlt: 'bg-zinc-900/40',

  // Text colors
  textPrimary: 'text-black',
  textSecondary: 'text-gray-700',
  textTertiary: 'text-gray-600',
  textMuted: 'text-gray-500',

  // Borders
  border: 'border-black/10',
  borderLight: 'border-black/5',
  borderDark: 'border-black/15',
};

export const typography = {
  // Hero headings
  h1: 'text-7xl md:text-8xl font-bold tracking-tight leading-[1.1]',
  h2: 'text-5xl md:text-6xl font-bold tracking-tight leading-[1.2]',
  h3: 'text-3xl md:text-4xl font-bold tracking-tight leading-[1.3]',
  h4: 'text-2xl md:text-3xl font-semibold leading-[1.3]',

  // Body text
  body: 'text-base leading-relaxed',
  bodyLarge: 'text-lg leading-relaxed',
  bodySmall: 'text-sm leading-relaxed',

  // Special
  label: 'text-xs font-semibold tracking-wider uppercase',
  caption: 'text-xs text-zinc-500',
};

export const spacing = {
  // Section spacing
  sectionPy: 'py-32',
  sectionPyLarge: 'py-40',
  sectionPx: 'px-6',

  // Container
  container: 'max-w-7xl mx-auto',
  containerSmall: 'max-w-5xl mx-auto',
  containerLarge: 'max-w-full',

  // Gaps
  gapLarge: 'gap-12',
  gapMedium: 'gap-8',
  gapSmall: 'gap-4',
};

export const effects = {
  // Backdrop blur for cards
  blur: 'backdrop-blur-xl',
  blurMedium: 'backdrop-blur-lg',
  blurLight: 'backdrop-blur-md',

  shadowLarge: 'shadow-2xl',
  shadowMedium: 'shadow-lg',

  // Transitions
  transitionSmooth: 'transition-all duration-700 ease-out',
  transitionFast: 'transition-all duration-300 ease-out',

  // Ring effects
  ringPrimary: 'ring-1 ring-white/10',
};

export const components = {
  // Button styles
  buttonPrimary: `px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition-all duration-300 hover:shadow-lg hover:shadow-black/20`,
  buttonSecondary: `px-8 py-3 border border-black/20 text-black font-semibold rounded-lg hover:bg-black/5 hover:border-black/40 transition-all duration-300`,
  buttonGhost: `px-8 py-3 text-black font-semibold rounded-lg hover:bg-black/5 transition-all duration-300`,

  // Card styles
  card: `${colors.cardBg} ${effects.blur} ${colors.border} border rounded-xl p-6 md:p-8 transition-all duration-500 hover:${colors.cardBgHover}`,
  cardAlt: `${colors.cardBgAlt} ${effects.blur} ${colors.border} border rounded-xl p-6 md:p-8 transition-all duration-500`,

  // Input styles
  input: `w-full px-4 py-3 bg-white/20 border ${colors.border} text-black placeholder-gray-500 rounded-lg focus:outline-none focus:bg-white/30 focus:border-black/40 transition-all duration-300`,

  // Badge
  badge: `inline-block px-3 py-1 ${colors.textTertiary} ${typography.label} bg-black/5 border ${colors.border} rounded-full`,
};

export const responsive = {
  // Mobile-first breakpoints
  containerMobile: 'px-6',
  containerTablet: 'md:px-8',
  containerDesktop: 'lg:px-12',
};
