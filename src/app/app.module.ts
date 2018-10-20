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
import { AsrcLatencyComponent } from './asrc-latency/asrc-latency.component';
import { DcdSprint1Component } from './dcd-sprint1/dcd-sprint1.component';
import { SytSprint1Component } from './syt-sprint1/syt-sprint1.component';
import { DexSprint1Component } from './dex-sprint1/dex-sprint1.component';


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
      },
      {
        path: 'asrcLatency', component: AsrcLatencyComponent,
        data: {
          breadcrumb: 'ASR Consideradas Sprint 1'
        },
      },
      {
        path: 'dcdSprint1', component: DcdSprint1Component,
        data: {
          breadcrumb: 'Decisiones Críticas De Diseño Sprint 1'
        },
      },
      {
        path: 'sytSprint1', component: SytSprint1Component,
        data: {
          breadcrumb: 'Estilos y Tácticas Sprint 01'
        },
      },
      {
        path: 'dexSprint1', component: DexSprint1Component,
        data: {
          breadcrumb: 'Diseño del experimento Sprint 01'
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
    Retro0Component,
    AsrcLatencyComponent,
    DcdSprint1Component,
    SytSprint1Component,
    DexSprint1Component
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
