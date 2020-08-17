import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from"@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './master/footer/footer.component';
import { NavbarComponent } from './master/navbar/navbar.component';
import { SidebarComponent } from './master/sidebar/sidebar.component';
import { HeaderContentComponent } from './master/header-content/header-content.component';
import { ContentComponent } from './master/content/content.component';
import { TestComponent } from './master/test/test.component';
import { LoginComponent } from './master/login/login.component';
import { MasterComponent } from './master/master/master.component';
import { VendeursListComponent } from './mg/component/Vendeur/vendeurs-list/vendeurs-list.component';
import { VendeurFormComponent } from './mg/component/Vendeur/vendeur-form/vendeur-form.component';
import { VendeurViewComponent } from './mg/component/Vendeur/vendeur-view/vendeur-view.component';
import { PersoneviewComponent } from './mg/component/Personnel/personeview/personeview.component';
import { PersoneFormComponent } from './mg/component/Personnel/persone-form/persone-form.component';
import { PersonelListComponent } from './mg/component/Personnel/personel-list/personel-list.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HeaderContentComponent,
    ContentComponent,
    TestComponent,
    LoginComponent,
    MasterComponent,
    VendeursListComponent,
    VendeurFormComponent,
    VendeurViewComponent,
    PersonelListComponent,
    PersoneFormComponent,
    PersoneviewComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
