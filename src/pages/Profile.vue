<template>
     <div class="page__container">
         <div class="page__container_row"> 
            <label for="about">About You</label>
            <div class="input__field">
                <textarea id="about" placeholder="Write a short bio" rows="6" cols="34"
                    v-model="pageObject.about.value" @input="changeValue"> </textarea> <br>
                <span v-if='!pageObject.about.isValid'>
                    <span class="errorAlerts" v-if='pageObject.about.value == ""'>Field cannot be empty</span>
                    <span class="errorAlerts" v-else>Invalid format</span>
                </span>
            </div>
        </div>
        <div class="page__container_row"> 
            <label for="experience">Teaching Experience</label>
            <div class="input__field">
                <textarea id="experience" placeholder="Tell us about your teaching experience"  rows="6" cols="34"
                    v-model="pageObject.experience.value" @input="changeValue"> </textarea> <br>
                <span v-if='!pageObject.experience.isValid'>
                    <span class="errorAlerts" v-if='pageObject.experience.value == ""'>Field cannot be empty</span>
                    <span class="errorAlerts" v-else>Invalid format</span>
                </span>
            </div>
        </div>
        <div class="page__container_row"> 
            <label for="workHistory">Work History</label>
            <div class="input__field">
            
                    <div class="work_history_wrapper" v-for="(item, index) in workHistory" :key="index">
                        <input :id="'work-history-' + (index+1)" :name="'workHistory_'+(index+1)" placeholder="Company" 
                        v-model="pageObject.workHistory[index]['value']" @input="changeValue" /> <br>
                        <DropdownOption :selected="pageObject.activeFrom[index]['value']" 
                            formName="Profile" :id="'active-from-'+(index+1)"
                            :name="'activeFrom_'+(index+1)" fieldName="activeFrom" label="Active From"/>
                        <DropdownOption :selected="pageObject.activeTo[index]['value']" 
                            formName="Profile" :id="'active-to-'+(index+1)" 
                            :name="'activeTo_'+(index+1)" fieldName="activeTo" label="Active To"/> 

                        <span v-if="!pageObject.workHistory[index]['isValid']">
                            <br>
                            <span class="errorAlerts" v-if="pageObject.workHistory[index]['value'] == ''">Field cannot be empty</span>
                            <span class="errorAlerts" v-else>Invalid format</span>
                        </span> <br>
                    </div>
                

                <button class="profile_links" id="add_job" @click="handleDynamicWork">
                    + Add Another Job
                </button>
            </div>
        </div>
        <div class="page__container_row"> 
            <label for="education">Education</label>
            <div class="input__field">

                <div class="education_wrapper" v-for="(item, index) in education" :key="index">
                    <input :id="'education-' + (index+1)" :name="'education_'+(index+1)" placeholder="School" 
                         v-model="pageObject.education[index]['value']" @input="changeValue" /> <br>
                    <DropdownOption :selected="pageObject.enrolled[index]['value']" :name="'enrolled_'+(index+1)"
                        formName="Profile" :id="'enrolled-'+(index+1)"
                         fieldName="enrolled" label="Enrolled"/>
                    <DropdownOption :selected="pageObject.graduated[index]['value']" :name="'graduated_'+(index+1)"
                        formName="Profile" :id="'graduated-'+(index+1)"
                        fieldName="graduated" label="Graduated"/>

                     <span v-if="!pageObject.education[index]['isValid']">
                        <br>
                        <span class="errorAlerts" v-if="pageObject.education[index]['value'] == ''">Field cannot be empty</span>
                        <span class="errorAlerts" v-else>Invalid format</span>
                    </span> <br>
                </div>
               

                <button class="profile_links" id="add_school"  @click="handleDynamicEdu">
                    + Add Another School
                </button>
            </div>
        </div>
         <div class="footer">
            <FooterButtons value="Previous" class="left_align"/>
            <FooterButtons value="Next" class="right_align"/>
        </div>
     </div>
     
</template>
<script src="../components/componentsJS/profile.js">

</script>
<style scoped>
.profile_links {
    margin: 5% 0;
    color: orange;
    font-size: 18px;
}
.profile_links:hover {
    text-decoration: underline;
    font-weight: bold;
    cursor: pointer;
}
</style>


