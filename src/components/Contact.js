import { useEffect,useState } from "react";

function Contact() {
 


  return (

    <div>
      <Timer/>
      <h1>This is a contact Page</h1>
    </div>
  )
}

export default Contact;
function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This function will be called when the component mounts
    const interval = setInterval(() => {
      // Update the count by incrementing it
      setCount((prevCount) => prevCount + 1);
    }, 1000); // Update count every 1000 milliseconds (1 second)

    // Return a cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

