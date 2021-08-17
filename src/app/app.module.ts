import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PortfolioComponent } from './porfolio/portfolio.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    AboutComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    // AppRoutingModule
    RouterModule.forRoot([
      { path: "", component: PortfolioComponent },
      { path: "about", component: AboutComponent },
      { path: "projects", component: ProjectsComponent }

      // { path: "portfolio", redirectTo: "", pathMatch: "full" }


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
