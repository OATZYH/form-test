import React from "react";
import FormulationForm from "../components/FormulationForm";

const HomePage: React.FC = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Cosmetic AI Formulation</h1>
      <FormulationForm />
    </div>
  );
};

export default HomePage;
