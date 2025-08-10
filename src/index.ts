interface A {
  gridTemplateColumns: string;
}

function propertyToField(propertyName: string): keyof A {
  if (propertyName === "grid-template-columns") {
    return "gridTemplateColumns";
  } else {
    throw new Error(`propertyName: "${propertyName}" is invalid`);
  }
}

function main() {
  const a: A = { gridTemplateColumns: "auto auto 1fr" };
  const field = propertyToField("grid-template-columns");
  const result = a[field];

  console.log(JSON.stringify(a));
}

main();
