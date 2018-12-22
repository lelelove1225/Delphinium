import { storiesOf } from "@storybook/vue";

import Logo from "./Logo.vue";

storiesOf("Atoms", module).add("Logo", () => ({
  components: { Logo },
  template: `<Logo />`
}));
