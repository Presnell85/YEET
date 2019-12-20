import { Component, Input, Output, EventEmitter } from '@angular/core';
import { QuestionDictionary, Question, QuestionOption } from '@interfaces/index';

@Component({
  selector: 'bool-field',
  templateUrl: 'boolean-card.component.html',
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
