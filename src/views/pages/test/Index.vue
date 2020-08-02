<template>
  <b-container>
    <b-form @submit="onSubmit">
      <TestPageTitle/>
      <div v-if="tempForm !== undefined">
        <div role="tablist">
          <QuestionContainer
              :currentPageNumber="currentPageNumber"
              :questionTotalCount="questionsCount"
              v-for="q in questions"
              :key="q.orderId"
              :singleQuestion="q"
              @childToParent="submitEachAnswer"
              :readonly=false
          />
        </div>
      </div>
      <b-row>
        <b-button-group>
          <b-row>
            <b-col>
              <b-button
                  variant="danger"
                  v-if="currentPageNumber>1"
                  v-on:click="currentPageNumber -= 1"
              >
                Previous
              </b-button>
            </b-col>
            <b-col>
              <b-button
                  variant="danger"
                  v-if="currentPageNumber<10"
                  v-on:click="currentPageNumber += 1"
              >
                Next
              </b-button>
            </b-col>
          </b-row>
        </b-button-group>
      </b-row>
      <b-row>
        <b-button-group>
          <b-button
              type="submit"
              variant="primary success"
          >
            Finish Now
          </b-button>
        </b-button-group>
      </b-row>
    </b-form>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { apiPayload } from '@/services/GetQuestions';
import { IFormItem, IQuestion } from '@/types/interface';
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
  public tempForm: IFormItem = {};
  public sharedState = store.state;

  public questions!: IQuestion[];
  public questionsCount!: number;
  public currentPageNumber = 1;

  public created() {
    this.loadQuestions();
  }

  public loadQuestions() {
    this.questions = apiPayload.questionList;
    this.questionsCount = this.questions ? this.questions.length : 0;
    apiPayload.questionList.forEach((q: IQuestion) => {
      this.tempForm[q.orderId] = '';
    });
  }

  public onSubmit(evt: Event) {
    evt.preventDefault();
    this.sharedState.form = this.tempForm;
    alert(JSON.stringify(this.sharedState.form));
  }

  public submitEachAnswer(orderId: number, value: string) {
    // console.log('in parent:', orderId, value);
    this.tempForm[orderId] = value;
  }

  /**
   public onReset = (evt: Event) => {
    evt.preventDefault();
    // Reset our form values
    this.form.email = '';
    this.form.name = '';
    this.form.food = null;
    this.form.checked = [];
    // Trick to reset/clear native browser form validation state
    this.show = false;
    this.$nextTick(() => {
      this.show = true;
    })
  };
   */

}
</script>
