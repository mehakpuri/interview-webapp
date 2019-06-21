import DataObject from './validationObject.js'

function isEmpty(value) {
    var fieldValue = value.trim() 
    if(fieldValue == '')
        return false
    return true
}
function isDropdownEmpty(value) {
    if(value == '')
        return false
    return true
}
function isCheckboxEmpty(value) {
    for(var key in value) {
        for(var index=0;index<value[key].length;index++)
        {
            if(value[key][index] == true)
                return true
        }
    }
    return false
}
function textPattern(value) {
    var reg = /^[a-zA-Z ]*$/;
    if (reg.test(value) == false) 
        return false
    return true
}
function emailPattern(value){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.]{5,})+\.([A-Za-z]{2,4})$/;
    if (reg.test(value) == false) 
        return false
    return true
}
function phonePattern(value) {
    var reg=/^[6-9]\d{9}$/;
    if (reg.test(value) == false) 
        return false
    return true
}
function checkValue(value) {
    debugger
    console.log("checking dropdown value")
    console.log(value)
    return true
}

var functions = {
    'isEmpty': isEmpty,
    'handleChange': handleChange,
    'textPattern': textPattern,
    'emailPattern': emailPattern,
    'phonePattern': phonePattern,
    'validateFormData': validateFormData,
    'isDropdownEmpty': isDropdownEmpty,
    'checkValue': checkValue,
    'isCheckboxEmpty':isCheckboxEmpty
}

function validateFormData(formName) {
    var formData = DataObject['validation'][formName]

    for(var key in formData) {
        if(formData[key].length){
            for(var index in formData[key])
            {
                var fieldValue = formData[key][index]['value'] ? formData[key][index]['value'] : ''
                var fieldFunc = formData[key][index]['validationFunc']

                for(var func in fieldFunc) {
                    var funcName = fieldFunc[func] + '(fieldValue)'
                    debugger
                    formData[key][index].isValid = eval(funcName)
                    if(formData[key][index].isValid == false)
                        break
                }
                if(formData[key][index].isValid == false)
                        break
            }
            if(formData[key][index].isValid == false)
            {
                alert("complete this form first")
                return false
            }
        }
        else{
            var fieldValue = formData[key]['value'] ? formData[key]['value'] : ''
            var fieldFunc = formData[key]['validationFunc']

            for(var func in fieldFunc) {
                var funcName = fieldFunc[func] + '(fieldValue)'
                formData[key].isValid = eval(funcName)
                if(formData.isValid == false)
                    break
            }

            if(formData[key].isValid == false) {
                alert("Complete this form first ")
                return false
            }  
        }
    
    }
    return true
}

function handleChange(formName,targetField,value) {
    if(targetField.id.split('-').length > 1) {
        var index = parseInt(targetField.name.split('_')[1]) - 1
        var obj = DataObject['validation'][formName][targetField.name.split('_')[0]][index]
        debugger
    }
    else
        var obj = DataObject['validation'][formName][targetField.id]
    
    if(value.trim() == '')
        obj.value = value.trim()
    else
        obj.value = value


    for(var index=0;index<obj.validationFunc.length;index++){
        var func = obj.validationFunc[index] + '(value)'
        obj.isValid = eval(func)
        if(obj.isValid == false)
            break
    }
}

export default functions
