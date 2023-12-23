import { Component, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-rxjs-interop-for-signals',
  standalone: true,
  imports: [],
  templateUrl: './rxjs-interop-for-signals.component.html',
  styles: ``
})
export class RxjsInteropForSignalsComponent {

  private _counterObservable: Observable<number> = interval(1000);
  public counter: Signal<number> = toSignal(this._counterObservable, { initialValue: 0 });

}
