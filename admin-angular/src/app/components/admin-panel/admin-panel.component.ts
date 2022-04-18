import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    toggleMenu() {
      let toggle = document.querySelector('.toggle');
      let navigation = document.querySelector('.navigation');
      let main = document.querySelector('.main');
      toggle.classList.toggle('active');
      navigation.classList.toggle('active');
      main.classList.toggle('active');
    }


}
