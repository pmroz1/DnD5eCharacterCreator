import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [MenubarModule],
  template: `<p-menubar [model]="items"></p-menubar>`,
  styleUrl: './MenuBar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuBarComponent {
  items: MenuItem[] = [
    {
      label: 'Create New Character',
      icon: 'pi pi-plus',
      routerLink: '/create-character',
    },
    {
      label: 'View Characters',
      icon: 'pi pi-list',
      routerLink: '/character-list',
    },
  ];

}
