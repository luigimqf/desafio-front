import { Drop, Option, OptionsWrapper, Wrapper } from "./style";
import { nacionalidades } from "utils/listaNacionalidades";
import {
  IoMdArrowDropup as Up,
  IoMdArrowDropdown as Down,
} from "react-icons/io";
import React, { useState } from "react";

interface IProps {
  identifier: string;
  value: string;
  options: string[];
  placeholder?: string;
  onChange: (key: string, value: string) => void;
}

export function Select({
  placeholder,
  identifier,
  value,
  options,
  onChange,
}: IProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper onClick={() => setIsOpen(!isOpen)}>
      <Drop disabled={true} value={value} placeholder={placeholder} />
      {isOpen ? <Up size={20} /> : <Down size={20} />}
      {isOpen && (
        <OptionsWrapper>
          {options.map((option) => {
            return (
              <Option key={option} onClick={() => onChange(identifier, option)}>
                {option}
              </Option>
            );
          })}
        </OptionsWrapper>
      )}
    </Wrapper>
  );
}
