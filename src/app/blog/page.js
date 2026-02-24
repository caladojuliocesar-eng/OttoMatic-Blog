import { client } from '@/sanity/lib/client'
import { ALL_POSTS_QUERY } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
    title: 'Blog | Ottomatic Antigravity',
    description: 'Leia nossos últimos artigos e novidades.',
}

export default async function BlogIndexPage() {
    const posts = await client.fetch(ALL_POSTS_QUERY)

    return (
        <main className="container mx-auto px-4 py-16 max-w-5xl">
            <div className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Nosso Blog</h1>
                <p className="text-lg text-muted-foreground">Ideias, tutoriais e novidades do nosso universo.</p>
            </div>

            {posts.length === 0 ? (
                <div className="text-center py-20 bg-muted/30 rounded-2xl border border-dashed">
                    <h2 className="text-2xl font-semibold mb-2">Nenhum artigo publicado ainda</h2>
                    <p className="text-muted-foreground">Acesse o painel do Sanity e crie o seu primeiro post!</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link key={post._id} href={`/blog/${post.slug.current}/`} className="group block">
                            <article className="h-full flex flex-col bg-card rounded-2xl border overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                {post.mainImage ? (
                                    <div className="relative w-full h-48 overflow-hidden bg-muted">
                                        <Image
                                            src={urlFor(post.mainImage).width(600).height(400).url()}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-full h-48 bg-muted flex items-center justify-center">
                                        <span className="text-muted-foreground">Sem Capa</span>
                                    </div>
                                )}
                                <div className="p-6 flex-grow flex flex-col">
                                    {post.publishedAt && (
                                        <time className="text-sm text-primary font-medium mb-3 block">
                                            {new Date(post.publishedAt).toLocaleDateString('pt-BR', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric'
                                            })}
                                        </time>
                                    )}
                                    <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h2>
                                    {post.excerpt && (
                                        <p className="text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
                                    )}
                                    <div className="mt-auto pt-4 flex items-center text-sm font-semibold text-primary">
                                        Ler artigo <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            )}
        </main>
    )
}
