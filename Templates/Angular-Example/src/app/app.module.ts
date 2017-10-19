import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Important Modules
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

// Import Service
import { ExampleService } from './example.service';

// Generating from ng new Example-Project --routing
import { AppRoutingModule } from './app-routing.module';

// All Components you can paste in routing
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    // HttpModule,
  ],
  providers: [
    ExampleService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
