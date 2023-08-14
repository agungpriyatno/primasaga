import { animate, group, keyframes, query, style, transition, trigger } from '@angular/animations';
export const sidebar = trigger("sidebar", [
  transition(':enter', [
    group([
      animate("300ms 0ms ease-in", keyframes([
        style({ background: "transparent" }),
        style({ background: "*" }),
      ])),
      query(".card", [
        animate("300ms 0ms ease-in", keyframes([
          style({ transform: 'translateX(-100%)', offset: 0 }),
          style({ transform: 'translateX(0)', offset: 1 }),
        ])),
      ])
    ])
  ]),
  transition(':leave', [
    group([
      animate("300ms 0ms ease-in", keyframes([
        style({ background: "*" }),
        style({ background: "transparent" }),
      ])),
      query(".card", [
        animate("300ms 0ms ease-in", keyframes([
          style({ transform: 'translateX(0)', offset: 0 }),
          style({ transform: 'translateX(-100%)', offset: 1 }),
        ])),
      ])
    ])
  ])
]);
