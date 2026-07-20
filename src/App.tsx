export default function App() {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <section style={{ maxWidth: '720px', padding: '48px 24px', textAlign: 'center' }}>
        <p style={{ margin: '0 0 12px', color: '#64748b', fontSize: '14px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          Premium Website
        </p>
        <h1 style={{ margin: '0 0 16px', color: '#0f172a', fontSize: 'clamp(40px, 8vw, 72px)', lineHeight: 1 }}>
          Build something beautiful.
        </h1>
        <p style={{ margin: '0 auto', color: '#475569', fontSize: '18px', lineHeight: 1.7, maxWidth: '560px' }}>
          A modern React and Vite application ready for your next premium web experience.
        </p>
      </section>
    </main>
  )
}
