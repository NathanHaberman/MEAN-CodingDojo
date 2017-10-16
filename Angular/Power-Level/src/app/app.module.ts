import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HumanComponent } from './human/human.component';
import { SaiyanComponent } from './saiyan/saiyan.component';
import { SuperSaiyanComponent } from './super-saiyan/super-saiyan.component';
import { SuperSaiyanIiComponent } from './super-saiyan-ii/super-saiyan-ii.component';
import { SuperSaiyanIiiComponent } from './super-saiyan-iii/super-saiyan-iii.component';
import { SuperSaiyanIvComponent } from './super-saiyan-iv/super-saiyan-iv.component';

@NgModule({
  declarations: [
    AppComponent,
    HumanComponent,
    SaiyanComponent,
    SuperSaiyanComponent,
    SuperSaiyanIiComponent,
    SuperSaiyanIiiComponent,
    SuperSaiyanIvComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
