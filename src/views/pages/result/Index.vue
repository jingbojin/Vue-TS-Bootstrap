<template>
  <b-container>
    <ResultPageTitle
        :test-name=testName
        :started-time=sharedState.startedTime
        :finished-time=sharedState.finishedTime
    />
    <hr />
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
    <div align-v="center" class="my-4 text-center">
        <b-button
            pill
            variant="success"
            @click="redirectToTestPage"
        >
          Try again?
        </b-button>
    </div>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { fetchTest } from '@/services/GetQuestions';
import { IQuestion } from '@/types/Interface';
import { store } from '@/store/FormData';
import TestPageTitle from '@/views/pages/test/TestPageTitle.vue';
import QuestionContainer from '@/views/pages/test/QuestionContainer.vue';
import ResultPageTitle from '@/views/pages/result/ResultPageTitle.vue';
import router from '@/router';

@Component({
  components: {
    TestPageTitle,
    QuestionContainer,
    ResultPageTitle,
  }
})
export default class Index extends Vue {
  private sharedState = store.state;
  private questions: IQuestion[] = [];
  private questionsCount!: number;
  private currentPageNumber = 1;
  private testName = '';

  public async created() {
    await this.loadQuestions();
  }

  public async loadQuestions() {
    const apiResponse = await fetchTest();
    this.questions = apiResponse.questionList;
    this.questionsCount = this.questions ? this.questions.length : 0;
    this.testName = apiResponse.testName;
  }

  public redirectToTestPage() {
    router.push({ name: 'test' });
  }
}
</script>
