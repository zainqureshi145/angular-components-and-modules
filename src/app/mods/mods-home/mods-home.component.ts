import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  modalOpen = false;

  items = [
    { title: 'Why is the sky blue?', content: 'Because of Ozone' },
    { title: 'What does an orange taste like?', content: 'An orange tastes like a chocolate' },
    { title: 'What color is water?', content: 'Transparent' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClickHandler() {
    this.modalOpen = !this.modalOpen;
  }
}
