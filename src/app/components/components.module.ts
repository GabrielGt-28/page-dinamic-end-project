import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [NavbarComponent, MenuComponent, FooterComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [NavbarComponent, MenuComponent, FooterComponent],
})
export class ComponentsModule {}
