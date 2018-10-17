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
    const toggleBottom = document.getElementById('smallDevice-menu');
    const navElement = document.querySelector('nav');
    // *********************************************************************************************
    // ** LI Collapse sidebar event
    // *********************************************************************************************
    const containerSideBar = Array.prototype.slice.apply(document.querySelectorAll('.p-link'));
    // Variable to save the last level 1 li height
    let lastHeight;

    containerSideBar.map(navs => navs.addEventListener('click', e => {
      const liSelector = e.target.nodeName === 'LI' ? containerSideBar.indexOf(e.target) : containerSideBar.indexOf(e.target.closest('li'));
      const liElement = containerSideBar[liSelector];
      console.log(e);
      if (liElement.childNodes.length === 3){
        const subMenuElement = liElement.childNodes[2];
        const arrowElement = liElement.childNodes[1];
        const iElement = arrowElement.childNodes[0];
        const iElementClass = iElement.classList.contains('fa-caret-down');
        // ****************************************************************************************
        // Remove current awesome font for the opposite font
        if (iElementClass) {
          iElement.classList.remove('fa-caret-down');
          iElement.classList.add('fa-caret-up');
        } else {
          iElement.classList.remove('fa-caret-up');
          iElement.classList.add('fa-caret-down');
        }

        const subMenuElementHeight = subMenuElement.offsetHeight;
        const liElementHeight = liElement.offsetHeight;
        if (subMenuElement.classList.contains('sub-level2')) {
          const liClosest = liElement.closest('.level1');
          const level1Height = liClosest.offsetHeight;
          lastHeight = liElementHeight === 42 ? level1Height : lastHeight;
          const level2Height = liElementHeight === 42 ? (subMenuElementHeight + 62) : 42;
          const setLevel1Height =  level2Height === 42 ? lastHeight : (level1Height + level2Height) - 42;
          liElement.style.height = level2Height + 'px';
          liClosest.style.height = setLevel1Height + 'px';
        } else {
          liElement.style.height = liElementHeight === 42 ? (subMenuElementHeight + 62) + 'px' : '42px';
        }
      }

      const routerLinkAttr = liElement.hasAttribute('routerLink');
      if (window.matchMedia("(max-width: 768px)").matches || window.matchMedia("(max-width: 460px)").matches) {
        if (routerLinkAttr) {
          navElement.style.width = '';
          toggleBottom.style.left = '';
        }
      }
      e.stopPropagation();
    }));
    // *********************************************************************************************
    // ** Sidebar mobile events
    // *********************************************************************************************
    toggleBottom.addEventListener('click', e => {
      navElement.style.width = navElement.offsetWidth === 0 ? '320px' : '';
      toggleBottom.style.left = toggleBottom.style.left=== '' ? '320px' : '';
    })
    // *********************************************************************************************
    // ** Sidebar mobile events
    // *********************************************************************************************
  }

}
