import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {


  subject=new Subject();
  bSubject=new BehaviorSubject("");
  replay=new ReplaySubject();
  asyncSub=new AsyncSubject();

  constructor() { 
    this.subject.next("hello this is subject");
    this.bSubject.next("hello this is behavior subject");
    this.replay.next("hello this is replay subject");
    this.asyncSub.next("hello this is async subject");
  }
}
