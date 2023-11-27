import Link from 'next/link';

export default async function NotFoundPage() {
  return (
    <div className="container">
      <div className="grid">
        <h2>Infelizmente, não encontramos essa página.</h2>
        <p>Talvez o menu acima tenha o que você procura!</p>

        <Link href="/">Voltar à home</Link>
      </div>
    </div>
  );
}
