import * as ToggleGroup from "@radix-ui/react-toggle-group";
import "../styles.css";

const SelectResults = (props) => {
  const toggleChangeHandler = (results) => {
    props.onChangeFilter(results);
  };

  return (
    <ToggleGroup.Root
      className="ToggleGroup float-right"
      type="single"
      onValueChange={toggleChangeHandler}
      defaultValue="50"
      aria-label="Number of results"
    >
      <ToggleGroup.Item
        className="ToggleGroupItem"
        value="50"
        aria-label="50 results"
      >
        50
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className="ToggleGroupItem"
        value="100"
        aria-label="100 results"
      >
        100
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className="ToggleGroupItem"
        value="300"
        aria-label="All results"
      >
        All
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};


export default SelectResults;