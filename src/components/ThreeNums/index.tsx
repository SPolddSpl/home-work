import React, { useEffect, useState } from "react";
import { Alert, Input } from "rsuite";

function ThreeNums(props: any) {
  return (
    <>
      <Input
        onBlur={(e: any) => {
          let arr = e.target.value.split(",");
          const [a, b, c] = [...arr];
          let res = myFunc(parseInt(a), parseInt(b), parseInt(c));
          Alert.success(`Result is ${res}`)
        }}
      />
      
    </>
  );
}


function myFunc(a: number, b: number, c: number) {
  let min = a;
  let max = a;
  let arr = [a, b, c];

  if (b < min) {
    min = b;
  }
  if (c < min) {
    min = c;
  }
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }

  let mid = arr.filter((x) => x != min && x !== max);
  arr = [max, mid[0], min];
  return arr;
}

export default ThreeNums;
