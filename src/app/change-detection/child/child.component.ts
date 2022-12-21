import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {
  count: number = 0;
  @Input() dataTransfer!: number;
  constructor() {}

  ngOnInit(): void {}

  child(): string {
    this.count++;
    return `Child rendered ${this.count} times`;
  }
}
