<template>
  <ul class="list-unstyled">
    <b-media
        v-for="item in options"
        :key="item.key"
    >
      <b-row>
        <b-col cols="1">
            <b-icon
                v-if="answer.includes(item.key) || (answer === item.key)"
                icon="check2" variant="success"
            />
        </b-col>
        <b-col cols="11">
          <p>
            {{ item.value }}
          </p>
        </b-col>
      </b-row>
    </b-media>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IOption } from '@/types/Interface';

@Component
export default class SelectedAnswer extends Vue {
  @Prop({ required: true })
  readonly answer!: string|string[];

  @Prop({ required: true })
  readonly options!: IOption[];

}
</script>
