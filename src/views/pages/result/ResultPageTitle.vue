<template>
  <b-container>
    <b-row>
      <b-col cols="3" class="text-right font-weight-bolder">Title:</b-col>
      <b-col cols="9">{{testName}}</b-col>
    </b-row>
    <b-row>
      <b-col cols="3" class="text-right font-weight-bolder">Date started</b-col>
      <b-col cols="9">{{startedTime.format('MMMM Do YYYY, h:mm:ss a')}}</b-col>
    </b-row>
    <b-row>
      <b-col cols="3" class="text-right font-weight-bolder">Date finished</b-col>
      <b-col cols="9">{{finishedTime.format('MMMM Do YYYY, h:mm:ss a')}}</b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Moment } from 'moment';

@Component
export default class ResultPageTitle extends Vue {
  @Prop({ required: true })
  readonly testName!: string;

  @Prop({ required: true })
  readonly startedTime!: Moment;

  @Prop({ required: true })
  readonly finishedTime!: Moment;
}
</script>
