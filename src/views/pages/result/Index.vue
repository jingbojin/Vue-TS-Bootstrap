<template>
  <div>
    <TestPageTitle/>
    <div v-if="sharedState.form !== undefined">
      <QuestionContainer
          :currentPageNumber="currentPageNumber"
          :questionTotalCount="questionsCount"
          v-for="q in questions"
          :key="q.orderId"
          :singleQuestion="q"
          :answer="sharedState.form[q.orderId]"
          :readonly=true
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { apiPayload } from '@/services/GetQuestions';
import { IQuestion } from '@/types/Interface';
import { store } from '@/store/FormData';
import TestPageTitle from '@/views/pages/test/TestPageTitle.vue';
import QuestionContainer from '@/views/pages/test/QuestionContainer.vue';

@Component({
  components: {
    TestPageTitle,
    QuestionContainer,
  }
})
export default class Index extends Vue {
  public sharedState = store.state;

  public questions!: IQuestion[];
  public questionsCount!: number;
  public currentPageNumber = 1;

  public created() {

    console.log('result page, see state:', this.sharedState.form);
    this.loadQuestions();
  }

  public loadQuestions() {
    this.questions = apiPayload.questionList;
    this.questionsCount = this.questions ? this.questions.length : 0;

  }
}
</script>
