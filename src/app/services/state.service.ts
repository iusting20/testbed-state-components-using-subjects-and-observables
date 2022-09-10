import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  constructor() {}

  user = 'Iustin Ghergu';

  source = new Subject();
  stream$ = this.source.asObservable();
}
