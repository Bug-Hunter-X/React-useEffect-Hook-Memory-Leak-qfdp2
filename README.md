# React useEffect Hook Memory Leak
This example demonstrates a common mistake in using the React `useEffect` hook: forgetting to include a cleanup function in the return statement.

In this component, the `useEffect` hook updates the document title whenever the `count` state changes.  However, if the component unmounts before the effect's cleanup function executes, the effect continues to run, and this could lead to memory leak if it references DOM elements or other resources that would be unavailable after unmounting.