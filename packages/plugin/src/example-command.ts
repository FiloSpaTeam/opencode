import type { Plugin } from "./index.js"

/** Example: register a command named `receipt-demo` in opencode.json. */
export const ReceiptExample: Plugin = async () => ({
  "command.execute.intercept": async (input, output) => {
    if (input.command !== "receipt-demo") return

    // Validate arguments and complete the operation before marking it handled.
    output.receipt = `Received: ${input.arguments}`
    output.handled = true
  },
})
