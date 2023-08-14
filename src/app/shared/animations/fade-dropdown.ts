import { animate, group, keyframes, query, style, transition, trigger } from '@angular/animations';
export const fadeDropdown = trigger("fadeDropdown", [
  transition(':enter', [
    group([
      animate("300ms 0ms ease-in", keyframes([
        style({ height: '0', offset: 0 }),
        style({ height: '*', offset: 1 }),
      ])),
      animate("400ms 0ms ease-in", keyframes([
        style({ opacity: 0, offset: 0 }),
        style({ opacity: 1, offset: 1 }),
      ])),
    ])
  ]),
  transition(':leave', [
    group([
      animate("300ms 0ms ease-in", keyframes([
        style({ height: '*', offset: 0 }),
        style({ height: '0', offset: 1 }),
      ])),
      animate("200ms 0ms ease-in", keyframes([
        style({ opacity: 1, offset: 0 }),
        style({ opacity: 0, offset: 1 }),
      ])),
    ])
  ])
]);
