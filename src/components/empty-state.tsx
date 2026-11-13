type EmptyStateProps = {
  label: string
  title: string
  description: string
}

export function EmptyState({ label, title, description }: EmptyStateProps) {
  return (
    <section className="empty-state" aria-labelledby="empty-state-title">
      <div className="empty-state-mark" aria-hidden="true">/</div>
      <p className="eyebrow">{label}</p>
      <h2 id="empty-state-title">{title}</h2>
      <p>{description}</p>
    </section>
  )
}
