import { AnimatePresence, motion } from 'framer-motion'
import { type ReactNode, useState } from 'react'

import { cn } from '@/lib/utils'

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    description: ReactNode
  }[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div
      className={cn(
        `
          grid grid-cols-1 py-10

          md:grid-cols-2
        `,
        className,
      )}
    >
      {items.map((item, idx) => (
        <motion.div
          animate={{
            x: [-20, 10, 0],
            opacity: [0, 0.7, 1],
            transition: { duration: 0.5, delay: 0.3 + idx * 0.1 },
          }}
          whileInView={{
            x: [-20, 10, 0],
            opacity: [0, 0.7, 1],
            transition: { duration: 0.5, delay: 0.3 + idx * 0.1 },
          }}
          key={idx}
          className="group relative block size-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(0)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className={`
                  absolute inset-0 z-10 block size-full rounded-lg bg-primary
                `}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export const Card = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        `
          relative z-50 h-full w-full overflow-hidden rounded-lg border
          bg-background shadow-xl
        `,
        className,
      )}
    >
      <div className="relative z-50">
        <div>{children}</div>
      </div>
    </div>
  )
}
export const CardTitle = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <h4 className={cn('mt-4 font-bold tracking-wide text-zinc-100', className)}>
      {children}
    </h4>
  )
}
export const CardDescription = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return <div className={cn(className)}>{children}</div>
}
