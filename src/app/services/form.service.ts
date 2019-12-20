import { Question, toQuestionDictionary, QuestionDictionary } from '@interfaces/question.interface';

export class FormService {
    questionDictionary: {[key: number]: Question};
    constructor() {
        this.questionDictionary = toQuestionDictionary(emptyQuestionArray);
    }

    getQuestions(): QuestionDictionary {
        return this.questionDictionary;
    }

}

const emptyQuestionArray = [
    {
        "id": 1,
        "questionType": "BOOLEAN",
        "userPrompt": "Are you on Medicare now?",
        "userReadBackPrompt": "Currently on Medicare:",
        "value": null,
        "options": [
            {"label": "Yes", "value": true, "link": 2},
            {"label": "No", "value": false, "link": 3}
        ]
    },
    {
        "id": 2,
        "questionType": "INFO",
        "userPrompt": "We are assuming that you have both Part A & Part B of Medicare, If not this will be a huge waste of time for the both of us. Please press 'Ok' to continue.",
        "userReadBackPrompt": null,
        "value": null,
        "options": [
            {"label": "Ok", "value": true, "link": 8}
        ],
    },
    {
        "id": 3,
        "questionType": "DATETIME",
        "userPrompt": "What is your date of birth?",
        "userReadBackPrompt": "Your Date of Birth:",
        "value": null,
        "options": [
            {"label": "Please enter your date of birth:", "compare": "dateOfBirth"}
        ],
        // "firstFollowUp": "IEP-Page",
        // "secondFollowUp": 4,
        // "thirdFollowUp": 5
    },
    {
        //==================THIS IS A TEST PLACEMENT===========REMOVE BEFORE DEMO AND UNCOMMENT EVERYTHING ELSE=========
        "id": 4,
        "questionType": "MULTISELECT",
        "userPrompt": "Are you or a spouse contemplating retirement in the next three months?",
        "userReadBackPrompt": "Contemplating retirement in next three months:",
        "value": null,
        "options": [
            {"label": "Yes, I am.", "value": "Yes, I am.", "link": "SEP-Page"},
            {"label": "No, I intend to keep working.", "value": "No, I intend to keep working.", "link": "No-Medicare-Page"},
            {"label": "I'm already retired!", "value": "I'm already retired!", "link": 6}
        ]
    },
    // {
    //     "id": 4,
    //     "questionType": "BOOLEAN",
    //     "userPrompt": "Do you qualify for Medicare due to Social Security Disability?",
    //     "userReadBackPrompt": "Qualified for Medicare due to Social Security Disability:",
    //     "value": null,
    //     "options": [
    //         {"label": "Yes", "value": true, "link": "IEP-Page"},
    //         {"label": "No", "value": false, "link": "No-Medicare-Page"}
    //     ]
    // },
    // {
    //     "id": 5,
    //     "questionType": "MULTISELECT",
    //     "userPrompt": "Are you or a spouse contemplating retirement in the next three months?",
    //     "userReadBackPrompt": "Contemplating retirement in next three months:",
    //     "value": null,
    //     "options": [
    //         {"label": "Yes, I am.", "value": "Yes, I am.", "link": "SEP-Page"},
    //         {"label": "No, I intend to keep working.", "value": "No, I intend to keep working.", "link": "No-Medicare-Page"},
    //         {"label": "I'm already retired!", "value": "I'm already retired!", "link": 6}
    //     ]
    // },
    // {
    //     "id": 6,
    //     "questionType": "BOOLEAN",
    //     "userPrompt": "Did you or a spouse retire or lose employer-based coverage in the last eight months?",
    //     "userReadBackPrompt": "Retired or lost employer-based coverage in last eight months:",
    //     "value": null,
    //     "options": [
    //         {"label": "Yes", "value": true, "link": "SEP-Page"},
    //         {"label": "No", "value": false, "link": 7}
    //     ]
    // },
    // {
    //     "id": 7,
    //     "questionType": "DATETIME",
    //     "userPrompt": "We are checking our systems to determine your eligibility",
    //     "userReadBackPrompt": "Checking if it is currently between January 31st and March 31st:",
    //     "value": null,
    //     "options": [
    //         {"compare": "janToMarch"}
    //     ],
    //     // "firstFollowUp": "GEP-Page",
    //     // "secondFollowUp": "Schedule-Call-Page"
    // },
    // {
    //     "id": 8,
    //     "questionType": "DATETIME",
    //     "userPrompt": "What is the effective date on your Part B of Medicare?",
    //     "userReadBackPrompt": "The effective date on your Part B of Medicare:",
    //     "value": null,
    //     "options": ["6 months or more ago", "not more than 6 months ago"],
    //     "firstFollowUp": 18,
    //     "secondFollowUp": 9
    // },
    // {
    //     "id": 9,
    //     "questionType": "DATETIME",
    //     "userPrompt": "We are checking our systems to determine your eligibility",
    //     "userReadBackPrompt": "Part B was in effect:",
    //     "value": null,
    //     "options": ["in effect", "not in effect"],
    //     "firstFollowUp": 10,
    //     "secondFollowUp": "Open-Enrollment-Page"
    // },
    // {
    //     "id": 10,
    //     "questionType": "MULTISELECT",
    //     "userPrompt": "Do you currently have any coverage in addition to your Medicare?",
    //     "userReadBackPrompt": "Additional coverage to Medicare:",
    //     "value": null,
    //     "options": ["Yes", "No", "Unsure"],
    //     "firstFollowUp": 13,
    //     "secondFollowUp": "Open-Enrollment-Page",
    //     "thirdFollowUp": 11
    // },
    // {
    //     "id": 11,
    //     "questionType": "BOOLEAN",
    //     "userPrompt": "Do you pay anything out of pocket of a checking or savings account for coverage in addition to your Medicare Part B Premium?",
    //     "userReadBackPrompt": "Ancillary Payments for Part B Premium:",
    //     "value": null,
    //     "options": ["Yes/I don't know", "No"],
    //     "firstFollowUp": 12,
    //     "secondFollowUp": 13
    // },
    // {
    //     "id": 12,
    //     "questionType": "BOOLEAN",
    //     "userPrompt": "Do you use the same card at the doctor and the pharmacy?",
    //     "userReadBackPrompt": "Using the same card at the doctor and the pharmacy:",
    //     "value": null,
    //     "options": ["Yes", "No"],
    //     "firstFollowUp": 13,
    //     "secondFollowUp": "Open-Enrollment-Page"
    // },
    // {
    //     "id": 13,
    //     "questionType": "BOOLEAN",
    //     "userPrompt": "Did you sign up for this plan through a former employer's retirement benefit?",
    //     "userReadBackPrompt": "Signed up for a plan through a former employer:",
    //     "value": null,
    //     "options": ["Yes", "No"],
    //     "firstFollowUp": "Retirement-Page",
    //     "secondFollowUp": "MA-Page"
    // },
    // {
    //     "id": 14,
    //     "questionType": "MULTISELECT",
    //     "userPrompt": "What kind of coverage do you have in addition to your Medicare?",
    //     "userReadBackPrompt": "Additional coverage to your Medicare:",
    //     "value": null,
    //     "options": ["Medicare Advantage Plan or Medicaid", "Medigap (Medicare Supplement) and/or a Part D Drug Plan", "I don't see my coverage/I'm not sure", "Coverage through a current employer"],
    //     "firstFollowUp": 13,
    //     "secondFollowUp": "Open-Enrollment-Page",
    //     "thirdFollowUp": 11,
    //     "fourthFollowUp": 15
    // },
    // {
    //     "id": 15,
    //     "questionType": "INFO",
    //     "userPrompt": "Often times indiviudals fearing a Medicare premium penalty will start Medicare Part B at 65 while still maintaining coverage through a current employer. This is costly, ineffeicient, and poor coverage. Please press 'Ok' to continue.",
    //     "userReadBackPrompt": null,
    //     "value": null,
    //     "options": null,
    //     "firstFollowUp": 16
    // },
    // {
    //     "id": 16,
    //     "questionType": "BOOLEAN",
    //     "userPrompt": "Are you wanting to begin using your Medicare benefits?",
    //     "userReadBackPrompt": "You want to start using your Medicare benefits:",
    //     "value": null,
    //     "options": ["Yes", "No"],
    //     "firstFollowUp": "Open-Enrollment-Page",
    //     "secondFollowUp": 17
    // },
    // {
    //     "id": 17,
    //     "questionType": "INFO",
    //     "userPrompt": "The client should be informed: they are in their once in a lifetime Open Enrollment Period with Medicare.  Using Original Medicare in coordination with a group employer plan is like having 80% each of 2 very different puzzles and trying to complete 1 full puzzle; they weren't made to work together and there will always be gaps. If the client has no dependents on the plan (or has other Medicare-eligible dependents) or if the client is paying a premium for the group plan, they will likely attain a much higher level of coverage at a better cost with Medicare approved coverage options, such as Medigap or Medicare Advantage Plans. Please press 'Ok' to continue.",
    //     "userReadBackPrompt": null,
    //     "value": null,
    //     "options": null,
    //     "firstFollowUp": "Open-Enrollment-Page"
    // },
    // {
    //     "id": 18,
    //     "questionType": "MULTISELECT",
    //     "userPrompt": "Do you currently have any coverage in addition to your Medicare?",
    //     "userReadBackPrompt": "Any additonal coverage to your Medicare:",
    //     "value": null,
    //     "options": ["Yes", "No", "Not Sure"],
    //     "firstFollowUp": null,
    //     "secondFollowUp": "Open-Enrollment-Page",
    //     "thirdFollowUp": 19
    // },
    // {
    //     "id": 19,
    //     "questionType": "BOOLEAN",
    //     "userPrompt": "Do you pay anything out of a checking or savings account for coverage in addition to your Medicare Part B Premium?",
    //     "userReadBackPrompt": "Ancillary Payments for Part B Premium:",
    //     "value": null,
    //     "options": ["Yes/I don't know", "No"],
    //     "firstFollowUp": 20,
    //     "secondFollowUp": 21
    // },
    // {
    //     "id": 20,
    //     "questionType": "BOOLEAN",
    //     "userPrompt": "Do you use the same card at the doctor and the pharmacy?",
    //     "userReadBackPrompt": "Using the same card at the doctor and the pharmacy:",
    //     "value": null,
    //     "options": ["Yes", "No"],
    //     "firstFollowUp": 21,
    //     "secondFollowUp": "Underwriting-Page"
    // },
    // {
    //     "id": 21,
    //     "questionType": "BOOLEAN",
    //     "userPrompt": "Did you sign up for this plan through a former employer's retirement benefit?",
    //     "userReadBackPrompt": "Signed up for a plan through a former employer:",
    //     "value": null,
    //     "options": ["Yes", "No"],
    //     "firstFollowUp": "Retirement-Page",
    //     "secondFollowUp": "MA-Page"
    // },
    // {
    //     "id": 22,
    //     "questionType": "MULTISELECT",
    //     "userPrompt": "What kind of coverage do you have in addition to your Medicare?",
    //     "userReadBackPrompt": "Additional coverage to your Medicare:",
    //     "value": null,
    //     "options": ["Medicare Advantage Plan or Medicaid", "Medigap (Medicare Supplement) and/or a Part D Drug Plan", "I don't see my coverage/I'm not sure", "Coverage through a current employer"],
    //     "firstFollowUp": 21,
    //     "secondFollowUp": "Underwriting-Page",
    //     "thirdFollowUp": 19,
    //     "fourthFollowUp": 23
    // },
    // {
    //     "id": 23,
    //     "questionType": "INFO",
    //     "userPrompt": "Often times indiviudals fearing a Medicare premium penalty will start Medicare Part B at 65 while still maintaining coverage through a current employer. This is costly, ineffeicient, and poor coverage. Please press 'Ok' to continue.",
    //     "userReadBackPrompt": null,
    //     "value": null,
    //     "options": null,
    //     "firstFollowUp": 24
    // },
    // {
    //     "id": 24,
    //     "questionType": "BOOLEAN",
    //     "userPrompt": "Are you planning on retiring in the next 60 days?",
    //     "userReadBackPrompt": "Are you planning on retiring in the next 60 days:",
    //     "value": null,
    //     "options": ["Yes", "No"],
    //     "firstFollowUp": "Guaranteed-Insured-Page",
    //     "secondFollowUp": 25
    // },
    // {
    //     "id": 25,
    //     "questionType": "BOOLEAN",
    //     "userPrompt": "Are you wanting to begin using your Medicare benefits?",
    //     "userReadBackPrompt": "Are you wanting to begin using your Medicare benefits:",
    //     "value": null,
    //     "options": ["Yes", "No"],
    //     "firstFollowUp": 27,
    //     "secondFollowUp": 26
    // },
    // {
    //     "id": 26,
    //     "questionType": "INFO",
    //     "userPrompt": "Using Original Medicare in coordination with a group employer plan is like having 80% of 2 very different puzzles and trying to complete 1 full puzzle; they weren't made to work together and there will always be gaps. If the client has no dependents on the plan (or has other Medicare-eligible dependents) or if the client is paying a premium for the group plan, they will likely attain a much higher level of coverage at a better cost with Medicare approved coverage options, such as Medigap or Medicare Advantage Plans. Please press 'Ok' to continue.",
    //     "userReadBackPrompt": null,
    //     "value": null,
    //     "options": null,
    //     "isEnd": true
    // },
    // {
    //     "id": 26,
    //     "questionType": "BOOLEAN",
    //     "userPrompt": "Are you currently in an Open Enrollment for your employer plan?",
    //     "userReadBackPrompt": "You are currently in Open Enrollment with your employer's plan:",
    //     "value": null,
    //     "options": ["Yes", "No"],
    //     "firstFollowUp": "Guaranteed-Insured-Page",
    //     "secondFollowUp": 27
    // },
    // {
    //     "id": 27,
    //     "questionType": "BOOLEAN",
    //     "userPrompt": "Will your employer let you leave your plan in the middle of the year?",
    //     "userReadBackPrompt": "Your employer will let you leave your plan in the middle of the year:",
    //     "value": null,
    //     "options": ["Yes", "No"],
    //     "firstFollowUp": 28,
    //     "secondFollowUp": "Schedule-Call-Page"
    // },
    // {
    //     "id": 28,
    //     "questionType": "BOOLEAN",
    //     "userPrompt": "Contact your employer's benefits administrator (usually an individual in HR) to confirm this possibility",
    //     "userReadBackPrompt": "Confirmation by your employer's benefits administrator:",
    //     "value": null,
    //     "options": ["Confirmed", "Unconfirmed"],
    //     "firstFollowUp": "Guaranteed-Insured-Page",
    //     "secondFollowUp": "Schedule-Call-Page"
    // }
]