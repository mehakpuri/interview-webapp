<template>
    <div class="success_page">
        <h1>Thank you for submitting the form!</h1>
        <FooterButtons value="Home"/>
    </div>
</template>
<script>
import FooterButtons from '../components/FooterButtons.vue'
import DataObject from '../components/componentsJS/validationObject';
export default {
    name: 'Success',
    components: {
        FooterButtons
    },
    created() {
        sessionStorage.removeItem('validationObject')
        DataObject['validation'] = JSON.parse(localStorage.getItem('defaultObject'))
    }
}
</script>
<style scoped>
.success_page {
    margin: 10%;
}
</style>


