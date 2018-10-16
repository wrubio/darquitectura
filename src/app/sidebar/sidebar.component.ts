import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // *********************************************************************************************
    // ** LI Collapse sidebar event
    // *********************************************************************************************
    const containerSideBar = Array.prototype.slice.apply(document.querySelectorAll('.p-link'));
    containerSideBar.map(navs => navs.addEventListener('click', e => {
      const liSelector = e.target.nodeName === 'LI' ? containerSideBar.indexOf(e.target) : containerSideBar.indexOf(e.target.closest('li'));
      const liElement = containerSideBar[liSelector];
      if (liElement.childNodes.length === 3){
        const subMenuElement = liElement.childNodes[2];
        const arrowElement = liElement.childNodes[1];
        const iElement = arrowElement.childNodes[0];
        const iElementClass = iElement.classList.contains('fa-caret-down');
        if (iElementClass) {
          iElement.classList.remove('fa-caret-down');
          iElement.classList.add('fa-caret-up');
        } else {
          iElement.classList.remove('fa-caret-up');
          iElement.classList.add('fa-caret-down');
        }
        const subMenuElementHeight = subMenuElement.offsetHeight;
        const liElementHeight = liElement.offsetHeight;
        liElement.style.height = liElementHeight === 42 ? (subMenuElementHeight + 42) + 'px' : '42px';
      }
    }));
  }

}
