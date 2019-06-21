import clickObject from "./clickEvent";
import DataObject from "./validationObject";
import FooterButtons from '../FooterButtons.vue'

export default {
    name: 'Expertise',
    data() {
        return {
            itemList : ['Computer Software','Computer Science','Engineering'],
            items_1 : ['C++ Programming','Ruby Programming','Java Programming','Assembly Language'
            ,'DataBase','MySQL','Oracle','Heroku','Git','Php','Angular','Express'],
            items_2 : ['JavaScript Programming','React','VueJS','Python Programming'
            ,'HTML5','NodeJS','MongoDB','Redis'],
            items_3 :  ['Spring','C Programming','Machine Learning','Artificial Intelligence'
            ,'Django','Flask','C++ Programming','another','one more'],

            activeList : DataObject['validation']['Expertise']['item']['name'],
            activeItem : '',
            currentList : '',
            activeNumber : '',
            pageObject : DataObject['validation']['Expertise']
        }
    },
    created() {
        if(sessionStorage.getItem('validationObject')!=null){
            console.log("fetch")
            DataObject['validation'] = 
                JSON.parse(sessionStorage.getItem('validationObject'))
            
            this.pageObject = DataObject['validation']['Expertise']  
            this.activeList = DataObject['validation']['Expertise']['item']['name']
        }  
       this.setList()

       debugger
    },
    methods: {
        linkChange(e) {
            if(e.target.id.split('-')[0] == 'list' ) {
                DataObject['validation']['Expertise']['item']['name'] = e.target.id  
                
                this.activeList = e.target.id
            }
            this.setList()
        },

        setList() {
            this.activeNumber = this.activeList.split('-')[1]
            this.activeItem = 'items_' + this.activeList.split('-')[1]

            // console.log(this.activeItem)
            if(this.activeItem == 'items_1')
                this.currentList = this.items_1
            else if(this.activeItem == 'items_2')
                this.currentList = this.items_2
            else
                this.currentList = this.items_3
        },
        handleChange() {
            // console.log(this.activeNumber)

            var obj = DataObject['validation']['Expertise']['item']['value']
            for(var key in obj) {
                if(key != this.activeNumber) {
                    DataObject['validation']['Expertise']['item']['value'][key] = []
                }
            }
        }
    },
    components: {
        FooterButtons
    }
}