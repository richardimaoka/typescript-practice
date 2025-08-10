interface A {
  gridTemplateColumns: string;
}

function propertyToField(propertyName: string): string {
  if (propertyName === "grid-template-columns") {
    return "gridTemplateColumns";
  } else {
    throw new Error(`propertyName: "${propertyName}" is invalid`);
  }
}

function main() {
  const a: A = { gridTemplateColumns: "auto auto 1fr" };
  console.log(JSON.stringify(a));
}

main();
