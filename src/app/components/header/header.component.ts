import { Component, HostListener, signal } from '@angular/core';
import { IconComponent } from '../../shared/icon.component';

@Component({
  selector: 'udhiram-header',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {}

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }
}
