export type FormInputProps = {
  name: string;
  control: any;
  label: string;
};

export type FormOptionProps = {
  name: string;
  control: any;
  options: {
    label: string;
    value: string;
  }[];
};
