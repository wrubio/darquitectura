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
import { Retro0Component } from './sprint0/retro0/retro0.component';
import { AsrcLatencyComponent } from './sprint1/asrc-latency/asrc-latency.component';
import { DcdSprint1Component } from './sprint1/dcd-sprint1/dcd-sprint1.component';
import { SytSprint1Component } from './sprint1/syt-sprint1/syt-sprint1.component';
import { DexSprint1Component } from './sprint1/dex-sprint1/dex-sprint1.component';
import { RexSprint1Component } from './sprint1/rex-sprint1/rex-sprint1.component';
import { RycSprint1Component } from './sprint1/ryc-sprint1/ryc-sprint1.component';
import { Retro1Component } from './sprint1/retro1/retro1.component';
import { VfpmComponent } from './paymentMicroservice/vfpm/vfpm.component';
import { VdpmComponent } from './paymentMicroservice/vdpm/vdpm.component';
import { VipmComponent } from './paymentMicroservice/vipm/vipm.component';
import { AsrcComponent } from './sprint2/asrc/asrc.component';
import { DarqSprint2Component } from './sprint2/darq-sprint2/darq-sprint2.component';
import { DcdSprint2Component } from './sprint2/dcd-sprint2/dcd-sprint2.component';
import { SytSprint2Component } from './sprint2/syt-sprint2/syt-sprint2.component';
import { DexpSprint2Component } from './sprint2/dexp-sprint2/dexp-sprint2.component';
import { RexpSprint2Component } from './sprint2/rexp-sprint2/rexp-sprint2.component';
import { AycSprint2Component } from './sprint2/ayc-sprint2/ayc-sprint2.component';
import { Retro2Component } from './sprint2/retro2/retro2.component';
import { DarqSprint1Component } from './sprint1/darq-sprint1/darq-sprint1.component';
import { VdsmComponent } from './searchMicroservice/vdsm/vdsm.component';
import { VfsmComponent } from './searchMicroservice/vfsm/vfsm.component';
import { VismComponent } from './searchMicroservice/vism/vism.component';
import { ViumComponent } from './userMicroservices/vium/vium.component';
import { VdumComponent } from './userMicroservices/vdum/vdum.component';
import { VdfmComponent } from './userMicroservices/vdfm/vdfm.component';
import { VfbmComponent } from './bookingMicroservice/vfbm/vfbm.component';
import { VibmComponent } from './bookingMicroservice/vibm/vibm.component';
import { VdbmComponent } from './bookingMicroservice/vdbm/vdbm.component';
import { VcontexComponent } from './vcontex/vcontex.component';
import { AcronimosComponent } from './acronimos/acronimos.component';
import { ReferencesComponent } from './references/references.component';
import { AttrQualityComponent } from './attr-quality/attr-quality.component';
import { AsrcDisponibilityComponent } from './sprint3/asrc-disponibility/asrc-disponibility.component';
import { AycSprint3Component } from './sprint3/ayc-sprint3/ayc-sprint3.component';
import { DarqSprint3Component } from './sprint3/darq-sprint3/darq-sprint3.component';
import { DcdSprint3Component } from './sprint3/dcd-sprint3/dcd-sprint3.component';
import { DexpSprint3Component } from './sprint3/dexp-sprint3/dexp-sprint3.component';
import { Retro3Component } from './sprint3/retro3/retro3.component';
import { RexpSprint3Component } from './sprint3/rexp-sprint3/rexp-sprint3.component';
import { SytSprint3Component } from './sprint3/syt-sprint3/syt-sprint3.component';


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
        path: 'darqSprint1', component: DarqSprint1Component,
        data: {
          breadcrumb: 'Diseño Arquitectura Sprint 01'
        },
      },
      {
        path: 'dcdSprint1', component: DcdSprint1Component,
        data: {
          breadcrumb: 'Decisiones Críticas De Diseño'
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
          breadcrumb: 'Diseño del experimento'
        },
      },
      {
        path: 'rexSprint1', component: RexSprint1Component,
        data: {
          breadcrumb: 'Resultado del experimento'
        },
      },
      {
        path: 'rycSprint1', component: RycSprint1Component,
        data: {
          breadcrumb: 'Análisis y conclusiones'
        },
      },
      {
        path: 'retroSprint1', component: Retro1Component,
        data: {
          breadcrumb: 'Retrospectiva Sprint 01'
        },
      },
      {
        path: 'vfpm', component: VfpmComponent,
        data: {
          breadcrumb: 'Vista Funcional Payment'
        },
      },
      {
        path: 'vdpm', component: VdpmComponent,
        data: {
          breadcrumb: 'Vista De Despliegue Payment'
        },
      },
      {
        path: 'vipm', component: VipmComponent,
        data: {
          breadcrumb: 'Vista De Información Payment'
        },
      },
      {
        path: 'asrcSprint2', component: AsrcComponent,
        data: {
          breadcrumb: 'ASRs Consideradas Sprint 02'
        },
      },
      {
        path: 'darqSprint2', component: DarqSprint2Component,
        data: {
          breadcrumb: 'Diseño Arquitectura Sprint 02'
        },
      },
      {
        path: 'dcdSprint2', component: DcdSprint2Component,
        data: {
          breadcrumb: 'Decisiones Criticas De Diseño Sprint 02'
        },
      },
      {
        path: 'eytSprint2', component: SytSprint2Component,
        data: {
          breadcrumb: 'Estilos y Tácticas Sprint 02'
        },
      },
      {
        path: 'dexpSprint2', component: DexpSprint2Component,
        data: {
          breadcrumb: 'Diseño Experimento Sprint 02'
        },
      },
      {
        path: 'rycSprint2', component: AycSprint2Component,
        data: {
          breadcrumb: 'Análisis y Conclusiones Sprint 02'
        },
      },
      {
        path: 'retroSprint2', component: Retro2Component,
        data: {
          breadcrumb: 'Retrospectiva Sprint 02'
        },
      },
      {
        path: 'rexpSprint2', component: RexpSprint2Component,
        data: {
          breadcrumb: 'Resultado Experimentos Sprint 02'
        },
      },
      {
        path: 'vfsm', component: VfsmComponent,
        data: {
          breadcrumb: 'Vista Funcional Searsh Microservice'
        },
      },
      {
        path: 'vdsm', component: VdsmComponent,
        data: {
          breadcrumb: 'Vista Despliegue Searsh Microservice'
        },
      },
      {
        path: 'vism', component: VismComponent,
        data: {
          breadcrumb: 'Vista Información Searsh Microservice'
        },
      },
      {
        path: 'vfum', component: VdfmComponent,
        data: {
          breadcrumb: 'Vista Información User Microservice'
        },
      },
      {
        path: 'vdum', component: VdumComponent,
        data: {
          breadcrumb: 'Vista Despliegue User Microservice'
        },
      },
      {
        path: 'vium', component: ViumComponent,
        data: {
          breadcrumb: 'Vista Información User Microservice'
        },
      },
      {
        path: 'vfbm', component: VfbmComponent,
        data: {
          breadcrumb: 'Vista Información Booking Microservice'
        },
      },
      {
        path: 'vdbm', component: VdbmComponent,
        data: {
          breadcrumb: 'Vista Despliegue Booking Microservice'
        },
      },
      {
        path: 'vibm', component: VibmComponent,
        data: {
          breadcrumb: 'Vista Información Booking Microservice'
        },
      },
      {
        path: 'vcontex', component: VcontexComponent,
        data: {
          breadcrumb: 'Vista De Contexto'
        },
      },
      {
        path: 'acronimos', component: AcronimosComponent,
        data: {
          breadcrumb: 'Conveciones Del Documento'
        },
      },
      {
        path: 'references', component: ReferencesComponent,
        data: {
          breadcrumb: 'Referencias'
        },
      },
      {
        path: 'attrQuality', component: AttrQualityComponent,
        data: {
          breadcrumb: 'Atributos De Calidad'
        },
      },
      {
        path: 'asrcDisponibility', component: AsrcDisponibilityComponent,
        data: {
          breadcrumb: 'ASRs De Disponibilidad'
        },
      },
      {
        path: 'sytSprint03', component: SytSprint3Component,
        data: {
          breadcrumb: 'Estilos y tácticas sprint 03'
        },
      },
      {
        path: 'dexpSprint03', component: DexpSprint3Component,
        data: {
          breadcrumb: 'Diseño del experimento sprint 03'
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
    DexSprint1Component,
    RexSprint1Component,
    RycSprint1Component,
    Retro1Component,
    VfpmComponent,
    VdpmComponent,
    VipmComponent,
    AsrcComponent,
    DarqSprint2Component,
    DcdSprint2Component,
    SytSprint2Component,
    DexpSprint2Component,
    RexpSprint2Component,
    AycSprint2Component,
    Retro2Component,
    DarqSprint1Component,
    VdsmComponent,
    VfsmComponent,
    VismComponent,
    ViumComponent,
    VdumComponent,
    VdfmComponent,
    VfbmComponent,
    VibmComponent,
    VdbmComponent,
    VcontexComponent,
    AcronimosComponent,
    ReferencesComponent,
    AttrQualityComponent,
    AsrcDisponibilityComponent,
    AycSprint3Component,
    DarqSprint3Component,
    DcdSprint3Component,
    DexpSprint3Component,
    Retro3Component,
    RexpSprint3Component,
    SytSprint3Component
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
