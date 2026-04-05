import { type ReactNode } from "react"

interface SkeletonProps {
    className: string,
    children?: ReactNode
}

interface SkeletonWrapperProps {
    className?: string,
    children: ReactNode
}

export function SkeletonWrapper ({ className, children }: SkeletonWrapperProps) {
    return (        
        <div role="status" className={className}>
            <span className="sr-only">Loading...</span>
            {children}
        </div>
    )
}

export function Skeleton ({ className, children, ...attribs }: SkeletonProps) {
    return (
        <div className={`rounded-lg bg-neutral-300 animate-pulse ${className}`} {...attribs} />
    )
}
