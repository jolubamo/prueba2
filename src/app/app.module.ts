import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { PersonaComponent } from './page/persona/persona.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { TipoTrabajoComponent } from './page/tipo-trabajo/tipo-trabajo.component';
import { ExperienciaLaboralComponent } from './page/experiencia-laboral/experiencia-laboral.component';
import { MatStepperModule } from '@angular/material/stepper';
import { ViewExperienciaLaboralComponent } from './page/view-experiencia-laboral/view-experiencia-laboral.component';
import { ViewPersonaComponent } from './page/view-persona/view-persona.component';
import { ViewTrabajoComponent } from './page/view-trabajo/view-trabajo.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PersonaComponent,
    NotFoundComponent,
    TipoTrabajoComponent,
    ExperienciaLaboralComponent,
    ViewExperienciaLaboralComponent,
    ViewPersonaComponent,
    ViewTrabajoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatChipsModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    MatSelectModule,
    MatStepperModule,
    MatTableModule,
    MatPaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
