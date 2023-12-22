import { Component, Signal, WritableSignal, computed, signal } from '@angular/core';

@Component({
  selector: 'app-kinds',
  standalone: true,
  imports: [],
  templateUrl: './kinds.component.html',
  styles: ``
})
export class KindsComponent {

  public count: WritableSignal<number> = signal(0);
  public showCount: WritableSignal<boolean> = signal(false);

  public doubleCount: Signal<number> = computed(() => this.count() * 2);
  public conditionalCount: Signal<string> = computed(() => {
    if(this.showCount()) {
      return `The count is ${this.count()}`;
    } else {
      return `Nothing to see here!`;
    }
  });

  public setValue() {
    this.count.set(1);
  }

  public updateValue() {
    this.count.update(value => value + 1);
  }

  public showCountMessage() {
    this.showCount.update(value => !value);
  }

}
