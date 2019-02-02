
import { Component, ViewChildren, QueryList } from '@angular/core';
import { CounterDirective } from './directives/counter/counter.directive';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {

  @ViewChildren(CounterDirective) counters: QueryList<CounterDirective>;

  startCounters() {
    this.counters.forEach(counter => counter.start());
  }
}

