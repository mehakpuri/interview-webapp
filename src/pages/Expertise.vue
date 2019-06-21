<template>
    <div>
        <div class="expertise__container">
            <div class="expertise__list">
                <div class="expertise__list_item" v-for="(list,index) in itemList" :key="index"
                    v-bind:id="'list-' + (index+1)" v-bind:class="{'activeClass' : index+1 == activeList.split('-')[1] }" 
                    @click="linkChange">{{list}}</div>	
            </div>
            <div class="expertise__items">
                <div class="expertise__items_radio" v-for="(items,index) in currentList" :key="index" :id="activeItem">
                    <input type="checkbox" :name="activeList" @change="handleChange" v-model="pageObject.item.value[activeNumber][index]" /> {{items}}
                </div>
            </div>
            
        </div>
        <div class="footer">
            <FooterButtons value="Previous" class="left_align"/>
            <FooterButtons value="Next" class="right_align"/>
        </div>
    </div>
</template>
<script src="../components/componentsJS/expertise.js">

</script>
<style lang="scss">
@import "../assets/common_css/main_style.scss";
.expertise__container {
     @include flexStyle;
}
.expertise__list{
    width: 25%;
    margin: 0 2%;

    &_item {
        background-color: #f1f1f1;
        border-bottom: 2px solid lightgrey;
        font-size: 22px;
        padding: 4%;
    }
    &_item:hover{
        cursor: pointer;
        color: orange;
        font-weight: bold;
    }
}
.expertise__items{
    width: 60%;
    background-color: #f1f1f1;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 300px;
    padding: 2%;
    font-size: 18px;

    &_radio {
        width: 30%;
        margin: 1% 0;
        text-align: left;
    }
}
.activeClass{
    @include activeItem;
}
</style>


