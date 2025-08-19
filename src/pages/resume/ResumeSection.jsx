import ResumeWrapper from "./ResumeWrapper";

import ThemeProvider from "../../contexts/ThemeProvider";

export default function ResumeSection(props) {
  return (
    <ThemeProvider>
      <section>
        <ResumeWrapper />
      </section>
    </ThemeProvider>
  );
}
