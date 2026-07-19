import Link from 'next/link'
import type { Metadata } from 'next'
import { buildLanguageAlternates } from '@/lib/i18n-utils'
import { type Locale } from '@/i18n/routing'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.build-an-asmr-tower.wiki'
  const path = '/about'

  return {
    title: 'About Build an ASMR Tower Wiki - Codes, Guides & Building Tips',
    description: 'Learn about Build an ASMR Tower Wiki, a fan-made resource hub providing active codes, beginner guides, tier lists, and cozy building tips for ASMR Tower on Roblox.',
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: locale === 'en' ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`,
      siteName: 'Build an ASMR Tower Wiki',
      title: 'About Build an ASMR Tower Wiki',
      description: 'Learn about our mission to provide the best ASMR Tower codes, guides, and cozy building tips.',
      images: [
        {
          url: `${siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Build an ASMR Tower Wiki',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Build an ASMR Tower Wiki',
      description: 'Learn about our mission to provide the best ASMR Tower codes and guides.',
      images: [`${siteUrl}/og-image.jpg`],
    },
    alternates: buildLanguageAlternates(path, locale as Locale, siteUrl),
  }
}

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Build an ASMR Tower Wiki
          </h1>
          <p className="text-slate-300 text-lg mb-2">
            Your community-driven resource center for ASMR Tower
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Welcome to Build an ASMR Tower Wiki</h2>
            <p>
              Build an ASMR Tower Wiki is an <strong>unofficial, fan-made resource website</strong> dedicated to helping players
              enjoy ASMR Tower on Roblox. We are a community-driven platform that provides active codes, beginner guides,
              tower tier lists, upgrade tips, and cozy building strategies to enhance your relaxing gameplay experience.
            </p>
            <p>
              Whether you are a new player stacking your first blocks or a seasoned builder designing cozy skyscrapers,
              Build an ASMR Tower Wiki is here to support you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Our Mission</h2>
            <p>
              Our mission is simple: <strong>to empower ASMR Tower players with accurate, up-to-date information
              and useful guides</strong> that help them relax and build more efficiently. We strive to:
            </p>
            <ul>
              <li><strong>Provide reliable information:</strong> Keep our codes, guides, and tier lists updated with the latest game changes and new content</li>
              <li><strong>Build useful resources:</strong> Develop beginner walkthroughs, building strategies, and reward guides that help players make informed decisions</li>
              <li><strong>Foster community:</strong> Create a welcoming space where players can learn, share cozy designs, and grow together</li>
              <li><strong>Stay accessible:</strong> Keep all resources free and easy to use for players of all skill levels</li>
            </ul>

            <h2>Our Vision</h2>
            <p>
              We envision Build an ASMR Tower Wiki as the <strong>go-to destination</strong> for every ASMR Tower player seeking
              to improve their building and unwind. We want to be the resource that players trust and rely on, whether they need
              the latest codes, want to optimize their tower progression, or are looking for satisfying ASMR building inspiration.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Feature Card 1 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">🎁</div>
              <h3 className="text-xl font-semibold text-white mb-2">Active Codes</h3>
              <p className="text-slate-300">
                A regularly updated list of working ASMR Tower codes for free materials, decorations, and building bonuses.
                Redeem them early to speed up your first tower.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">📚</div>
              <h3 className="text-xl font-semibold text-white mb-2">Beginner Guides</h3>
              <p className="text-slate-300">
                Step-by-step walkthroughs covering the core building loop, early progression choices, and cozy design fundamentals
                for new ASMR Tower players.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">🏆</div>
              <h3 className="text-xl font-semibold text-white mb-2">Tier Lists</h3>
              <p className="text-slate-300">
                Ranked recommendations for the best towers, upgrades, and decoration choices so you can spend your resources
                where they matter most.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">🎮</div>
              <h3 className="text-xl font-semibold text-white mb-2">Gameplay Tips</h3>
              <p className="text-slate-300">
                Core mechanics, satisfying ASMR sound layers, obby climb strategies, and relaxing building techniques for
                players of every level.
              </p>
            </div>

            {/* Feature Card 5 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">🔄</div>
              <h3 className="text-xl font-semibold text-white mb-2">Update Tracking</h3>
              <p className="text-slate-300">
                Stay informed about new building content, limited events, system changes, and fresh ASMR themes added to
                the game.
              </p>
            </div>

            {/* Feature Card 6 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">🌍</div>
              <h3 className="text-xl font-semibold text-white mb-2">Multilingual Support</h3>
              <p className="text-slate-300">
                Content available in multiple languages including English, Spanish, Portuguese, and German,
                so players around the world can enjoy ASMR Tower.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Community-Driven</h2>
            <p>
              Build an ASMR Tower Wiki is built <strong>by the community, for the community</strong>. We welcome contributions,
              feedback, and suggestions from players of all skill levels. Our content is constantly evolving based on:
            </p>
            <ul>
              <li><strong>Player feedback:</strong> Your suggestions help us improve and expand our resources</li>
              <li><strong>Community discoveries:</strong> New building tricks, cozy design ideas, and pro tips shared by players</li>
              <li><strong>Game updates:</strong> We monitor official updates and adjust our guides and codes accordingly</li>
              <li><strong>Meta shifts:</strong> We track gameplay trends and update tier lists based on real player experiences</li>
            </ul>
            <p>
              <strong>Want to contribute?</strong> Whether you have discovered a new code, found a clever building strategy,
              or have suggestions for new guides, we would love to hear from you! Reach out through our contact channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>About the Team</h2>
            <p>
              Build an ASMR Tower Wiki is maintained by a dedicated team of passionate gamers and writers who love
              ASMR Tower as much as you do. We are players first, constantly testing building strategies, exploring
              cozy design ideas, and staying updated with the latest codes and content.
            </p>
            <p>
              Our team combines expertise in:
            </p>
            <ul>
              <li><strong>Game analysis:</strong> Deep understanding of ASMR Tower mechanics, upgrades, and progression</li>
              <li><strong>Web development:</strong> Building fast, user-friendly tools and interfaces</li>
              <li><strong>Content creation:</strong> Writing clear, helpful guides and tutorials</li>
              <li><strong>Community management:</strong> Listening to player feedback and fostering a positive environment</li>
            </ul>
            <p className="text-slate-400 italic text-sm">
              Project focus: Relax, stack, decorate, and unwind in ASMR Tower.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Important Disclaimer</h2>
            <p className="text-yellow-400/90">
              <strong>Build an ASMR Tower Wiki is an unofficial fan-made website.</strong> We are NOT affiliated with,
              endorsed by, or associated with the developers of ASMR Tower or any official entities.
            </p>
            <p>
              All game content, trademarks, characters, and assets are the property of their respective owners.
              We use game-related content under fair use principles for informational and educational purposes only.
            </p>
            <p>
              Build an ASMR Tower Wiki is a non-profit, community resource created by fans, for fans.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Get in Touch</h2>
            <p>
              We would love to hear from you! Whether you have questions, suggestions, found a bug, or just want to say hi:
            </p>
            <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2">General Inquiries</h3>
                <a href="mailto:contact@build-an-asmr-tower.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                  contact@build-an-asmr-tower.wiki
                </a>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2">Bug Reports</h3>
                <a href="mailto:support@build-an-asmr-tower.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                  support@build-an-asmr-tower.wiki
                </a>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2">Content Submissions</h3>
                <a href="mailto:contribute@build-an-asmr-tower.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                  contribute@build-an-asmr-tower.wiki
                </a>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2">Partnerships</h3>
                <a href="mailto:partnerships@build-an-asmr-tower.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                  partnerships@build-an-asmr-tower.wiki
                </a>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              <strong>Response Time:</strong> We aim to respond to all inquiries within 2-3 business days.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-y border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Community</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Stay updated with the latest codes, guides, and ASMR Tower news.
            Bookmark this site and check back regularly for new content!
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[hsl(var(--nav-theme-light))] text-white font-semibold hover:opacity-90 transition"
          >
            Explore Resources
          </Link>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Link href="/" className="text-[hsl(var(--nav-theme-light))] hover:underline">
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  )
}
