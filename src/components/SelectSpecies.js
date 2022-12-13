import React from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import "../styles.css";

const SelectSpecies = (props) => {
  const dropdownChangeHandler = (species) => {
    props.onChangeFilter(species);
  };

  return (
    <Select.Root onValueChange={dropdownChangeHandler}>
      <Select.Trigger className="SelectTrigger" aria-label="Food">
        <Select.Value placeholder="Select a species..." />
        <Select.Icon className="SelectIcon">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="SelectContent">
          <Select.ScrollUpButton className="SelectScrollButton">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="SelectViewport">
            <SelectItem value="">
              All
            </SelectItem>
            {props.species?.map((species) => (
              // maps through the species array and creates a dropdown item for each species
              <SelectItem key={species.id} value={species.species}>
                {species.species}
              </SelectItem>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton className="SelectScrollButton">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

// defines the appearance of the selected dropdown items
const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classnames("SelectItem", className)}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="SelectItemIndicator">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

export default SelectSpecies;
