import { animate, group, keyframes, query, style, transition, trigger } from '@angular/animations';
export const slideUp = trigger("slideUp", [
  transition(':enter', [
    animate("200ms 0ms ease-in", keyframes([
      style({ transform: 'translateY(200%)', offset: 0 }),
      style({ transform: 'translateY(0)', offset: 1 }),
    ])),
  ]),
  transition(':leave', [
    animate("200ms 0ms ease-in", keyframes([
      style({ transform: 'translateY(0)', offset: 0 }),
      style({ transform: 'translateY(200%)', offset: 1 }),
    ])),
  ])
]);
