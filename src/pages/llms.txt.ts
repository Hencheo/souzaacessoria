// Resumo público do site para assistentes de IA (padrão llms.txt).
// Gerado no build a partir das mesmas fontes do site: nada aqui é oculto.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { AREAS, SITE } from '../site.config';

export const GET: APIRoute = async () => {
  const servicos = (await getCollection('areas')).sort((a, b) => a.data.ordem - b.data.ordem);
  const posts = (await getCollection('blog', ({ data }) => !data.rascunho)).sort(
    (a, b) => b.data.data.valueOf() - a.data.data.valueOf(),
  );
  const url = (p: string) => `${SITE.url}${p}`;

  const linhas: string[] = [
    `# ${SITE.escritorio}`,
    '',
    `> ${SITE.advogada}, advogada inscrita na ${SITE.oab}. Atua em Direito Previdenciário (INSS) e Direito Civil em ${SITE.cidade}-${SITE.uf} e região (${SITE.regiao.join(', ')}). Atendimento com hora marcada, presencial ou por videochamada.`,
    '',
    `- Contato: WhatsApp e telefone ${SITE.telefone}`,
    `- Horário: ${SITE.horario}`,
    `- Sobre a advogada: ${url('/sobre/')}`,
    `- Agendamento: ${url('/contato/')}`,
    '',
  ];

  for (const [chave, info] of Object.entries(AREAS)) {
    linhas.push(`## ${info.titulo}`, '', `- [${info.titulo}](${url(info.rota)}): ${info.resumo}`);
    for (const s of servicos.filter((s) => s.data.area === chave)) {
      linhas.push(`- [${s.data.titulo}](${url(`${info.rota}${s.id}/`)}): ${s.data.resumo}`);
    }
    linhas.push('');
  }

  if (posts.length) {
    linhas.push('## Artigos', '');
    for (const p of posts) linhas.push(`- [${p.data.titulo}](${url(`/blog/${p.id}/`)}): ${p.data.descricao}`);
    linhas.push('');
  }

  linhas.push(
    '## Observações',
    '',
    '- Conteúdo de caráter informativo, conforme o Código de Ética e Disciplina da OAB e o Provimento 205/2021. Não substitui a análise individual de cada caso.',
  );

  return new Response(linhas.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
