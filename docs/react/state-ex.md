---
id: state-ex
title: State Exercise
---

### Create a counter

To understand the concept of state create a counter app. This app should have these functionalities.

- When you click on increment the value increases by 1.
- When you click on decrement the value decreases by 1.
- When you click on reset the value goes to 0.

![Counter](/img/react/counter.png)

After finisihing this app, add these features to the app:

- Change you increment funciton in such a way that clicking on increment increase the value by 2. Similarly clicking on decrement decreases the value by 2.
- The upper limit of value should be 12.
- If the value if above 12 display a message saying "You can't increase the value above 12".

### Sidebar app

Create a page that has sidebar and main body.

- The default state of sidebar is visible
- In sidebar there is a button to "Hide" the sidebar.
- When clicked on the button the sidebar closes.
- Once closed the button in footer will be changed to "Show"
- When clicked on that the sidebar will be visible

![Counter](/img/react/sidebar.png)

### Accordian

Create an accordian component.

- There can be multiple accordian
- Each accordian will accept three prop `title`, `text` an `isOpen`
- `isOpen` can either be `true` or `false`
- When `isOpen` is true the component will be in open state.
- The component can be in two state `open` or `closed` based on `isOpen` prop.
- If the component is closed the icons on right hand side will point `downward` in open `upward` (You can use any other symbol or text to show that)
- If the accordian is closed the `text` property will not be visible.

![Counter](/img/react/accordian.png)
