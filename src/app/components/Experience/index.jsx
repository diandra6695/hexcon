"use client";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import Title from "../Utilities/Title";
import List from "../Utilities/List";

const Experience = () => {
  return (
    <section className="max-w-4xl mx-auto px-7 lg:px-0">
      <div className="flex gap-2">
        <PaperPlaneTilt size={32} />
        <Title text="Pengalaman" />
      </div>
      <List />
    </section>
  );
};

export default Experience;
