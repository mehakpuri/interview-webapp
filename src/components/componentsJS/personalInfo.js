import DataObject from './validationObject.js'
import functions from './validationFunctions.js'
import FooterButtons from '../FooterButtons.vue'
import DropdownOption from '../DropdownOption.vue'
import {mapGetters} from 'vuex'

export default {
    name: 'PersonalInfo',
    data() {
        return {
            pageObject: DataObject['validation']['Personal']
        }
    },
    created() {
        debugger
        if(sessionStorage.getItem('validationObject')!=null){
            console.log("fetch")
            DataObject['validation'] = 
                JSON.parse(sessionStorage.getItem('validationObject'))
            
            this.pageObject = DataObject['validation']['Personal']  
        }  
    },
    methods: {
        changeValue(e) {
            if(e.target.id == 'phone' && e.target.value.length>10) {
                this.pageObject['phone']['value'] = e.target.value.slice(0,10)
            }
            var value = this.pageObject[e.target.id].value
            functions.handleChange('Personal',e.target,value)
        }
    },
    components: {
        FooterButtons,
        DropdownOption
    }
}