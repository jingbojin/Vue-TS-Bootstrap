<template>
  <div>
    <p>{{ questionText }}</p>
    <hr />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component

export default class QuestionTitle extends Vue {
  @Prop({ required: true })
  readonly questionText!: string;
}
</script>
