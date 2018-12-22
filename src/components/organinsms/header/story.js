import { storiesOf } from "@storybook/vue";

import Header from "./Header";

storiesOf("organisims", module).add("Header", () => ({
  components: { Header },
  template: `<Header />`
}));
