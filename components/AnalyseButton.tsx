"use client";

import { useFormState } from "react-dom";
import { Button } from "./ui/button";

const AnalyseButton = () => {
  const { Pending } = useFormState();

  return (
    <Button
      type="submit"
      disabled={Pending}
      className="px-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium "
    >
      {Pending ? "Analyzing..." : "Analyze"}
    </Button>
  );
};

export default AnalyseButton;
