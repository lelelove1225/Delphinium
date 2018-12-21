import { configure } from "@storybook/vue";

import Vue from "vue";

function loadStories() {
  const req = require.context("../src", true, /story\.js$/);
  req.keys().forEach(req);
}

configure(loadStories, module);
