import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Email } from './email';

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<Email> {

  constructor() { }

  resolve() {
    return {
      id: 'adgadg',
      subject: 'adsgadsg',
      to: 'adgadg',
      from: 'adgadsg',
      text: 'asdgadg',
      html: 'adsgadsg'
    };
  }
}
