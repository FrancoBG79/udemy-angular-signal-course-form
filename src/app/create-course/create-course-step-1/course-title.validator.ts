import { resource } from '@angular/core';
import { SchemaPath, validateAsync, validateHttp } from '@angular/forms/signals';
import {CourseListResponse} from "./step1.model";

export function courseTitleExists(path: SchemaPath<string>) {
  validateHttp<string, CourseListResponse>(path, {
    request: (ctx) => (ctx.value() ? '/api/courses' : undefined),
    onSuccess: (result, ctx) => {
      const found = result?.payload?.find(
        (c) => c.description.toLowerCase() === ctx.value()?.toLowerCase()
      );
      return found ? { kind: 'titleExists', message: 'This title is already being used.' } : null;
    },
    onError: () => null,
  });
}

export function courseTitleExistsAsync(path: SchemaPath<string>) {
  validateAsync<string, string, CourseListResponse>(path, {
    params: (ctx) => ctx.value() ?? '',
    factory: (params) => resource({
      params,
      loader: async ({ params: title }) => {
        if (!title) return undefined;
        const res = await fetch('/api/courses');
        return await res.json() as CourseListResponse;
      }
    }),
    onSuccess: (result, ctx) => {
      const found = result?.payload?.find(
        (c) => c.description.toLowerCase() === ctx.value()?.toLowerCase()
      );
      return found ? { kind: 'titleExists', message: 'This title is already being used.' } : null;
    },
    onError: () => null,
  });
}
















