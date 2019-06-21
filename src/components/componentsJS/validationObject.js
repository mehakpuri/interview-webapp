import functions from "./validationFunctions";

var workHistoryCount = 1

const validationObject = {
    'Personal' : { 
                'name' : {
                    'name' : 'name',
                    'validationFunc': ['functions.isEmpty', 'functions.textPattern'],
                    'isValid': true,
                    'value': ''
                },
                'email' : {
                    'name' : 'email',
                    'validationFunc': ['functions.isEmpty', 'functions.emailPattern'],
                    'isValid': true,
                    'value': ''
                },
                'qualification' : {
                    'name' : 'qualification',
                    'validationFunc': ['functions.isEmpty'],
                    'isValid': true,
                    'value': ''
                },
                'university' : {
                    'name' : 'university',
                    'validationFunc': ['functions.isEmpty', 'functions.textPattern'],
                    'isValid': true,
                    'value': ''
                },
                'major' : {
                    'name' : 'major',
                    'validationFunc': ['functions.isEmpty', 'functions.textPattern'],
                    'isValid': true,
                    'value': ''
                },
                'graduation' : {
                    'name' : 'graduation',
                    'validationFunc': ['functions.isDropdownEmpty'],
                    'isValid': true,
                    'value': ''
                },
                'tax' : {
                    'name' : 'tax',
                    'validationFunc': ['functions.isEmpty'],
                    'isValid': true,
                    'value': ''
                },
                'phone' : {
                    'name' : 'phone',
                    'validationFunc': ['functions.isEmpty', 'functions.phonePattern'],
                    'isValid': true,
                    'value': ''
                }
        },
    'Profile' : {
                'about' : {
                    'name' : 'about',
                    'validationFunc': ['functions.isEmpty', 'functions.textPattern'],
                    'isValid': true,
                    'value': ''
                },
                'experience' : {
                    'name' : 'experience',
                    'validationFunc': ['functions.isEmpty', 'functions.textPattern'],
                    'isValid': true,
                    'value': ''
                },
                'workHistory' : [{
                        'name' : 'workHistory_1',
                        'validationFunc': ['functions.isEmpty', 'functions.textPattern'],
                        'isValid': true,
                        'value': ''
                    }
                ],
                'activeFrom' : [  {
                            'name' : 'activeFrom_1',
                            'validationFunc': ['functions.isDropdownEmpty'],
                            'isValid': true,
                            'value': ''
                        }
                    ],
                'activeTo' : [ {
                        'name' : 'activeTo_1',
                        'validationFunc': ['functions.isDropdownEmpty', 'functions.checkValue'],
                        'isValid': true,
                        'value': ''
                    }
                ],
                'education' : [{
                        'name' : 'education',
                        'validationFunc': ['functions.isEmpty', 'functions.textPattern'],
                        'isValid': true,
                        'value': ''
                    }
                ],
                'enrolled' : [ {
                        'name' : 'enrolled',
                        'validationFunc': ['functions.isDropdownEmpty'],
                        'isValid': true,
                        'value': ''
                    }
                ],
                'graduated' : [ {
                        'name' : 'graduated',
                        'validationFunc': ['functions.isDropdownEmpty','functions.checkValue'],
                        'isValid': true,
                        'value': ''
                    }
                ]
    },
    'Expertise' : {
            'item' : {
                'name' : 'list-1',
                'validationFunc' : ['functions.isCheckboxEmpty'],
                'isValid' : true,
                'value' :  { '1' : [],
                             '2' : [],
                             '3' : []
                            }
            }
    },
    'Interview' : {
        'question-1' : {
            'name' : 'question-1',
            'validationFunc': ['functions.isEmpty'],
            'isValid': true,
            'value': ''
        },
        'question-2' : {
            'name' : 'question-2',
            'validationFunc': ['functions.isEmpty'],
            'isValid': true,
            'value': ''
        },
        'question-3' : {
            'name' : 'question-3',
            'validationFunc': ['functions.isEmpty'],
            'isValid': true,
            'value': ''
        },
        'question-4' : {
            'name' : 'question-4',
            'validationFunc': ['functions.isEmpty'],
            'isValid': true,
            'value': ''
        }
    }

}

// function addDynamicWork(field) {
//     console.log("in dynamic")
//     workHistoryCount++
//     var workHistoryObj = {
//         'name' : 'workHistory' + workHistoryCount,
//         'validationFunc': ['functions.isEmpty', 'functions.textPattern'],
//         'isValid': true,
//         'value': ''
//     }
//     validationObject['Profile'].workHistory.push(workHistoryObj)

//     var activeFromObj = {
//             'name' : 'activeFrom' + workHistoryCount,
//             'validationFunc': ['functions.isDropdownEmpty'],
//             'isValid': true,
//             'value': ''
//     }
//     validationObject['Profile'].activeFrom.push(activeFromObj)

//     var activeToObj = {
//         'name' : 'activeTo' + workHistoryCount,
//         'validationFunc': ['functions.isDropdownEmpty'],
//         'isValid': true,
//         'value': ''
//     }
//     validationObject['Profile'].activeTo.push(activeToObj)

//     return validationObject['Profile']
// }


var DataObject = {
    'validation' : validationObject,
    
}

export default DataObject