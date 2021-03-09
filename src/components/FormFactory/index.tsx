import React, { createRef, useState } from "react";
import { Button, Input, SelectPicker } from "rsuite";

function FormFactory(props: any) {
  return props.form.map((item: FormData) => {
    if (!item.children.length) {
      return (
        <div key={item.id} style={{ marginTop: "10px" }}>
          {FormInit(item)}
        </div>
      );
    } else {
      return (
        <div key={item.id} style={{ marginTop: "10px" }}>
          {FormInit(item)}
          <FormFactory form={item.children} />
        </div>
      );
    }
  });
}

function FormInit(formData: FormData) {
  switch (formData.class) {
    case "input":
      return InputInit(formData);
    case "select":
      return SelectInit(formData);
    case "button":
      return ButtonInit(formData);
  }

  return;
}

function InputInit(input: FormData) {
  if (input.type === "textarea") {
    return (
      <Input
        key={input.id}
        componentClass={input.type}
        rows={3}
        placeholder={`${input.text} of ${input.id}`}
      />
    );
  } else {
    return (
      <Input
        key={input.id}
        type={input.type}
        placeholder={`${input.text} of ${input.id}`}
      />
    );
  }
}

function ButtonInit(button: FormData) {
  return (
    <Button
      style={{ width: "100%" }}
      type={button.type}
      appearance="ghost"
      color="violet">
      {`${button.text} of ${button.id}`}
    </Button>
  );
}

function TextAreaInit(area: FormData) {}

function SelectInit(select: FormData) {
  return (
    <SelectPicker
      searchable={false}
      style={{ width: "100%" }}
      placeholder={`${select.text} of ${select.id}`}
      key={select.id}
      data={select.values}
    />
  );
}

export default FormFactory;

export interface FormData {
  id: string;
  class: string;
  type: string;
  text: string;
  children: FormData[];
  values: SelectOptions[];
}

interface SelectOptions {
  label: string;
  role: string;
  value: string;
}
