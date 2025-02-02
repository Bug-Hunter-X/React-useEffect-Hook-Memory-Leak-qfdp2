```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    // Correct: Add cleanup function
    return () => {
      // Clean up any resources here
      // This is crucial to prevent memory leaks and other issues when the component unmounts
    };
  }, [count]); // Add dependency array to avoid unnecessary updates

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```