import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  myS: Subscription;

  constructor(state: StateService) {
    this.myS = state.stream$.subscribe((data) => console.log(data));
  }

  ngOnInit(): void {}
}
