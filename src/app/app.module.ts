import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
// External
import {BreadcrumbsModule} from 'ng6-breadcrumbs';
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
import { AsrPriorityComponent } from './asr-priority/asr-priority.component';
import { VideosComponent } from './videos/videos.component';
import { Retro0Component } from './retro0/retro0.component';


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
      },
      {
        path: 'asrPriority', component: AsrPriorityComponent,
        data: {
          breadcrumb: 'Priorización De ASRs'
        },
      },
      {
        path: 'video/:sprint', component: VideosComponent,
        data: {
          breadcrumb: 'Videos De Los Sprints'
        },
      },
      {
        path: 'retro0', component: Retro0Component,
        data: {
          breadcrumb: 'Retrospectiva Del Sprint 0'
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
    AsrComponent,
    AsrPriorityComponent,
    VideosComponent,
    Retro0Component
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
