import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject, Observable, timer, interval, of } from 'rxjs';
import { switchMap, share, retry, takeUntil } from 'rxjs/operators';

import { uniqueNamesGenerator, Config, names } from 'unique-names-generator';

interface CensusEntry {
  name: string;
  age: number;
} 

const config: Config = {
  dictionaries: [names]
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'vermont';

  censusData: CensusEntry[] = [];

  timersub?: Subscription;
  private stopPolling = new Subject();

  ngOnInit() {
    this.start();
  }

  ngOnDestroy(): void {
    this.stop();
  }

  toggle() {
    if (this.timersub)
      this.stop();
    else
      this.start();
  }

  start() {
    this.timersub = timer(0, 5000).pipe(
      switchMap(() => this.getCensusRecord()),
      retry(5),
      share(),
      takeUntil(this.stopPolling)
    ).subscribe(
      data => {
        this.censusData.push(data);
      }
    );
  }

  stop() {
    this.stopPolling.next();
    if (this.timersub) {
      this.timersub.unsubscribe;
      this.timersub = undefined;
    }
  }

  getCensusRecord(): Observable<CensusEntry> {
    return of({name: uniqueNamesGenerator(config), age: Math.floor(Math.random() * 100)});
  }
}
