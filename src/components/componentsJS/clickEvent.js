import functions from './validationFunctions.js'
import DataObject from './validationObject.js'
import Expertise from './expertise.js'


const allPages =  { '1':'Personal','2':'Profile','3':'Expertise','4':'Interview'}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] == value);
  }

function handleLink(e) {
    
    if(e.target.id == 'add_job'){
        this.$store.dispatch('increaseJobCount')
        sessionStorage.setItem('jobCount',this.getJobCount)
    }
    else if(e.target.id == 'add_school'){
        this.$store.dispatch('increaseSchoolCount')
        sessionStorage.setItem('schoolCount',this.getSchoolCount)
    }
}

function handleClick(buttonId) {
    var currentPage = this.$store.getters.getPageId

        if(buttonId == 'Submit') {
            
            var validationState = functions.validateFormData(currentPage)
            debugger
            if(validationState == true){
                currentPage = 'Success'
            }   
        }
        else if(buttonId == 'Home') {
            currentPage = allPages['1']
            
        }
        else if(buttonId == 'Next') {
            var validationState = functions.validateFormData(currentPage)
            if(validationState ==  true){
                for(var page in allPages) {
                    if(currentPage == allPages[page]) {
                        currentPage = allPages[parseInt(page)+1]
                        break
                    }
                }
            }
            sessionStorage.setItem('validationObject',JSON.stringify(DataObject['validation']))   
        }
        else if(buttonId == 'Previous') {
            for(var page in allPages) {
                if(currentPage == allPages[page]) {
                    currentPage = allPages[parseInt(page)-1]
                    break
                }
            }
            sessionStorage.setItem('validationObject',JSON.stringify(DataObject['validation']))
        }
        else {
            var indexCurrent = parseInt(getKeyByValue(allPages,currentPage))
            var indexButton = parseInt(getKeyByValue(allPages,buttonId))

            if(indexButton < indexCurrent )
                currentPage = buttonId
            else {
                var validationState = functions.validateFormData(currentPage)
                if(validationState == true){
                    if(indexButton > indexCurrent + 1) 
                        alert("You cannot jump directly to that page")
                    else {
                        currentPage = buttonId
                    }
                }
            }
        sessionStorage.setItem('validationObject',JSON.stringify(DataObject['validation']))
    }

        this.$store.dispatch('changeActiveButton',currentPage)
        this.$router.push('/'+currentPage.toLowerCase())
        sessionStorage.setItem('pageId',currentPage)
}

const clickObject = {
    'handleClick': handleClick,
    'getKeyByValue': getKeyByValue,
    'handleLink': handleLink
}

export default clickObject