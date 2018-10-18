import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
// External
import {BreadcrumbsModule} from "ng6-breadcrumbs";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// App components
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { TableChangeComponent } from './table-change/table-change.component';
import { RestrictionsComponent } from './restrictions/restrictions.component';
import { UserStoriesComponent } from './user-stories/user-stories.component';
import { AsrComponent } from './asr/asr.component';


const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: {
      breadcrumb: 'Home'
    },
    children: [
      {
        path: '', component: HomeComponent,
        data: {
          breadcrumb: 'Home'
        }
      },
      {
        path: 'introduction', component: IntroductionComponent,
        data: {
          breadcrumb: 'Introducción'
        }
      },
      {
        path: 'tableOfChanges', component: TableChangeComponent,
        data: {
          breadcrumb: 'Tabla De Cambios'
        }
      },
      {
        path: 'restrictions', component: RestrictionsComponent,
        data: {
          breadcrumb: 'Restricciones'
        }
      },
      {
        path: 'userStories', component: UserStoriesComponent,
        data: {
          breadcrumb: 'Historias De Usuario'
        },
      },
      {
        path: 'asr', component: AsrComponent,
        data: {
          breadcrumb: 'ASRs'
        },
      }
    ],
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    SidebarComponent,
    IntroductionComponent,
    TableChangeComponent,
    RestrictionsComponent,
    UserStoriesComponent,
    AsrComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {scrollPositionRestoration: 'enabled'}
    ),
    BreadcrumbsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
