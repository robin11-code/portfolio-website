export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5">
      <div className="max-w-md text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          404
        </p>
        <h1 className="mt-3 text-2xl font-semibold text-foreground">
          Page not found
        </h1>
        <p className="mt-4 text-muted-foreground">
          The page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Back to home
        </a>
      </div>
    </div>
  );
}
