<template>
    <div class="footer__container" v-bind:class='myClass'>
        <button v-bind:id="value" class="foot-button" 
         v-bind:class="{'submitDisabled' : currentPage == 'Interview' && check == false,
          'submit' : currentPage == 'Interview' && check == true }"
         @click="handleClick(value)" :disabled="!check"> {{value}}</button>
    </div>
</template>
<script>
import clickObject from './componentsJS/clickEvent.js'
export default {
    name: 'FooterButtons',
    data() {
        return {
            handleClick: clickObject.handleClick
        }
    },
    props: {
        value: String,
        myClass: String,
        currentPage: String,
        check: {
            default: true,
            type: Boolean
        }
    },
}
</script>

<style>
.footer__container {
    margin: 0 20%;
}
.foot-button {
    cursor: pointer;
    background-color: orange;
    color: white;
    font-size: 30px;
    height: 50px;
    width: 150px;
    border-radius: 25%;
}
.right{
    justify-self: flex-end;
}
.left{
    justify-self: flex-start;
}
.right_align {
    margin-top: 3%;
    float: right;
}
.left_align {
    margin-top: 3%;
    float: left;
}
.submit {
    background-color: green;
}
.submitDisabled {
    background-color: lightgreen; 
}
</style>
