import { Component } from '@angular/core';
import { QuestionDictionary, Question } from '@interfaces/index';
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
    console.log('The questions: ', this.questions);
    console.log('The viewed question: ', this.questions[1]);
    return this.questions[this.currentQuestionIndex];
  }

  constructor(private formService: FormService) {
    this.questions = this.formService.getQuestions();
    this.currentQuestionIndex = 1;
  }

}
