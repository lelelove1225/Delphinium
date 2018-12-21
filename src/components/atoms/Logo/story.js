import { storiesOf } from "@storybook/vue";

import Logo from "./Logo.vue";

toriesOf("Atoms", module).add("Logo", () => ({
  components: { Logo },
  template: `<Logo />`
}));
