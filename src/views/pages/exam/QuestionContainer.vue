<template>
  <b-card no-body class="mb-1">
    <b-card-header header-tag="header" class="p-1" role="tab">
      <b-button
          block
          v-b-toggle="'accordion-' + singleQuestion.orderId"
          variant="light"
          class="lead text-left font-weight-bolder"
      >
        {{questionLabel}}
      </b-button>
    </b-card-header>
    <b-collapse
        :id="'accordion-' + singleQuestion.orderId"
        visible
        role="tabpanel"
    >
      <b-card-body>
        <QuestionTitle
            :question-text="singleQuestion.questionText"
        />
        <SingleChoice
            v-if="singleQuestion.type === 'singleSelect'"
            :readonly=readonly
            v-model=answer
            :singleQuestion="singleQuestion"
            @answerInputEmitName="sendingUp"
        />

        <FreeText
            v-else-if="singleQuestion.type === 'freeText'"
            :readonly=readonly
            :single-question="singleQuestion"
            :answer=answer
            @answerInputEmitName="sendingUp"
        />

        <MultiCheckbox
            v-else-if="singleQuestion.type === 'multiCheckbox'"
            :readonly=readonly
            :single-question="singleQuestion"
            :answer=answer
            @answerInputEmitName="sendingUp"
        />
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import QuestionTitle from '@/views/pages/exam/QuestionTitle.vue';
import FreeText from '@/views/components/FreeText.vue';
import TestPageTitle from '@/views/pages/exam/TestPageTitle.vue';
import { IQuestion } from '@/types/Interface';
import 'reflect-metadata';
import MultiCheckbox from '@/views/components/MultiCheckbox.vue';
import SingleChoice from '@/views/components/SingleChoice.vue';
import { printQuestionLabel } from '@/utils/PrintQuestionLabel';

@Component({
  components: {
    TestPageTitle,
    FreeText,
    QuestionTitle,
    SingleChoice,
    MultiCheckbox,
  }
})

export default class QuestionContainer extends Vue {
  @Prop({ required: true })
  readonly singleQuestion!: IQuestion;

  @Prop({ required: true })
  readonly questionTotalCount!: number;

  @Prop({ required: true })
  readonly readonly!: boolean;

  @Prop({ required: false })
  readonly answer!: string;

  get questionLabel(): string {
    return printQuestionLabel(this.singleQuestion.orderId, this.questionTotalCount);
  }

  public sendingUp(orderId: number, value: string) {
    this.$emit('childToParent', orderId, value);
  }
}
</script>
