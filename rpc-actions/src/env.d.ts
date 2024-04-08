/// <reference path="../.astro/db-types.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "astro:actions" {
  type Actions = typeof import("./actions/index")["actions"];

  export const actions: Actions;
}