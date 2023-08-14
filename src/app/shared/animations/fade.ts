import { animate, keyframes, style, transition, trigger } from '@angular/animations';
export const fade = trigger("fade", [
  transition(':enter', [
    animate(200, keyframes([
      style({ opacity: 0 }),
      style({ opacity: 1 }),
    ])),
  ]),
  transition(':leave', [
    animate(200, keyframes([
      style({ opacity: 1 }),
      style({ opacity: 0 }),
    ])),
  ])
]);
