import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ShowCaseComponent } from './Showcase/showcase-component'
import { AdminPageComponent} from './AdminPage/adminPage-component'

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ShowCaseComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      
      { path: '', component: ShowCaseComponent, pathMatch: 'full' },
      {path: 'admin-page', component: AdminPageComponent}
      
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
