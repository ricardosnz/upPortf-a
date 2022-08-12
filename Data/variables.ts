
// import Glide from '@glidejs/glide';
addEventListener('load', () => {
  // new Glide('.glide').mount()
  let glide = new Glide('.scrol', {
    type: 'slider',
    startAt: 1, // indice que empieza
    perView: 1, // cuantos slides se muestran
    gap: 5, // distancia entre cada uno
    keyboard: true,
    animationDuration: 1000,
    // focusAt: 1,
    peek: {
      before: 0,
      after: 10,
    },
    breakpoints: {
      800: {
        perView: 3,
      },
      480: {
        perView: 1,
      },
    },
  });
  glide.mount();
});


// leading-3	line-height: .75rem; /* 12px */
// leading-4	line-height: 1rem; /* 16px */
// leading-5	line-height: 1.25rem; /* 20px */
// leading-6	line-height: 1.5rem; /* 24px */
// leading-7	line-height: 1.75rem; /* 28px */
// leading-8	line-height: 2rem; /* 32px */
// leading-9	line-height: 2.25rem; /* 36px */
// leading-10	line-height: 2.5rem; /* 40px */


// --tw-border-spacing-x: 0;
// --tw-border-spacing-y: 0;
// --tw-translate-x: 0;
// --tw-translate-y: 0;
// --tw-rotate: 0;
// --tw-skew-x: 0;
// --tw-skew-y: 0;
// --tw-scale-x: 1;
// --tw-scale-y: 1;
// --tw-pan-x: ;
// --tw-pan-y: ;
// --tw-pinch-zoom: ;
// --tw-scroll-snap-strictness: proximity;
// --tw-ordinal: ;
// --tw-slashed-zero: ;
// --tw-numeric-figure: ;
// --tw-numeric-spacing: ;
// --tw-numeric-fraction: ;
// --tw-ring-inset: ;
// --tw-ring-offset-width: 0px;
// --tw-ring-offset-color: #fff;
// --tw-ring-color: rgb(59 130 246 / .5);
// --tw-ring-offset-shadow: 0 0 #0000;
// --tw-ring-shadow: 0 0 #0000;
// --tw-shadow: 0 0 #0000;
// --tw-shadow-colored: 0 0 #0000;
// --tw-blur: ;
// --tw-brightness: ;
// --tw-contrast: ;
// --tw-grayscale: ;
// --tw-hue-rotate: ;
// --tw-invert: ;
// --tw-saturate: ;
// --tw-sepia: ;
// --tw-drop-shadow: ;
// --tw-backdrop-blur: ;
// --tw-backdrop-brightness: ;
// --tw-backdrop-contrast: ;
// --tw-backdrop-grayscale: ;
// --tw-backdrop-hue-rotate: ;
// --tw-backdrop-invert: ;
// --tw-backdrop-opacity: ;
// --tw-backdrop-saturate: ;
// --tw-backdrop-sepia: ;


// f-sz(2x: )

// font-size: 16px;
// --geist-space: 4px;
// --geist-space-2x: 8px;
// --geist-space-4x: 16px;
// --geist-space-8x: 32px;
// --geist-space-16x: 64px;
// --geist-space-24x: 96px;
// --geist-space-32x: 128px;
// --geist-space-48x: 192px;
// --geist-space-64x: 256px;
// --geist-space-small: 32px;
// --geist-space-medium: 40px;
// --geist-space-large: 48px;
// --geist-space-gap: 24px;
// --geist-space-gap-half: 12px;
// --geist-space-gap-quarter: var(--geist-space-2x);
// --geist-gap: var(--geist-space-gap);
// --geist-gap-half: var(--geist-space-gap-half);
// --geist-gap-quarter: var(--geist-space-gap-quarter);
// --geist-gap-double: var(--geist-space-large);
// --geist-gap-section: var(--geist-space-small);
// --geist-space-negative: -4px;
// --geist-space-2x-negative: -8px;
// --geist-space-4x-negative: -16px;
// --geist-space-8x-negative: -32px;
// --geist-space-16x-negative: -64px;
// --geist-space-24x-negative: -96px;
// --geist-space-32x-negative: -128px;
// --geist-space-48x-negative: -192px;
// --geist-space-64x-negative: -256px;
// --geist-space-small-negative: -32px;
// --geist-space-medium-negative: -40px;
// --geist-space-large-negative: -48px;
// --geist-space-gap-negative: -24px;
// --geist-space-gap-half-negative: -12px;
// --geist-space-gap-quarter-negative: var(--geist-space-2x-negative);
// --geist-gap-negative: var(--geist-space-gap-negative);
// --geist-gap-half-negative: var(--geist-space-gap-half-negative);
// --geist-gap-quarter-negative: var(--geist-space-gap-quarter-negative);




// --geist-success-lighter: #d3e5ff;
// --geist-success-light: #3291ff;
// --geist-success: #0070f3;
// --geist-success-dark: #0761d1;
// --geist-error-lighter: #f7d4d6;
// --geist-error-light: #ff1a1a;
// --geist-error: #e00;
// --geist-error-dark: #c50000;
// --geist-warning-lighter: #ffefcf;
// --geist-warning-light: #f7b955;
// --geist-warning: #f5a623;
// --geist-warning-dark: #ab570a;
// --geist-violet-lighter: #d8ccf1;
// --geist-violet-light: #8a63d2;
// --geist-violet: #7928ca;
// --geist-violet-dark: #4c2889;
// --geist-violet-background: #fff;
// --geist-violet-background-secondary: #291c3a;
// --geist-violet-background-tertiary: #eae5f4;
// --geist-background-rgb: 255,255,255;
// --geist-foreground-rgb: 0,0,0;
// --geist-console-header: #efe7ed;
// --geist-console-purple: #7928ca;
// --geist-console-text-color-default: var(--geist-foreground);
// --geist-console-text-color-blue: #0070f3;
// --geist-console-text-color-pink: #eb367f;
// --geist-console-text-color-purple: #7928ca;
// --geist-cyan-lighter: #aaffec;
// --geist-cyan-light: #79ffe1;
// --geist-cyan: #50e3c2;
// --geist-cyan-dark: #29bc9b;
// --geist-highlight-purple: #f81ce5;
// --geist-highlight-magenta: #eb367f;
// --geist-highlight-pink: #ff0080;
// --geist-highlight-yellow: #fff500;
// --geist-foreground: #000;
// --geist-background: #fff;
// --geist-selection: var(--geist-cyan-light);
// --accents-1: #fafafa;
// --accents-2: #eaeaea;
// --accents-3: #999;
// --accents-4: #888;




// --geist-foreground: #fff;
// --geist-background: #000;
// --geist-selection: var(--geist-highlight-purple);
// --accents-8: #fafafa;
// --accents-7: #eaeaea;
// --accents-6: #999;
// --accents-5: #888;
// --accents-4: #666;
// --accents-3: #444;
// --accents-2: #333;
// --accents-1: #111;
// --geist-secondary-lighter: var(--accents-2);
// --geist-secondary-light: var(--accents-3);
// --geist-secondary: var(--accents-5);
// --geist-secondary-dark: var(--accents-7);
// --geist-link-color: var(--geist-success-light);
// --geist-marketing-gray: var(--accents-1);
// --geist-code: var(--geist-cyan-light);
// --geist-error-light: #f33;
// --geist-error: red;
// --geist-error-dark: #e60000;
// --dropdown-box-shadow: 0 0 0 1px var(--accents-2);
// --dropdown-triangle-stroke: #333;
// --scroller-start: #000;
// --scroller-end: transparent;
// --header-background: rgba(0,0,0,.5);
// --header-border-bottom: inset 0 -1px 0 0 hsla(0,0%,100%,.1);
// --header-import-flow-background: hsla(0,0%,7%,.8);
// --shadow-smallest: 0 0 0 1px var(--accents-2);
// --shadow-extra-small: 0 0 0 1px var(--accents-2);
// --shadow-small: 0 0 0 1px var(--accents-2);
// --shadow-medium: 0 0 0 1px var(--accents-2);
// --shadow-large: 0 0 0 1px var(--accents-2);
// --shadow-sticky: 0 0 0 1px var(--accents-2);
// --shadow-hover: 0 0 0 1px var(--geist-foreground);
// --portal-opacity: 0.75;
// --geist-violet-background: #291d3a;
// --geist-violet-background-secondary: #211830;
// --geist-violet-background-tertiary: #211830;
// --geist-background-rgb: 0,0,0;
// --geist-foreground-rgb: 255,255,255;
// --geist-console-header: #0f0310;
// --geist-console-purple: #8a63d2;
// --geist-console-text-color-default: var(--geist-foreground);
// --geist-console-text-color-blue: #3291ff;
// --geist-console-text-color-pink: #eb367f;