import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [MenubarModule],
  template: `<p-menubar [model]="items"></p-menubar>`,
  styleUrl: './menu-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuBarComponent {
  items: MenuItem[] = [
    {
      label: 'New Character',
      icon: 'pi pi-plus',
      routerLink: '/character-creator',
    },
    {
      label: 'View Characters',
      icon: 'pi pi-list',
      routerLink: '/character-viewer',
    },
  ];

}
