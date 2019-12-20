import { Component } from '@angular/core';
import { QuestionDictionary, Question, QuestionOption } from '@interfaces/index';
import { FormService } from '@services/index';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-form',
  templateUrl: 'form.page.html',
  styleUrls: ['form.page.scss'],
})
export class FormPage {
  questions: QuestionDictionary;
  currentQuestionIndex: number;
  showIEPPage: boolean = false;

  get question(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  constructor(private formService: FormService, private router: Router) {
    this.questions = this.formService.getQuestions();
    this.currentQuestionIndex = 1;
    this.showIEPPage = false;
    console.log('The routes: ', this.router.config);
  }

  submitBoolQuestion(option: any) {
    this.questions[this.currentQuestionIndex].value = option.answer;
    if (option.next) {
      console.log('What is next?: ', option.next, this.questions[option.next]);
    this.currentQuestionIndex = option.next;
    }
    if (option.link) {
      this.router.navigateByUrl('/form/' + option.link);
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

  submitDatetimeQuestion(payload: {option: QuestionOption, dateEntered: Date}) {
    const nowDate = new Date();
    const nowYear = nowDate.getFullYear();
    const nowMonth = nowDate.getMonth();
    const nowDay = nowDate.getDay();
    const ageLowBar = new Date(nowYear - 64, nowMonth - 3, nowDay);
    const ageHighBar = new Date(nowYear - 75, nowMonth - 9, nowDay);
    const endOfJan = new Date(nowYear, 1, 31);
    const endOfMarch = new Date(nowYear, 3, 31);
    const partBSixMonthCutoff = new Date(nowYear, nowMonth -6);

    console.log('About to compare dates: ', payload, nowDate);
    switch(payload.option.compare) {
      case 'dateOfBirth':
        if (payload.dateEntered > ageLowBar) {
          this.currentQuestionIndex = 4;
        } else if (payload.dateEntered < ageLowBar && payload.dateEntered > ageHighBar) {
          this.router.navigateByUrl('/form/IEP-Page');
        } else if (payload.dateEntered < ageHighBar) {
          this.currentQuestionIndex = 5;
        }
        break;
      case 'janToMarch':
        if ((payload.dateEntered > endOfJan) && (payload.dateEntered < endOfMarch)) {
          this.router.navigateByUrl('/form/GEP-Page');
        } else {
          this.router.navigateByUrl('/form/Schedule-Call-Page');
        }
        break;
        case 'partB':
          if (payload.dateEntered < partBSixMonthCutoff) {
            this.currentQuestionIndex = 18;
          } else if (payload.dateEntered < nowDate) {
            this.currentQuestionIndex = 10;
          } else if (payload.dateEntered > nowDate) {
            this.router.navigateByUrl('/form/Open-Enrollment-Page');
          }
          break;
    }
  }

}
