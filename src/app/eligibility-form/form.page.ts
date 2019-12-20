import { Component } from '@angular/core';
import { QuestionDictionary, Question, QuestionOption } from '@interfaces/index';
import { FormService } from '@services/index';
import { isNullOrUndefined } from 'util';

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

  submitBoolQuestion(option: any) {
    this.questions[this.currentQuestionIndex].value = option.answer;
    if (option.next) {
      console.log('What is next?: ', option.next, this.questions[option.next]);
    this.currentQuestionIndex = option.next;
    }
    if (option.link) {
      // Route to page using select case to determine which card to show.
    }
  }

  submitMultiQuestion(option: QuestionOption) {
    this.questions[this.currentQuestionIndex].value = option.answer;
    if (option.next) {
      this.currentQuestionIndex = option.next;
    }
    if (option.link) {
      // Route to page using select case to determine which card to show.
    }
  }

  submitInfoDump(option: QuestionOption) {
    this.questions[this.currentQuestionIndex].value = option.answer;
    if (option.next) {
      this.currentQuestionIndex = option.next;
    }
    if (option.link) {
      // Route to page using select case to determine which card to show.
    }
  }

}
