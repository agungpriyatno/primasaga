import { animate, group, keyframes, query, style, transition, trigger } from '@angular/animations';
export const toast = trigger("toast", [
  transition(':increment', [
    query(":enter", [
      animate(200, keyframes([
        style({ transform: "translateX(-100%)", offset: 0 }),
        style({ transform: "translateX(3%)", offset: 0.7 }),
        style({ transform: "translateX(-3%)", offset: 0.9 }),
        style({ transform: "translateX(0)", offset: 1 }),
      ])),
    ])
  ]),
  transition(':decrement', [
    query(":leave", [
      animate(200, keyframes([
        style({ transform: "translateX(0)", offset: 0 }),
        style({ transform: "translateX(-100%)", offset: 1 }),
      ])),
    ])
  ]),
]);

// transition(':enter, * => 0, * => -1', []),
//   transition(':increment', [
//     query(':enter', [
//       style({ opacity: 0, width: 0 }),
//       stagger(50, [
//         animate('300ms ease-out', style({ opacity: 1, width: '*' })),
//       ]),
//     ], { optional: true })
//   ]),
//   transition(':decrement', [
//     query(':leave', [
//       stagger(50, [
//         animate('300ms ease-out', style({ opacity: 0, width: 0 })),
//       ]),
//     ])
//   ]),
