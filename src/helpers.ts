import { MutableRefObject } from "react";

export const age = function (birthday: Date) {
  const today = new Date();
  const birth = new Date(birthday);
  const birthYear = today.getFullYear() - birth.getFullYear();
  const month = today.getMonth() - birth.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birth.getDate()))
    return birthYear - 1;
  return birthYear;
};

export function Now(time: MutableRefObject<string>) {
  const now = new Date();

  const day = now.getDate().toString().padStart(2, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const year = now.getFullYear();
  const hour = now.getHours().toString().padStart(2, "0");
  const min = now.getMinutes().toString().padStart(2, "0");

  time.current = `${day}/${month}/${year}, ${hour}:${min}`;
}

export function clientName(fullName: string) {
  const words = fullName.split(" ");
  if (words.length > 0) {
    return words[0];
  } else {
    return fullName;
  }
}
