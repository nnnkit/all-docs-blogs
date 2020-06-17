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
        "javascript/fundamental/operators",
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
