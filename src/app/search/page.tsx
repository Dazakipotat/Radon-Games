import Content from "./Content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search - Radon Games"
};

export default function Search(): JSX.Element {
  return (
    <div>
      <Content />
    </div>
  );
}