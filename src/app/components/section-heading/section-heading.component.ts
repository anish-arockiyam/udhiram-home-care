import { Component, input } from '@angular/core';

@Component({
  selector: 'udhiram-section-heading',
  standalone: true,
  template: `
    <div class="heading" [class.center]="center()">
      @if (eyebrow()) { <span class="eyebrow">{{ eyebrow() }}</span> }
      <h2>{{ title() }}</h2>
      @if (description()) { <p>{{ description() }}</p> }
    </div>
  `,
  styles: [`
    .heading { max-width:700px; }
    .heading.center { margin-inline:auto; text-align:center; }
    .eyebrow { display:inline-flex; margin-bottom:12px; color:var(--rose); font-size:11px; font-weight:800; letter-spacing:.16em; text-transform:uppercase; }
    h2 { margin:0; color:var(--ink); font-family:var(--display); font-size:clamp(30px,4vw,50px); line-height:1.06; letter-spacing:-.035em; }
    p { margin:16px 0 0; color:var(--muted); font-size:16px; line-height:1.75; }
  `]
})
export class SectionHeadingComponent {
  readonly title = input.required<string>();
  readonly description = input('');
  readonly eyebrow = input('');
  readonly center = input(false);
}
