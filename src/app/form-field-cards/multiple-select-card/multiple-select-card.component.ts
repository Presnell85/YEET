import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question, QuestionOption } from '@interfaces/index';

@Component({
selector: 'multi-card',
templateUrl: 'multiple-select-card.component.html',
})
export class MultiSelectComponent {
    @Input() question: Question;

    @Output() multiAnswer: EventEmitter<QuestionOption> = new EventEmitter<QuestionOption>();

    constructor() {}

    emitMultiAnswer(option: QuestionOption) {
        this.multiAnswer.emit(option);
    }
}