<template>
    <select v-bind:id="id" v-bind:class=" { 'pagePersonal':formName == 'Personal', 'pageProfile':formName == 'Profile' }"
           v-model="selected" :name="name" @change="handleChange">
        <option value ='' disabled>{{label}}</option>
        <option :value="item" v-for="item in options" :key="item">{{item}}</option>
    </select>
</template>
<script>
import clickObject from './componentsJS/clickEvent';
import DataObject from './componentsJS/validationObject';
import functions from './componentsJS/validationFunctions';
export default {
    name: 'DropdownOption',
    data() {
        return {
            options: [],
            selectedValue: this.selected 
        }
    },
    props: {
        formName: String,
        fieldName: String,
        label: String,
        selected: String,
        id: String,
        name: String
    },
    created() {
    
        var startFrom = 1900;
	    var endFrom = new Date().getFullYear();
	
	    for(var year = endFrom ; year >= startFrom; year--){
  		    this.options.push(year)
	    }
    },
    methods: {
        handleChange(e) {
            console.log(DataObject['validation'][this.formName][this.fieldName])
            debugger
            if(this.name.split('_').length > 1) {
                var index = parseInt(this.name.split('_')[1]) - 1
                DataObject['validation'][this.formName][this.fieldName][index]['value'] = this.selected
            }
            else{
                console.log("in else")
                DataObject['validation'][this.formName][this.fieldName]['value'] = this.selected
            }

        }
    }
}
</script>
<style scoped>

</style>


