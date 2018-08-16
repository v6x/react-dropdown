declare module "react-dropdown" {
  import * as React from "react";
  export interface Option {
    label: string;
    value: string;
    className?: string;
  }
  export interface Group {
    type: "group";
    name: string;
    items: Option[];
  }
  export interface ReactDropdownProps {
    options: (Group | Option | string)[];
    baseClassName?: string;
    className?: string;
    controlClassName?: string;
    placeholderClassName?: string;
    menuClassName?: string;
    arrowClassName?: string;
    disabled?: boolean;
    onChange?: (arg: Option) => void;
    onFocus?: (arg: boolean) => void;
    value?: Option | string;
    placeholder?: String;
  }

  class ReactDropdown extends React.Component<ReactDropdownProps> {
  }

  export default ReactDropdown;
}