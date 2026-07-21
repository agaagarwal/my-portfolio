import type * as React from 'react';
import type { DotLottiePlayer } from '@dotlottie/player-component';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dotlottie-player': React.DetailedHTMLProps<React.HTMLAttributes<DotLottiePlayer>, DotLottiePlayer> & {
        src?: string;
        autoplay?: boolean | string;
        loop?: boolean | string;
      };
    }
  }
}

export {};
