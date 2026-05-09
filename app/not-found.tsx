import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6 text-center">
      <div>
        <p className="label-uppercase text-[var(--color-fg-muted)]">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
          Página não encontrada
        </h1>
        <p className="mt-4 text-[var(--color-fg-muted)]">
          O conteúdo que você procura não existe (ou ainda não).
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#6c78dd]"
        >
          Voltar para a home
        </Link>
      </div>
    </section>
  );
}
