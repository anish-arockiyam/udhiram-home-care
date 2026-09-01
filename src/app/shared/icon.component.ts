import { Component, input } from '@angular/core';

@Component({
  selector: 'udhiram-icon',
  standalone: true,
  template: `
    <svg [attr.width]="size()" [attr.height]="size()" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" stroke-width="1.8"
         stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      @switch (name()) {
        @case ('heart') { <path d="M20.8 8.7c0 5.5-8.8 10.3-8.8 10.3S3.2 14.2 3.2 8.7A4.7 4.7 0 0 1 12 6.3a4.7 4.7 0 0 1 8.8 2.4Z"/> }
        @case ('shield') { <path d="M12 3 20 6v5c0 5.1-3.4 8.8-8 10-4.6-1.2-8-4.9-8-10V6l8-3Z"/><path d="m8.7 12 2.1 2.1 4.6-4.6"/> }
        @case ('user') { <circle cx="12" cy="8" r="3.5"/><path d="M4.8 21a7.2 7.2 0 0 1 14.4 0"/> }
        @case ('pill') { <path d="m9.2 14.8 5.6-5.6a3.7 3.7 0 0 1 5.2 5.2l-5.6 5.6a3.7 3.7 0 0 1-5.2-5.2Z"/><path d="m8.1 9.9-3.5 3.5a3.7 3.7 0 0 0 5.2 5.2l3.5-3.5"/><path d="m10.2 13.8 3.6-3.6"/> }
        @case ('syringe') { <path d="m14 5 5 5"/><path d="m12.3 6.7 5 5"/><path d="m3 21 6.8-6.8"/><path d="m7 17 4 4"/><path d="m15.5 3.5 5 5"/><path d="M11 10 7.5 6.5 6 8l3.5 3.5"/><path d="m4 20 1-1"/> }
        @case ('catheter') { <path d="M7 3v7a5 5 0 0 0 10 0V7"/><path d="M7 3h4"/><path d="M17 7h3"/><path d="M17 10h3"/><path d="M12 15v6"/><path d="M9 21h6"/> }
        @case ('hands') { <path d="M8 12V5.5a1.5 1.5 0 0 1 3 0V11"/><path d="M11 10V4.5a1.5 1.5 0 0 1 3 0V11"/><path d="M14 10V6a1.5 1.5 0 0 1 3 0v6"/><path d="M17 11V9a1.5 1.5 0 0 1 3 0v4.5C20 18 17 21 12.5 21 9 21 7 19 5.5 16L3.7 12.7a1.7 1.7 0 0 1 2.9-1.8L8 13"/> }
        @case ('phone') { <path d="M6.2 3h3l1.4 4-1.9 1.4a15.7 15.7 0 0 0 6.9 6.9l1.4-1.9 4 1.4v3c0 1.1-.9 2-2 2C10.2 19.8 4.2 13.8 4.2 6c0-1.7.9-3 2-3Z"/> }
        @case ('home') { <path d="m3 11 9-8 9 8"/><path d="M5.5 10v10h13V10"/><path d="M9.5 20v-6h5v6"/> }
        @case ('arrow') { <path d="M5 12h14"/><path d="m13 6 6 6-6 6"/> }
        @case ('check') { <path d="m5 12 4 4L19 6"/> }
        @case ('menu') { <path d="M4 7h16M4 12h16M4 17h16"/> }
        @case ('close') { <path d="m6 6 12 12M18 6 6 18"/> }
        @case ('mail') { <rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/> }
      }
    </svg>
  `
})
export class IconComponent {
  readonly name = input.required<string>();
  readonly size = input(24);
}
