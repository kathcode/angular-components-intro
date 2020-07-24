import {
  Component,
  OnInit,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass'],
})
export class CounterComponent implements OnInit, OnChanges, OnDestroy {
  @Input() counterChildren: number;
  @Output() clearCounterEvent = new EventEmitter<number>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('Init component');
  }

  clearCounter() {
    this.clearCounterEvent.emit(123);
  }

  ngOnDestroy() {
    console.log('Destroy component');
  }
}
