import {Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked, ChangeDetectorRef} from '@angular/core';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import { Router, NavigationEnd } from '@angular/router';
import {filter} from 'rxjs/operators';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})

export class VideosComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild('acc') acc: NgbAccordion;
  hrefString: string;
  sprint: string;
  constructor(private _changeDetectionRef: ChangeDetectorRef, private router: Router) {
    this.hrefString = window.location.href;
    this.sprint = '';
  }
  ngOnInit() {
    const slashLength = this.hrefString.split('/sprint');
    this.sprint = 'sprint' + slashLength[1];
  }
  ngAfterViewInit() {
    console.log(this.sprint);
    this.acc.collapseAll();
    this.acc.toggle(this.sprint);
    this.router.events.pipe(filter( (event) => event instanceof NavigationEnd)).subscribe(e => {
      this.acc.collapseAll();
      const url = e['url'];
      const splitUrl = url.split('video/');
      this.acc.toggle(splitUrl[1]);
    });
  }
  ngAfterViewChecked(): void {
    this._changeDetectionRef.detectChanges();
  }
}
