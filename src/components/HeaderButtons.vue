<template>
<div class="header__container">
    <span class="header__container_wrapper" v-for="(label,index) in getAllPages" :key="index">
        <button class="head-button" v-bind:id="label" @click="isActive(label)" 
            v-bind:class="{ 'activeButtonId': check(label), 'pageSubmitted': pageSubmit(label) }">
            <span v-if="!pageSubmit(label)">{{index}}</span>
            <span v-if="pageSubmit(label)">&#10003;</span>
            </button>
        <span v-if="index != invalid"><hr></span>
    </span><br>
    <span class="label__wrapper">
        <span class="label__wrapper_text" v-for="(label,index) in getAllPages" :key="index">
            {{label}}
        </span>
    </span>
</div>
</template>
<script src="./componentsJS/headerButtons.js">

</script>
<style lang="scss">
@import "../assets/common_css/main_style.scss";
@import "../assets/common_css/style.scss";

.header__container{
    font-size: 15px;
    display: inline-block;
    text-align: center;
    margin: 1% 0;
}
.label__wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.head-button{
   @include base;
   cursor: pointer;
    border-radius: 50%;
    font-size: 25px;
    width: 45px; 
    height: 45px;
    border: 1px solid orange;
}
hr{
    display: inline-block;
    width: 220px;
    border: 1px dashed;
}
.activeButtonId { 
    background-color: orange;
    color: white;
}
.pageSubmitted {
    background-color: orange;
    color: white;
}
</style>


