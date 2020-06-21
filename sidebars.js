module.exports = {
  docs: [
    {
      type: "category",
      label: "Fundamental",
      items: [
        "intro",
        "javascript/fundamental/hello-world",
        "javascript/fundamental/value",
        "javascript/fundamental/variable",
        "javascript/fundamental/type-conversion",
        "javascript/fundamental/alert-prompt",
        {
          type: "category",
          label: "Operators",
          items: [
            "javascript/fundamental/5-operators/basic-operators",
            "javascript/fundamental/5-operators/logical-operators",
            "javascript/fundamental/5-operators/comparison-operators",
            "javascript/fundamental/5-operators/operators-ex",
          ],
        },
        "javascript/fundamental/condition",
        "javascript/fundamental/loops",
        "javascript/fundamental/expression-and-statement",
        "javascript/fundamental/function",
      ],
    },
    {
      type: "category",
      label: "DOM",
      items: [
        "javascript/dom/browser-env",
        "javascript/dom/dom",
        "javascript/dom/selecting-element",
        "javascript/dom/manupulation",
        "javascript/dom/events",
      ],
    },

    {
      type: "category",
      label: "React",
      items: [
        "react/prerequisite",
        "react/introduction",
        "react/hello-world",
        "react/component",
        "react/component-ex",
        "react/state",
        "react/conditional-rendering",
        "react/state-ex",
        "react/lifecycle",
        "react/lifecycle-ex",
        "react/forms",
        {
          type: "category",
          label: "Advanced Concept",
          items: [
            "react/advanced/error-boundary",
            "react/advanced/render-and-commit",
            "react/advanced/terms",
          ],
        },
      ],
    },
  ],
};
