<template>
  <p class="align-middle text-center font-weight-lighter">
    Part of the <span class="text-success">vue</span>
    <b-badge pill variant="light">vs</b-badge>
    <span class="text-info">React</span> experiment, click
      <a
          href="http://react.jingbojin.com"
          target="_blank"
          rel="noopener noreferrer"
      >
        here
      </a>
      for React version.
  </p>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>
