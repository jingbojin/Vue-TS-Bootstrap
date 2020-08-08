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
            @freeTextEmit="sendingUp"
        />

        <FreeText
            v-else-if="singleQuestion.type === 'freeText'"
            :readonly=readonly
            :single-question="singleQuestion"
            :answer=answer
            @freeTextEmit="sendingUp"
        />

        <MultiCheckbox
            v-else-if="singleQuestion.type === 'multiCheckbox'"
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
import FreeText from '@/views/components/FreeText.vue';
import TestPageTitle from '@/views/pages/test/TestPageTitle.vue';
import { IQuestion } from '@/types/Interface';
import 'reflect-metadata';
import MultiCheckbox from '@/views/components/MultiCheckbox.vue';
import SingleChoice from '@/views/components/SingleChoice.vue';

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
    return `Question ${this.singleQuestion.orderId} of ${this.questionTotalCount}`;
  }

  public sendingUp(orderId: number, value: string) {
    //console.log('sending up:', orderId, value);
    // console.log('QContainer orderId:', orderId);
    // console.log('QContainer value:', value);
    this.$emit('childToParent', orderId, value);
  }
}

// https://vuejs.org/v2/guide/components.html#Using-v-model-on-Components
</script>
