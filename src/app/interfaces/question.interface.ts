import {QuestionTypes} from './question-type.interface';

export interface Question {
    id: number;
    questionType: QuestionTypes;
    userPrompt: string;
    userReadBackPrompt?: string;
    value?: any;
    options?: any;
    firstFollowUp?: any;
    secondFollowUp?: any;
    thirdFollowUp?: any;
    fourthFollowUp?: any;
    isEnd?: boolean;
}