<template>
    <div class="page__container">
        <div class="page__container_row"> 
            <label for="name">Name</label>
            <div class="input__field">
                <input type="text" id="name" placeholder="Name" 
                    v-model="pageObject.name.value" @input="changeValue" /> <br>
                <span v-if='!pageObject.name.isValid'>
                    <span class="errorAlerts" v-if='pageObject.name.value == ""'>Field cannot be empty</span>
                    <span class="errorAlerts" v-else>Invalid format</span>
                </span>
            </div>
        </div>
        <div class="page__container_row"> 
            <label for="email">Email</label>
            <div class="input__field">
                <input type="email" id="email" placeholder="Email" 
                    v-model="pageObject.email.value" @input="changeValue" /> <br>
                <span v-if='!pageObject.email.isValid'>
                    <span class="errorAlerts" v-if='pageObject.email.value == ""'>Field cannot be empty</span>
                    <span class="errorAlerts" v-else>Invalid format</span>
                </span>
            </div>
        </div>
        <div class="page__container_row"> 
            <label for="qualification">What are you</label>
            <span class="radio">
                <input type="radio" id="qualification" name="qualification" value="University Student" 
                    v-model="pageObject.qualification.value" />University Student
                <input type="radio" id="qualification" name="qualification" value="Professional"
                    v-model="pageObject.qualification.value" />Professional <br>
                <span v-if='!pageObject.qualification.isValid'>
                    <span class="errorAlerts" v-if='pageObject.qualification.value == ""'>choose one option</span>
                </span>
            </span>
        </div>
        <div class="page__container_row"> 
            <label for="university">University</label>
            <div class="input__field">
                <input type="text" id="university" placeholder="University" 
                    v-model="pageObject.university.value" @input="changeValue"/> <br>
                <span v-if='!pageObject.university.isValid'>
                    <span class="errorAlerts" v-if='pageObject.university.value == ""'>Field cannot be empty</span>
                    <span class="errorAlerts" v-else>Invalid format</span>
                </span>
            </div>
        </div>
         <div class="page__container_row"> 
            <label for="major">Major</label>
            <div class="input__field">
                <input type="text" id="major" placeholder="Major" 
                    v-model="pageObject.major.value" @input="changeValue" /> <br>
                <span v-if='!pageObject.major.isValid'>
                    <span class="errorAlerts" v-if='pageObject.major.value == ""'>Field cannot be empty</span>
                    <span class="errorAlerts" v-else>Invalid format</span>
                </span>

            </div>
        </div>
        <div class="page__container_row"> 
            <label for="graduation">Graduation Date</label>
            <DropdownOption :selected="pageObject.graduation.value" 
                formName='Personal' id="graduation" fieldName='graduation' 
                name="graduation" label='Graduation Date'/>
        </div>
        <div class="page__container_row"> 
            <label for="tax">Do you have a tax Id?</label>
            <span class="radio">
                <input type="radio" id="tax" name="tax" value="I have a tax Id"
                    v-model='pageObject.tax.value'  />I have a tax Id
                <input type="radio" id="tax" name="tax" value="I don't have a tax Id"
                    v-model='pageObject.tax.value' />I don't have a tax Id <br>
                <span v-if='!pageObject.tax.isValid'>
                    <span class="errorAlerts" v-if='pageObject.tax.value == ""'>choose one option</span>
                </span>
            </span>
        </div>
        <div class="page__container_row"> 
            <label for="phone">Phone</label>
            <div class="input__field">
                <input type="number" id="phone" placeholder="Phone" 
                    v-model="pageObject.phone.value" @input="changeValue" /> <br>
                <span v-if='!pageObject.phone.isValid'>
                    <span class="errorAlerts" v-if='pageObject.phone.value == ""'>Field cannot be empty</span>
                    <span class="errorAlerts" v-else>Invalid format</span>
                </span>
            </div>
        </div>
        <div class="footer_personal">
            
            <FooterButtons value="Next" class="right_align"/>
        </div>
    </div>

</template>
<script src="../components/componentsJS/personalInfo.js">

</script>
<style scoped>
.radio{
    width: 50%;
}
</style>
