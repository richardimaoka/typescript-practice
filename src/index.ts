type Property = "grid-template-columns" | "grid-template-rows";

interface A {
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
}

function propertyToField(propertyName: Property): keyof A {
  switch (propertyName) {
    case "grid-template-columns":
      return "gridTemplateColumns";
    case "grid-template-rows":
      return "gridTemplateRows";
  }
}

function main() {
  const a: A = { gridTemplateColumns: "auto auto 1fr" };
  const field = propertyToField("grid-template-columns");
  const result = a[field];

  console.log(`${JSON.stringify(a)} has a property "${field}" as '${result}'`);
}

main();
