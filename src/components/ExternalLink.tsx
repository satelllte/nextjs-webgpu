export const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  children,
  className,
}) => {
  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={href}
      className={`text-blue-600 hover:underline ${className}`}>
      {children}
    </a>
  )
}

ExternalLink.defaultProps = {
  className: '',
}

interface ExternalLinkProps {
  href: string,
  children: React.ReactNode
  className?: string,
}
