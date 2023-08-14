import { animate, group, keyframes, query, style, transition, trigger } from '@angular/animations';
export const modal = trigger("modal", [
  transition(':enter', [
    group([
      animate(200, keyframes([
        style({ opacity: 0 }),
        style({ opacity: 1 }),
      ])),
      query(".card", [
        animate(200, keyframes([
          style({ transform: 'scale(0)', offset: 0 }),
          style({ transform: 'scale(1.05)', offset: 0.7 }),
          style({ transform: 'scale(0.95)', offset: 0.9 }),
          style({ transform: 'scale(1)', offset: 1 }),
        ])),
      ])
    ])
  ]),
  transition(':leave', [
    group([
      animate(200, keyframes([
        style({ opacity: 1 }),
        style({ opacity: 0 }),
      ])),
      query(".card", [
        animate(200, keyframes([
          style({ transform: 'scale(1)', offset: 0 }),
          style({ transform: 'scale(0)', offset: 1 }),
        ])),
      ])
    ])
  ])
]);
