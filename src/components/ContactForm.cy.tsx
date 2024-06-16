import React from "react";
import { ContactForm } from "./ContactForm";

describe("Test Contact form", () => {
  it("1. renders", () => {
    cy.mount(<ContactForm />);
  });

  it("2. check submit khi empty data", () => {
    cy.mount(<ContactForm />);
    cy.get(".group").click();

    cy.get(":nth-child(1) > .text-red-500").should(
      "have.text",
      "Name is required!",
    );
    cy.get(":nth-child(2) > .text-red-500").should(
      "have.text",
      "Email is required!",
    );
    cy.get(":nth-child(3) > .text-red-500").should(
      "have.text",
      "Subject is required!",
    );
    cy.get(":nth-child(4) > .text-red-500").should(
      "have.text",
      "Message is required!",
    );
  });

  it("3. check submit khi data không hợp lệ", () => {
    cy.mount(<ContactForm />);
    cy.get(":nth-child(1) > .w-full").type("a");
    cy.get(":nth-child(2) > .w-full").type("a");
    cy.get(":nth-child(3) > .w-full").type("a");
    cy.get(":nth-child(4) > .w-full").type("a");

    cy.get(".group").click();

    cy.get(":nth-child(2) > .text-red-500").should(
      "have.text",
      "Email is invalid!",
    );
  });

  it.only("4. validate khi typing", () => {
    cy.mount(<ContactForm />);
    cy.get(":nth-child(1) > .w-full").type("a");
    cy.get(":nth-child(1) > .w-full").clear();
    cy.get("body").click();

    cy.get(":nth-child(1) > .text-red-500").should(
      "have.text",
      "Name is required!",
    );
  });
});
