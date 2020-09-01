<template>
  <div>
    <b-form-group
        v-if=!readonly
        label="(You can choice more than one answer)"
    >
      <b-form-checkbox-group
          :name="'multiCheckbox-' + singleQuestion.orderId"
          v-model="selected"
          :options="bootstrapOptions"
          stacked
          @change="sendingUp(singleQuestion.orderId, $event)"
      />
    </b-form-group>
    <SelectedAnswer
        v-else-if=readonly
        :answer=answer
        :options=singleQuestion.options
    />
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import { ANSWER_INPUT_EMIT_NAME, IOption, IQuestion } from '@/types/Interface';
import { ICheckboxOption } from '@/types/BootstrapTypes';
import SelectedAnswer from '@/views/components/SelectedAnswer.vue';

@Component({
  components: {
    SelectedAnswer,
  }
})
export default class MultiCheckbox extends Vue {
  private selected = [];

  @Prop({ required: true })
  readonly singleQuestion!: IQuestion;

  @Prop({ required: true })
  readonly readonly!: boolean;

  @Prop({ required: true })
  readonly answer!: string[];

  // Computed Properties in TS:
  // https://blog.logrocket.com/how-to-write-a-vue-js-app-completely-in-typescript/
  get bootstrapOptions(): ICheckboxOption[] {
    return (this.singleQuestion.options as IOption[]).map((e: IOption) => (
        {
          text: e.value,
          value: e.key,
          disabled: this.readonly,
        }
    ));
  }

  @Emit(ANSWER_INPUT_EMIT_NAME)
  // Notes: TS @Emit decorator will forward argument to parents. Hence ignore
  // lint warning here.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  sendingUp(orderId: number, value: string[]): void {
    // Emit with multiple arguments magic:
    // https://github.com/kaorun343/vue-property-decorator/pull/306
    // console.log('in MultiCheckbox:', orderId, value);
  }
}
</script>
