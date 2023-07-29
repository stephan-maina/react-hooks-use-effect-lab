const App = () => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      // This function is called when the component is mounted or when the count changes.
      fetch("/api/count")
        .then(response => response.json())
        .then(data => {
          setCount(data.count);
        });
    }, [count]);
  
    return (
      <div>
        <h1>The current count is {count}</h1>
      </div>
    );
  };