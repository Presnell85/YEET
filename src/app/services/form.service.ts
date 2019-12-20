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
            {"label": "Yes", "value": true, "next": 2},
            {"label": "No", "value": false, "next": 3}
        ]
    },
    {
        "id": 2,
        "questionType": "INFO",
        "userPrompt": "We are assuming that you have both Part A & Part B of Medicare, If not this will be a huge waste of time for the both of us. Please press 'Ok' to continue.",
        "userReadBackPrompt": null,
        "value": null,
        "options": [
            {"label": "Ok", "value": true, "next": 4}
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
            {"label": "I'm already retired!", "value": "I'm already retired!", "next": 6}
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
    //         {"label": "I'm already retired!", "value": "I'm already retired!", "next": 6}
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
    //         {"label": "No", "value": false, "next": 7}
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
    //     "options": [
    //     {"label": "6 months or more ago", "compare": "partBSixMonthsOrMore"},
    //     {"label": not more than 6 months ago", "compare": "partBSixMonthsOrMore"}
    // ],
    //     "firstFollowUp": 18,
    //     "secondFollowUp": 9
    // },
    // {
    //     "id": 9,
    //     "questionType": "DATETIME",
    //     "userPrompt": "We are checking our systems to determine your eligibility",
    //     "userReadBackPrompt": "Part B was in effect:",
    //     "value": null,
    //     "options": [
    //         {"label": "in effect", "compare": "partBInEffect"},
    //         {"label": "not in effect", "compare": "partBInEffect"}
    //     ],
    //     "firstFollowUp": 10,
    //     "secondFollowUp": "Open-Enrollment-Page"
    // },
    // {
    //     "id": 10,
    //     "questionType": "MULTISELECT",
    //     "userPrompt": "Do you currently have any coverage in addition to your Medicare?",
    //     "userReadBackPrompt": "Additional coverage to Medicare:",
    //     "value": null,
    //     "options": [
    //         {"label": "Yes", "value": "YES", "next": 13},
    //         {"label": "No", "value": "NO", "link": "Open-Enrollment-Page"},
    //         {"label": "Unsure", "value": "UNSURE", "next": 11}
    //     ],
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
    //     "options": [
    //         {"label": "Yes/I don't know", "value": true, "next": 12},
    //         {"label": "No", "value": false, "next": 13}
    //     ]
    // },
    // {
    //     "id": 12,
    //     "questionType": "BOOLEAN",
    //     "userPrompt": "Do you use the same card at the doctor and the pharmacy?",
    //     "userReadBackPrompt": "Using the same card at the doctor and the pharmacy:",
    //     "value": null,
    //     "options": [
    //             {"label": "Yes", "value": true, "next": 13},
    //             {"label": "No", "value": false, "link": "Open-Enrollment-Page"}
    //         ],
    // },
    // {
    //     "id": 13,
    //     "questionType": "BOOLEAN",
    //     "userPrompt": "Did you sign up for this plan through a former employer's retirement benefit?",
    //     "userReadBackPrompt": "Signed up for a plan through a former employer:",
    //     "value": null,
    //     "options": [
    //         {"label": "Yes", "value": true, "link": "Retirement-Page"},
    //         {"label": "No", "value": false, "link": "MA-Page"}
    //     ]
    // },
    // {
    //     "id": 14,
    //     "questionType": "MULTISELECT",
    //     "userPrompt": "What kind of coverage do you have in addition to your Medicare?",
    //     "userReadBackPrompt": "Additional coverage to your Medicare:",
    //     "value": null,
    //     "options": [
    //         {"label": "Medicare Advantage Plan or Medicaid", "value": "Medicare Advantage Plan or Medicaid", "next": 13},
    //         {"label": "Medigap (Medicare Supplement) and/or a Part D Drug Plan", "value": "Medigap (Medicare Supplement) and/or a Part D Drug Plan", "link": "Open-Enrollment-Page"},
    //         {"label": "I don't see my coverage/I'm not sure", "value": "I don't see my coverage/I'm not sure", "next": 11},
    //         {"label": "Coverage through a current employer", "value": "Coverage through a current employer", "next": 15}
    //     ]
    // },
    // {
    //     "id": 15,
    //     "questionType": "INFO",
    //     "userPrompt": "Often times indiviudals fearing a Medicare premium penalty will start Medicare Part B at 65 while still maintaining coverage through a current employer. This is costly, ineffeicient, and poor coverage. Please press 'Ok' to continue.",
    //     "userReadBackPrompt": null,
    //     "value": null,
    //     "options": [
    //         {"label": "Ok", "value": true, "next": 16}
    //     ]
    // },
    // {
    //     "id": 16,
    //     "questionType": "BOOLEAN",
    //     "userPrompt": "Are you wanting to begin using your Medicare benefits?",
    //     "userReadBackPrompt": "You want to start using your Medicare benefits:",
    //     "value": null,
    //     "options": [
    //         {"label": "Yes", "value": true, "link": "Open-Enrollment-Page"},
    //         {"label": "No", "value": false, "next": 17}
    //     ]
    // },
    // {
    //     "id": 17,
    //     "questionType": "INFO",
    //     "userPrompt": "The client should be informed: they are in their once in a lifetime Open Enrollment Period with Medicare.  Using Original Medicare in coordination with a group employer plan is like having 80% each of 2 very different puzzles and trying to complete 1 full puzzle; they weren't made to work together and there will always be gaps. If the client has no dependents on the plan (or has other Medicare-eligible dependents) or if the client is paying a premium for the group plan, they will likely attain a much higher level of coverage at a better cost with Medicare approved coverage options, such as Medigap or Medicare Advantage Plans. Please press 'Ok' to continue.",
    //     "userReadBackPrompt": null,
    //     "value": null,
    //     "options": [
    //         { "label": "Ok", "value": true, "link": "Open-Enrollment-Page"}
    //     ]
    // },
    // {
    //     "id": 18,
    //     "questionType": "MULTISELECT",
    //     "userPrompt": "Do you currently have any coverage in addition to your Medicare?",
    //     "userReadBackPrompt": "Any additonal coverage to your Medicare:",
    //     "value": null,
    //     "options": [
    //         {"label": "Yes", "value": "YES", "next": 22},
    //         {"label": "No", "value": "NO", "link": "Underwriting-Page"},
    //         {"label": "Not Sure", "value": "UNSURE", "next": 19}
    //     ]
    // },
    // {
    //     "id": 19,
    //     "questionType": "BOOLEAN",
    //     "userPrompt": "Do you pay anything out of a checking or savings account for coverage in addition to your Medicare Part B Premium?",
    //     "userReadBackPrompt": "Ancillary Payments for Part B Premium:",
    //     "value": null,
    //     "options": [
    //         {"label": "Yes/I don't know", "value": true, "next": 20},
    //         {"label": "No", "value": false, "next": 21}
    //     ]
    // },
    // {
    //     "id": 20,
    //     "questionType": "BOOLEAN",
    //     "userPrompt": "Do you use the same card at the doctor and the pharmacy?",
    //     "userReadBackPrompt": "Using the same card at the doctor and the pharmacy:",
    //     "value": null,
    //     "options": [
    //         {"label": "Yes", "value": true, "next": 21},
    //         {"label": "No", "value": false, "link": "Underwriting-Page"}
    //     ]
    // },
    // {
    //     "id": 21,
    //     "questionType": "BOOLEAN",
    //     "userPrompt": "Did you sign up for this plan through a former employer's retirement benefit?",
    //     "userReadBackPrompt": "Signed up for a plan through a former employer:",
    //     "value": null,
    //     "options": [
    //         {"label": "Yes", "value": true, "link": "Retirement-Page"},
    //         {"label": "No", "value": false, "link": "MA-Page"}
    //     ]
    // },
    // {
    //     "id": 22,
    //     "questionType": "MULTISELECT",
    //     "userPrompt": "What kind of coverage do you have in addition to your Medicare?",
    //     "userReadBackPrompt": "Additional coverage to your Medicare:",
    //     "value": null,
    //     "options": [
    //         {"label": "Medicare Advantage Plan or Medicaid", "value": "Medicare Advantage Plan or Medicaid", "next": 21},
    //         {"label": "Medigap (Medicare Supplement) and/or a Part D Drug Plan", "value": "Medigap (Medicare Supplement) and/or a Part D Drug Plan", "link": "Underwriting-Page"},
    //         {"label": "I don't see my coverage/I'm not sure", "value": "I don't see my coverage/I'm not sure", "next": 19},
    //         {"label": "Coverage through a current employer", "value": "Coverage through a current employer", "next": 23}
    //     ]
    // },
    // {
    //     "id": 23,
    //     "questionType": "INFO",
    //     "userPrompt": "Often times indiviudals fearing a Medicare premium penalty will start Medicare Part B at 65 while still maintaining coverage through a current employer. This is costly, ineffeicient, and poor coverage. Please press 'Ok' to continue.",
    //     "userReadBackPrompt": null,
    //     "value": null,
    //     "options": [
    //         {"label": "Ok", "value": true, "next": 24}
    //     ]
    // },
    // {
    //     "id": 24,
    //     "questionType": "BOOLEAN",
    //     "userPrompt": "Are you planning on retiring in the next 60 days?",
    //     "userReadBackPrompt": "Are you planning on retiring in the next 60 days:",
    //     "value": null,
    //     "options": [
    //         {"label": "Yes", "value": true, "link": "Guaranteed-Insured-Page"},
    //         {"label": "No", "value": false, "next": 25}
    //     ]
    // },
    // {
    //     "id": 25,
    //     "questionType": "BOOLEAN",
    //     "userPrompt": "Are you wanting to begin using your Medicare benefits?",
    //     "userReadBackPrompt": "Are you wanting to begin using your Medicare benefits:",
    //     "value": null,
    //     "options": [
    //         {"label": "Yes", "value": true, "next": 27},
    //         {"label": "No", "value": false, "next": 26}
    //     ]
    // },
    // {
    //     "id": 26,
    //     "questionType": "INFO",
    //     "userPrompt": "Using Original Medicare in coordination with a group employer plan is like having 80% of 2 very different puzzles and trying to complete 1 full puzzle; they weren't made to work together and there will always be gaps. If the client has no dependents on the plan (or has other Medicare-eligible dependents) or if the client is paying a premium for the group plan, they will likely attain a much higher level of coverage at a better cost with Medicare approved coverage options, such as Medigap or Medicare Advantage Plans. Please press 'Ok' to continue.",
    //     "userReadBackPrompt": null,
    //     "value": null,
    //     "options": [
    //         {"label": "Ok", "value": true, "next": 25}
    //     ]
    // },
    // {
    //     "id": 26,
    //     "questionType": "BOOLEAN",
    //     "userPrompt": "Are you currently in an Open Enrollment for your employer plan?",
    //     "userReadBackPrompt": "You are currently in Open Enrollment with your employer's plan:",
    //     "value": null,
    //     "options": [
    //         {"label": "Yes", "value": true, "link": "Quaranteed-Insured-Page"},
    //         {"label": "No", "value": false, "next": 27}
    //     ]
    // },
    // {
    //     "id": 27,
    //     "questionType": "BOOLEAN",
    //     "userPrompt": "Will your employer let you leave your plan in the middle of the year?",
    //     "userReadBackPrompt": "Your employer will let you leave your plan in the middle of the year:",
    //     "value": null,
    //     "options": [
    //         {"label": "Yes", "value": true, "next": 28},
    //         {"label": "No", "value": false, "link": "Schedule-Call-Page"}
    //     ]
    // },
    // {
    //     "id": 28,
    //     "questionType": "BOOLEAN",
    //     "userPrompt": "Contact your employer's benefits administrator (usually an individual in HR) to confirm this possibility",
    //     "userReadBackPrompt": "Confirmation by your employer's benefits administrator:",
    //     "value": null,
    //     "options": [
    //         {"label": "Confirmed", "value": true, "link": "Guaranteed-Insured-Page"},
    //         {"label": "Unconfirmed", "value": false, "link": "Schedule-Call-Page"}
    //     ]
    // }
]