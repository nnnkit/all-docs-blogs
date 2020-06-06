---
id: component-ex
title: Exercise
---

### 1. Thinking in components

Breakdown this layout into components. You can take a print out and do the marking of components using pen. Or you can also use any tool like canva or other. Submit the final link.

![document.createElement](/img/react/twitter-layout.jpg)

### 2. Button Component using props

Button component will accept these props

- `text` text of the button.
- `type` (solid, outlined, falt) default to solid
- `size` (sm, md, lg) defaults to md

**Bonus:**

- `icon` (true, false) defaults to `false`. If true show an icon.

Basic Informations:

- Primary color: `#213667`
- Use this svg emoji: `<svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`

![document.createElement](/img/react/button-props.png)

The repo is present at https://codesandbox.io/s/button-component-h0obk

Baisc Uses:

```jsx
  <Button text="solid" />
  <Button text="outlined" type="outlined" />
  <Button text="flat" type="flat" />
  <Button text="large" size="lg" />
  <Button text="medium" />
  <Button size="sm" text="small" />
  <Button size="sm" type="flat" text="flat small" />
  <Button type="outlined" size="sm" text="outlined small" />
  <Button size="lg" type="flat" icon />
  <Button size="lg" icon />
  <Button icon />
  <Button type="outlined" icon />
```

### 3. Gizmo App (convert the layout into components)

We will keep working on the Gizmo App (article component) and break down our layout into components. Convert the layout you created in last section into components. Follow the diagram given below.

![document.createElement](/img/react/component-break.png)
