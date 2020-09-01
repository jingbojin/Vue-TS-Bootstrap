<template>
  <div>
    <b-form-group
        v-if=!readonly
    >
      <b-form-radio
          :name="'singleSelect-' + singleQuestion.orderId"
          v-for="item in singleQuestion.options"
          :key="item.key"
          :value="item.key"
          :checked="item.key === value"
          @change="sendingUp(singleQuestion.orderId, item.key)"
          type="radio"
      >
        {{ item.value }}
      </b-form-radio>
    </b-form-group>
    <SelectedAnswer
        v-else-if=readonly
        :answer=value
        :options=singleQuestion.options
    />
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import { ANSWER_INPUT_EMIT_NAME, IQuestion } from '@/types/Interface';
import SelectedAnswer from '@/views/components/SelectedAnswer.vue';

@Component({
  components: {
    SelectedAnswer,
  }
})
export default class SingleChoice extends Vue {
  @Prop({ required: true })
  readonly value!: string;

  @Prop({ required: true })
  readonly readonly!: boolean;

  @Prop({ required: true })
  readonly singleQuestion!: IQuestion;

  @Emit(ANSWER_INPUT_EMIT_NAME)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  sendingUp(orderId: number, event: string): void {
    // Emit with multiple arguments magic:
    // https://github.com/kaorun343/vue-property-decorator/pull/306
    // console.log('in single select:', orderId, event);
  }
}
</script>
