export const ENVS = {
  SANITY_API_TOKEN:
    process.env.SANITY_API_TOKEN ||
    import.meta.env.SANITY_API_TOKEN ||
    undefined,
};
