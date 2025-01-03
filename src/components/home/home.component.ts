import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  backgroundColor: string = 'white';
  isMenuOpen = false;
  isDropdownOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('this.isMenuOpen: ', this.isMenuOpen);
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  isBgColorApplied: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    // if (scrollPosition >= 1000 && scrollPosition <= 3000) {
    //   this.backgroundColor = '#161616'; // Change to desired color
    // } else {
    //   this.backgroundColor = 'white'; // Original color
    // }

    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    console.log('scrollPosition: ', scrollPosition);

    if (scrollPosition >= 1200 && scrollPosition <= 3000) {
      this.isBgColorApplied = true; // Apply class in range
    } else {
      this.isBgColorApplied = false; // Remove class outside range
      console.log('this.isBgColorApplied: ', this.isBgColorApplied);
    }
  }
}
