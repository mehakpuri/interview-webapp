import DataObject from './validationObject.js'
import DropdownOption from '../DropdownOption.vue'
import FooterButtons from '../FooterButtons.vue'
import functions from './validationFunctions.js'
import clickObject from './clickEvent.js';
import {mapGetters} from 'vuex'

export default {
    name: 'Profile',
    data() {
        return {
            pageObject : DataObject['validation']['Profile'],
            handleLink : clickObject.handleLink,
            workHistory: [{
                'name': 'workHistory_1',
                'validationFunc': ['functions.isEmpty', 'functions.textPattern'],
                'isValid': true,
                'value': ''
            }],
            activeFrom: [{
                'name' : 'activeFrom_1',
                'validationFunc': ['functions.isDropdownEmpty'],
                'isValid': true,
                'value': ''
            }],
            activeTo : [ {
                'name' : 'activeTo_1',
                'validationFunc': ['functions.isDropdownEmpty', 'functions.checkValue'],
                'isValid': true,
                'value': ''
            }
            ],
            education: [{
                'name': 'education_1',
                'validationFunc': ['functions.isEmpty', 'functions.textPattern'],
                'isValid': true,
                'value': ''
            }],
            enrolled: [{
                'name' : 'enrolled_1',
                'validationFunc': ['functions.isDropdownEmpty'],
                'isValid': true,
                'value': ''
            }],
            graduated : [ {
                'name' : 'graduated_1',
                'validationFunc': ['functions.isDropdownEmpty', 'functions.checkValue'],
                'isValid': true,
                'value': ''
            }
            ],
            workHistoryIndex: 1,
            educationIndex: 1
        }
    },
    computed: {
        ...mapGetters(['getJobCount','getSchoolCount'])
    },
    created() {
        
        if(sessionStorage.getItem('validationObject')!=null){
            DataObject['validation'] = 
                JSON.parse(sessionStorage.getItem('validationObject'))

            this.pageObject = DataObject['validation']['Profile']
            
            this.workHistoryIndex = this.pageObject['workHistory'].length
            this.workHistory =  this.pageObject['workHistory']
            this.activeFrom =  this.pageObject['activeFrom']
            this.activeTo =  this.pageObject['activeTo']

            this.educationIndex = this.pageObject['education'].length
            this.education =  this.pageObject['education']
            this.enrolled =  this.pageObject['enrolled']
            this.graduated =  this.pageObject['graduated']
 
        }  

    },
    methods: {
        changeValue(e) {
            debugger
            if(e.target.id.split('-')[0] =='work' || e.target.id.split('-')[0] =='education' )
            {
                var arrayLength = e.target.id.split('-').length
                var index = parseInt(e.target.id.split('-')[arrayLength - 1]) - 1
                if(e.target.id.split('-')[0] =='work')
                    var value = this.pageObject['workHistory'][index]['value']
                else
                    var value = this.pageObject['education'][index]['value']
                debugger
            }
            else
                var value = this.pageObject[e.target.id].value

            functions.handleChange('Profile',e.target,value)
        },
        handleDynamicWork () {
            this.workHistoryIndex++
            let newWorkObj = {
                'name': 'workHistory_'+ this.workHistoryIndex,
                'validationFunc': ['functions.isEmpty', 'functions.textPattern'],
                'isValid': true,
                'value': ''
            }
            this.workHistory.push(newWorkObj)

            let newActiveFromObj = {
                'name': 'activeFrom_'+ this.workHistoryIndex,
                'validationFunc': ['functions.isDropdownEmpty'],
                'isValid': true,
                'value': ''
            }
            this.activeFrom.push(newActiveFromObj)

            let newActiveToObj = {
                'name': 'activeTo_'+ this.workHistoryIndex,
                'validationFunc': ['functions.isDropdownEmpty', 'functions.checkValue'],
                'isValid': true,
                'value': ''
            }
            this.activeTo.push(newActiveToObj)

            this.pageObject.workHistory = this.workHistory
            this.pageObject.activeFrom = this.activeFrom
            this.pageObject.activeTo = this.activeTo
            
        },
        handleDynamicEdu() {
            this.educationIndex++
            let newEduObj = {
                'name': 'education_'+ this.educationIndex,
                'validationFunc': ['functions.isEmpty', 'functions.textPattern'],
                'isValid': true,
                'value': ''
            }
            this.education.push(newEduObj)

            let newEnrolledObj = {
                'name': 'enrolled_'+ this.educationIndex,
                'validationFunc': ['functions.isDropdownEmpty'],
                'isValid': true,
                'value': ''
            }
            this.enrolled.push(newEnrolledObj)

            let newGraduatedObj = {
                'name': 'graduated_'+ this.educationIndex,
                'validationFunc': ['functions.isDropdownEmpty', 'functions.checkValue'],
                'isValid': true,
                'value': ''
            }
            this.graduated.push(newGraduatedObj)

            this.pageObject.education = this.education
            this.pageObject.enrolled = this.enrolled
            this.pageObject.graduated = this.graduated
        }
    },
    components: {
        DropdownOption,
        FooterButtons
    }
}