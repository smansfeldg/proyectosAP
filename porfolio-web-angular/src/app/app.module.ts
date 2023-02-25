import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AboutComponent } from './componentes/about/about.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectsComponent } from './componentes/proyects/proyects.component';
import { EducationComponent } from './componentes/education/education.component';
import { ExperienceComponent } from './componentes/experience/experience.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { FooterComponent } from './componentes/footer/footer.component';
// Importar HttpClientModule
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    AboutComponent,
    SkillsComponent,
    ProyectsComponent,
    EducationComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
