<template>
  <div>
    <h4 class="font-weight-bolder">{{testName}}</h4>
    <br/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TestPageTitle extends Vue {
  @Prop({ required: true })
  readonly testName!: string;
}
</script>
