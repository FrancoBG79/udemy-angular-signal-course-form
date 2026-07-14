import { assertInInjectionContext, DestroyRef, effect, inject, WritableSignal } from '@angular/core';
import { FieldTree } from '@angular/forms/signals';

export function withDraft<T>(form: FieldTree<T>, model: WritableSignal<T>, key: string) {
  assertInInjectionContext(withDraft);

  // Inject DestroyRef from the current injection context
  const destroyRef = inject(DestroyRef);
  
  const saved = localStorage.getItem(key);
  if (saved) {
    model.set(JSON.parse(saved));
  }

  // Capture the effect reference
  const effectRef = effect(() => {
    const value = form().value();
    if (form().dirty()) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  });

  // Explicitly destroy the effect when the calling component/service is destroyed
  destroyRef.onDestroy(() => {
    effectRef.destroy();
  });
}
