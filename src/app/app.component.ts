import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SASSLearningApp';

  menuBtn: any;
  hamBurger: any;
  nav: any;
  menuNav: any;
  navItems: any;
  showMenu: boolean = false;
  activeTabHome: boolean = true;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.menuBtn = document.querySelector('.menu-btn');
    this.hamBurger = document.querySelector('.menu-btn__burger');
    this.nav = document.querySelector('.nav');
    this.menuNav = document.querySelector('.menu-nav');
    this.navItems = document.querySelectorAll('.menu-nav__item');
    this.activeTabHome = this.activatedRoute.snapshot.paramMap.get('') === null ? true : false;
  }

  toggleMenu(): void {
    if (!this.showMenu) {
      this.hamBurger.classList.add('open');
      this.nav.classList.add('open');
      this.menuNav.classList.add('open');
      this.navItems.forEach((item: any) => {
        item.classList.add('open');
      });
      this.showMenu = true;
    } else {
      this.hamBurger.classList.remove('open');
      this.nav.classList.remove('open');
      this.menuNav.classList.remove('open');
      this.navItems.forEach((item: any) => {
        item.classList.remove('open');
      });
      this.showMenu = false;
    }
  }

  menuClick(activeMenu: string): void {
      if (activeMenu === 'Home') {
        this.router.navigate(['home']);
        this.activeTabHome = true;
      } else if (activeMenu === 'About') {
        this.router.navigate(['about']);
        this.activeTabHome = false;
      } else if (activeMenu === 'Projects') {
        this.router.navigate(['projects']);
        this.activeTabHome = false;
      } else if (activeMenu === 'Contact') {
        this.router.navigate(['contact']);
        this.activeTabHome = false;
      }
  }
}
