export function env(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Variável de ambiente ${name} não definida (veja .env.example)`);
  }
  return value;
}