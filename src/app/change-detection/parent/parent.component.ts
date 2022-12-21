import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  count: number = 0;
  interval = interval(3000);
  dataTransfer: number = 1;
  dataToGP!: string;

  @Output() fromParentToGP: EventEmitter<string> = new EventEmitter<string>();

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.interval.subscribe(() => {
      this.dataTransfer++;
      this.cd.detectChanges();
    });
  }

  parent(): string {
    this.count++;
    return `Parent rendered ${this.count} times`;
  }

  sendData(event: any) {
    this.fromParentToGP.emit(event);
  }
}
