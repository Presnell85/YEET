import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question, QuestionOption } from '@interfaces/index';

@Component({
  selector: 'bool-card',
  templateUrl: 'boolean-card.component.html',
  styleUrls: ['boolean-card.component.scss']
})
export class BooleanComponent {
    @Input() question: Question;

    @Output() boolAnswer: EventEmitter<QuestionOption> = new EventEmitter<QuestionOption>();

    constructor() {}

    emitBoolQuestion(option: QuestionOption) {
      console.log('About to emit option selected: ', option);
        this.boolAnswer.emit(option);
    }
}
