declare module "@voyagerx/react-dropdown" {
  import * as React from "react";
  export interface Option<T = string> {
    label: React.ReactNode;
    value: T;
    className?: string;
  }
  export interface Group {
    type: "group";
    name: string;
    items: Option[];
  }

  export interface Separator {
    type: "separator";
  }
  export interface ReactDropdownProps {
    options: (Group | Option | Separator | string)[];
    multiSelect: boolean;
    baseClassName?: string;
    className?: string;
    controlClassName?: string;
    placeholderClassName?: string;
    menuClassName?: string;
    arrowClassName?: string;
    disabled?: boolean;
    arrowClosed?: React.ReactNode,
    arrowOpen?: React.ReactNode,
    onChange?: (arg: Option) => void;
    onFocus?: (arg: boolean) => void;
    value?: Option | string;
    placeholder?: String;
  }

  class ReactDropdown extends React.Component<ReactDropdownProps> {
  }

  export default ReactDropdown;
}
