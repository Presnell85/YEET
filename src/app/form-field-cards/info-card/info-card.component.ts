import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question, QuestionOption } from '@interfaces/index';

@Component({
  selector: 'info-card',
  templateUrl: 'info-card.component.html',
  styleUrls: ['info-card.component.scss']
})
export class InfoComponent {

  @Input() question: Question;

  @Output() infoDump: EventEmitter<QuestionOption> = new EventEmitter<QuestionOption>();

  emitInfoDump(option: QuestionOption) {
    this.infoDump.emit(option);
  }

}
