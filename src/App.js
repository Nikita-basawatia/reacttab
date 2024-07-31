import "./styles.css";
import Tab from "./components/Tab";
import Tabs from "./components/Tabs";

const App = () => {
  const tabsData = [
    {
      label: "Introduction",
      nestedTabs: [
        { label: "What is React.js", content: "Explanation of React.js" },
        { label: "Getting Started", content: "Getting started with React" },
      ],
    },
    {
      label: "The Instance",
      nestedTabs: [
        {
          label: "Creating an Instance",
          content: "Creating an instance in React",
        },
        { label: "Data and Methods", content: "Managing data and methods" },
        {
          label: "Instance Lifecycle Hooks",
          content: "Understanding lifecycle hooks",
        },
      ],
    },
    {
      label: "List Rendering",
      nestedTabs: [
        {
          label: "Mapping an Array to Elements",
          content: "Mapping arrays in React",
        },
      ],
    },
  ];

  return (
    <div className="App">
      <h1>Tabs</h1>
      <Tabs tabsData={tabsData} />
    </div>
  );
};

export default App;
