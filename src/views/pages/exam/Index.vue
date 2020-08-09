<template>
  <b-container>
    <b-form @submit="onSubmit">
      <TestPageTitle
          :testName=testName
      />
      <div v-if="tempForm !== undefined">
        <div role="tablist">
          <QuestionContainer
              :questionTotalCount="questionsCount"
              v-for="(q, index) in questions"
              v-show="decideQuestionVisibility(index)"
              :key="q.orderId"
              :singleQuestion="q"
              @childToParent="submitEachAnswer"
              :readonly=false
          />
        </div>
      </div>
      <b-row align-v="center" class="my-4">
        <b-col cols="3">
          <b-button
              variant="danger"
              v-if="currentPageNumber>1"
              @click="currentPageNumber -= 1"
          >
            <b-icon icon="caret-left-fill" aria-hidden="true"/>
            Previous
          </b-button>
        </b-col>
        <b-col cols="6" class="text-center">
          <b-icon icon="stickies-fill" aria-hidden="true"/> Page {{currentPageNumber}} of {{totalPageCount}}
        </b-col>
        <b-col cols="3" class="text-right">
          <b-button
              variant="danger"
              v-if="currentPageNumber<totalPageCount"
              @click="currentPageNumber += 1"
          >
            Next
            <b-icon icon="caret-right-fill" aria-hidden="true"/>
          </b-button>
        </b-col>
      </b-row>
      <div
          class="text-center p-3"
          v-if="currentPageNumber === totalPageCount"
      >
        <b-button
            type="submit"
            variant="primary success"
        >
          Finish Now
        </b-button>
      </div>
    </b-form>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { fetchTest } from '@/services/api/GetQuestions';
import { IFormItem, IQuestion } from '@/types/Interface';
import { store } from '@/store/FormData';
import TestPageTitle from '@/views/pages/exam/TestPageTitle.vue';
import QuestionContainer from '@/views/pages/exam/QuestionContainer.vue';
import moment from 'moment';
import { ERouterName, router } from '@/router/Index';

@Component({
  components: {
    TestPageTitle,
    QuestionContainer,
  }
})
export default class Index extends Vue {
  private tempForm: IFormItem = {};
  private sharedState = store.state;
  private testName = '';

  private questions: IQuestion[] = [];
  private questionsCount = 0;
  private totalPageCount = 0;

  // Unlike `index`, PageNumber starts with 1, as normally a book starts with page 1:
  private currentPageNumber = 1;
  private numberOfQuestionsPerPage = 0;

  public async created(): Promise<void> {
    await this.loadQuestions();

    // Start the clock once user sees the questions:
    this.sharedState.startedTime = moment();
  }

  public async loadQuestions(): Promise<void> {
    const apiResponse = await fetchTest();
    this.questions = apiResponse.questionList;
    this.testName = apiResponse.testName;
    this.questionsCount = this.questions ? this.questions.length : 0;
    this.numberOfQuestionsPerPage = apiResponse.pageControl.numPerPage;
    this.totalPageCount = Math.ceil(
        (this.questionsCount) / (this.numberOfQuestionsPerPage)
    );
    apiResponse.questionList.forEach((q: IQuestion) => {
      this.tempForm[q.orderId] = '';
    });
  }

  public onSubmit(evt: Event): void {
    evt.preventDefault();
    this.sharedState.finishedTime = moment();
    this.sharedState.form = this.tempForm;

    // Programmatic Navigate to result page
    router.push({ name: ERouterName.result });
  }

  public submitEachAnswer(orderId: number, value: string): void {
    // console.log('in parent:', orderId, value);
    this.tempForm[orderId] = value;
  }

  public decideQuestionVisibility(index: number): boolean {
    // Notes: `index` starts with 0, `minQuestionIndex` also starts with 0.
    // However, PageNumber start with 1:
    const minQuestionIndex = (this.currentPageNumber-1) * this.numberOfQuestionsPerPage;
    const maxQuestionIndex = (this.currentPageNumber * this.numberOfQuestionsPerPage) - 1;
    return (index >= minQuestionIndex) && (index <= maxQuestionIndex);
  }
}
</script>
