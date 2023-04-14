interface Props {
  className?: string
  p?: number
  children: any
}

const Container: React.FC<Props> = ({ className = '', p = 8, children }) => {
  return (
    <div
      className={`container p-${p} mx-auto xl:px-0 ${
        className ? className : ''
      }`}
    >
      {children}
    </div>
  )
}

export default Container
