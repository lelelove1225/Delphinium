import { storiesOf } from "@storybook/vue";

import Hello from "./Hello.vue";

storiesOf("Atoms", module).add("hello", () => ({
  components: { Hello },
  template: `<Hello />`
}));
