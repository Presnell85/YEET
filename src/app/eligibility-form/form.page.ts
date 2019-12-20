import { Component } from '@angular/core';
import { QuestionDictionary, Question, QuestionOption } from '@interfaces/index';
import { FormService } from '@services/index';

@Component({
  selector: 'app-form',
  templateUrl: 'form.page.html',
  styleUrls: ['form.page.scss'],
})
export class FormPage {
  questions: QuestionDictionary;
  currentQuestionIndex: number;

  get question(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  constructor(private formService: FormService) {
    this.questions = this.formService.getQuestions();
    this.currentQuestionIndex = 1;
  }

  submitBoolQuestion(option: QuestionOption) {
    this.questions[this.currentQuestionIndex].value = option.value;
    this.currentQuestionIndex = +option.next;
  }

  submitMultiQuestion(option: QuestionOption) {

  }

}
