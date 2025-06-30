export const ENVS = {
  SANITY_API_TOKEN:
    process.env.SANITY_API_TOKEN ||
    import.meta.env.SANITY_API_TOKEN ||
    undefined,
};

console.log("import.meta.env:", import.meta.env);
console.log("process.env:", process.env);
