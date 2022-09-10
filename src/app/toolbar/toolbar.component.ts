import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';
import { Subject, Subscription } from 'rxjs';
import { PrintService } from '../services/print.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  constructor(state: StateService, print: PrintService) {
    this.mySubscription = state.stream$.subscribe((data) => print.print(data));
    this.mySource = state.source;
  }

  mySource: any;
  mySubscription: Subscription;

  appendToStream() {
    this.mySource.next('RANDOM TEXT :)');
  }

  ngOnInit(): void {}
}
