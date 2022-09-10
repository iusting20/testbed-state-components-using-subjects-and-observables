import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PrintService {
  constructor() {}

  print(message: any) {
    let div = document.createElement('div');
    div.innerHTML = '<p>' + message + '</p>';
    document.body.appendChild(div);
  }
}
