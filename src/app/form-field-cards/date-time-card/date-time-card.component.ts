import { Component, Input, Output, EventEmitter } from '@angular/core';
import { QuestionDictionary, Question, QuestionOption } from '@interfaces/index';

@Component({
  selector: 'date-time-card',
  templateUrl: 'date-time-card.component.html',
  styleUrls: ['date-time-card.component.scss']
})
export class DateTimeComponent {
  dateEntered: Date;

  @Input() question: Question;

  @Output() dateTimeAnswer = new EventEmitter<{option: QuestionOption, dateEntered: Date}>();

  constructor() {
    this.dateEntered = new Date();
  }

  sendDateTime(option: QuestionOption) {
    this.dateTimeAnswer.emit({option, dateEntered: new Date(this.dateEntered)});
  }
}
