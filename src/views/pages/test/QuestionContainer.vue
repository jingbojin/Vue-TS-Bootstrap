<template>
  <b-card no-body class="mb-1">
    <b-card-header header-tag="header" class="p-1" role="tab">
      <b-button
          block
          v-b-toggle="'accordion-' + singleQuestion.orderId"
          variant="light"
      >
        Question {{ singleQuestion.orderId }} of {{ questionTotalCount }}
      </b-button>
    </b-card-header>
    <b-collapse
        :id="'accordion-' + singleQuestion.orderId"
        visible
        role="tabpanel"
    >
      <b-card-body>
        <Question
            :question-text="singleQuestion.questionText"
        />
        <SingleSelect
            v-if="singleQuestion.type === 'singleSelect'"
            :readonly=readonly
            v-model=answer
            :singleQuestion="singleQuestion"
            @freeTextEmit="sendingUp"
        />

        <FreeText
            v-else-if="singleQuestion.type === 'freeText'"
            :readonly=readonly
            :single-question="singleQuestion"
            :answer=answer
            @freeTextEmit="sendingUp"
        />
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import QuestionTitle from '@/views/pages/test/QuestionTitle.vue';
import Question from '@/views/pages/test/Question.vue';

import SingleSelect from '@/views/components/SingleSelect.vue';
import FreeText from '@/views/components/FreeText.vue';
import TestPageTitle from '@/views/pages/test/TestPageTitle.vue';
import { IQuestion } from '@/types/interface';
import 'reflect-metadata';

@Component({
  components: {
    TestPageTitle,
    FreeText,
    Question,
    QuestionTitle,
    SingleSelect,
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

  public sendingUp(orderId: number, value: string) {
    console.log('sending up:', orderId, value);
    // console.log('QContainer orderId:', orderId);
    // console.log('QContainer value:', value);
    this.$emit('childToParent', orderId, value);
  }
}

// https://vuejs.org/v2/guide/components.html#Using-v-model-on-Components
</script>
