<template>
    <div>
        <div class="interview__container">
            <div class="question_list">
                <div class="question__list_item" v-for="index in 4" :key="index">
                     <span class="question__list_text" @click="changeQuestion" 
                        v-bind:id="'question-' + (index)" 
                        v-bind:class="{'activeQuesClass' : activeQuestion.name == 'question-' + (index)}">
                     {{index}}. Question  #{{index}} </span>
                     <span class="question__list_tick" v-bind:class="{ 'notEmpty' : checkNotEmpty(index)}"> &#10004;</span>
                </div>	
            </div>
            <div class="answer_area">
                <div class="answer_area_title">
                    Question {{getTitle()}}
                </div>
                <div class="answer_area_textbox">
                    <textarea class="interview_textarea" v-model="activeQuestion.value" rows=6></textarea>
                </div>
                <div class="answer_area_buttons">
                    <span v-if="checkPrevious()" class="previous" id="previous" @click="quesChange">
                        Previous Question</span>
                    <span v-if="checkNext()" class="next" id="next" @click="quesChange">
                        Next Question</span>
                </div>
            </div>
        </div>
        <div class="footer">
            <FooterButtons value="Previous" class="left_align"/>
            <FooterButtons value="Submit" class="right_align" currentPage="Interview" 
                :check="checkDisabled()"/>
        </div>
    </div>
</template>
<script src="../components/componentsJS/interview.js">

</script>
<style lang="scss">
@import "../assets/common_css/main_style.scss";
.interview__container {
   @include flexStyle;
}
.question__list {
    width: 20%;
    margin: 0 2%;

    &_item {
        font-size: 18px;
        margin: 10% 0;
        color: grey;
    }

    &_item:hover {
        cursor: pointer;
    }

    &_tick {
        margin-left: 15px;
        color: grey;
    }
}
.activeQuesClass{
    color: black;
    text-decoration: underline;
    font-weight: bold;
}
.answer_area {
    // width: 50%;
    margin-left: 6%;
    &_title {
        font-size: 30px;
        text-align: left;
    }
    &_textbox {
        text-align: left;
    }
    &_buttons {
        color: orange;
        font-size: 20px;
    }
}
.notEmpty {
    color: orange
}
.previous {
    float: left; 
}
.previous:hover, .next:hover {
    text-decoration: underline;
    cursor: pointer;
}
.next {
    float: right;
}
</style>


