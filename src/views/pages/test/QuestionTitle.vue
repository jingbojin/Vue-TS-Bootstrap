<template>
  <div>
    <h4>Question {{ questionIndex }} of {{ questionTotalCount }}</h4>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component

export default class QuestionTitle extends Vue {
  @Prop({required: true})
  readonly questionIndex!: number;

  @Prop({required: true})
  readonly questionTotalCount!: number;
}
</script>
