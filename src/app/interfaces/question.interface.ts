import {QuestionTypes} from './question-type.interface';

export interface Question {
    id: number;
    questionType: QuestionTypes;
    userPrompt: string;
    userReadBackPrompt?: string;
    value?: any;
    options?: QuestionOption[];
    isEnd?: boolean;
}

export interface QuestionOption {
    label: string,
    answer: number,
    next: number,
    link: string,
    compare: string
}

export interface QuestionDictionary {
    [key: number]: Question
}

export function toQuestion(data?: any): Question {
    const question = {
        id: data.id,
        questionType: data.questionType,
        userPrompt: data.userPrompt,
        userReadBackPrompt: data.userReadBackPrompt ? data.userReadBackPrompt : null,
        value: data.value ? data.value : null,
        options: data.options ? data.options.length > 0 ? data.options.map(option => toQuestionOption(option)) : [] : [],
        firstFollowUp: data.firstFollowUp ? data.firstFollowUp : null,
        secondFollowUp: data.secondFollowUp ? data.secondFollowUp : null,
        thirdFollowUp: data.thirdFollowUp ? data.thirdFollowUp : null,
        fourthFollowUp: data.fourthFollowUp ? data.fourthFollowUp : null,
        isEnd: !!data.isEnd
    };

    return question;
}

export function toQuestionOption(data?: any): QuestionOption {
    const option = {
        label: data.label ? data.label : null,
        answer: data.value ? data.value : null,
        next: data.next ? data.next : null,
        link: data.link ? data.link : null,
        compare: data.compare ? data.compare : null
    }
    return option;
}

export function toQuestionDictionary(data?: Array<any>): QuestionDictionary {
    return Object.assign({}, ...data.map(q => ({[q.id]: toQuestion(q)})));
}