<template>
  <h5>{{ questionText }}</h5>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component

export default class Question extends Vue {
  @Prop({required: true})
  public questionText!: string;
}
</script>
