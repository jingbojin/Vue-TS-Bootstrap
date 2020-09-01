<template>
  <b-form-textarea
      v-if="readonly"
      :placeholder=answer
      rows="1"
      max-rows="1"
      :readonly=readonly
      @input="sendingUp(singleQuestion.orderId, $event)"
  />
  <b-form-textarea
      v-else-if="!readonly"
      rows="1"
      max-rows="1"
      :readonly=readonly
      @input="sendingUp(singleQuestion.orderId, $event)"
  />
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import { ANSWER_INPUT_EMIT_NAME, IQuestion } from '@/types/Interface';

@Component
export default class FreeText extends Vue {
  @Prop({ required: true })
  readonly readonly!: boolean;

  @Prop({ required: true })
  readonly singleQuestion!: IQuestion;

  @Prop({ required: false , default: ''})
  readonly answer!: string;

  @Emit(ANSWER_INPUT_EMIT_NAME)
  // Notes: TS @Emit decorator will forward argument to parents. Hence ignore
  // lint warning here.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  sendingUp(orderId: number, event: string): void {
    // Emit with multiple arguments magic:
    // https://github.com/kaorun343/vue-property-decorator/pull/306
    // console.log('in freeText:', orderId, event);
  }
}
</script>
