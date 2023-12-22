import { Component, WritableSignal, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effects',
  standalone: true,
  imports: [],
  templateUrl: './effects.component.html',
  styles: ``
})
export class EffectsComponent {

  public count: WritableSignal<number> = signal(0);
  private _loggingEffect = effect(() => {
    console.log(`The current count is: ${this.count()}`);
  });

  public updateCount() {
    this.count.update(value => value + 1);
  }
}
