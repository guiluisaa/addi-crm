import React, {
  lazy,
  Suspense,
  ReactElement,
  ComponentType,
  ComponentPropsWithRef,
} from 'react';

type Factory<T extends ComponentType<any>> = () => Promise<{
  default: T;
}>;

/**
 * Recive a _lazy_ fuction that return a assync component import.
 *
 * @example
 *
 * const SignInForm = toLoadable(() => import('./SignInForm.component.tsx'));
 *
 * <SignInForm />
 *
 * @param factory
 */
const toLoadable = <T extends ComponentType<any>>(factory: Factory<T>) => ({
  ...props
}: ComponentPropsWithRef<T>): ReactElement => {
  const Component = lazy(factory);

  return (
    <Suspense fallback={<>Loading...</>}>
      <Component {...props} />
    </Suspense>
  );
};

export default toLoadable;
