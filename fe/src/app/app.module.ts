import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/template/header/header.component";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from "./components/template/nav/nav.component";
import { HomeComponent } from "./views/home/home.component";
import { CrudComponent } from "./views/crud/crud.component";
import { GreenDirective } from "./directives/green.directive";
import { LoopDirective } from "./directives/loop.directive";
import { CrudCreateComponent } from "./components/crud-create/crud-create.component";
import { CrudReadComponent } from "./components/crud-read/crud-read.component";
import { TableComponent } from "./components/template/table/table.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { CrudUpdateComponent } from "./components/crud-update/crud-update.component";
import { CrudDeleteComponent } from "./components/crud-delete/crud-delete.component";

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CrudComponent,
    GreenDirective,
    LoopDirective,
    CrudCreateComponent,
    CrudReadComponent,
    TableComponent,
    CrudUpdateComponent,
    CrudDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
