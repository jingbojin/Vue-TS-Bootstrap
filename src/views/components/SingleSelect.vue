<template>
  <b-form-group>
    <b-form-radio
        name="singleSelect"
        v-for="item in singleQuestion.options"
        :key="item.key"
        :value="item.key"
        :disabled=readonly
        :checked="item.key === value"
        @change="sendingUp(singleQuestion.orderId, item.key)"
        type="radio"
    >
      {{ item.value }} {{value}}
    </b-form-radio>
  </b-form-group>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import { ANSWER_INPUT_EMIT_NAME, IQuestion } from '@/types/interface';

@Component
export default class SingleSelect extends Vue {
  @Prop({ required: true })
  public value!: string;

  @Prop({ required: true })
  public readonly!: boolean;

  @Prop({ required: true })
  readonly singleQuestion!: IQuestion;

  @Emit(ANSWER_INPUT_EMIT_NAME)
  sendingUp(orderId: number, event: string) {
    // Emit with multiple arguments magic:
    // https://github.com/kaorun343/vue-property-decorator/pull/306
    console.log('in single select:', orderId, event);
  }
}
</script>
