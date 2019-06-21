import DataObject from "./validationObject";
import FooterButtons from '../FooterButtons.vue'

export default {
    name: 'Interview',
    data() {
        return {
            activeQuestion : DataObject['validation']['Interview']['question-1']
        }
    },
    created() {
        if(sessionStorage.getItem('validationObject')!=null){
            console.log("fetch")
            DataObject['validation'] = 
                JSON.parse(sessionStorage.getItem('validationObject'))
            
            this.activeQuestion = DataObject['validation']['Interview']['question-1']  

        }  
    },
    methods: {
        getTitle() {
            return this.activeQuestion.name.split('-')[1]
        },
        changeQuestion(e) {
            this.activeQuestion = DataObject['validation']['Interview'][e.target.id]
        },
        checkNotEmpty(index) {
            var question = 'question-'+index
            if(DataObject['validation']['Interview'][question]['value'] == '')
                return false
            else 
                return true
        },
        checkPrevious() {
            if(this.activeQuestion.name.split('-')[1] == 1)
                return false
            return true
        },
        checkNext() {
            if(this.activeQuestion.name.split('-')[1] == 4)
                return false
            return true
        },
        quesChange(e) {
            var number = parseInt(this.activeQuestion.name.split('-')[1])
            debugger
            if(e.target.id == 'next') {
                this.activeQuestion = DataObject['validation']['Interview']['question-'+(number+1)]
            }
            else if(e.target.id == 'previous') {
                this.activeQuestion = DataObject['validation']['Interview']['question-'+(number-1)]
            }
        },
        checkDisabled() {
            var form = DataObject['validation']['Interview']
            for(var obj in form) {
                if (form[obj]['value'] ==''){
                    return false
                }
            }
            return true
        }
    },
    components: {
        FooterButtons
    }
}