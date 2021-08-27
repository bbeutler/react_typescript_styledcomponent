declare const module: { hot: { accept: () => void } }

interface IconProps {
  color?: string
  className?: string
  size?: number
  onClick?: () => void
}

type FCProps = { className?: string }
type FC<T = {}> = React.FC<Readonly<T & FCProps>>

