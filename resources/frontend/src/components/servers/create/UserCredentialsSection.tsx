import type { ReactNode } from "react"

interface Props {
	children: ReactNode
}

function UserCredentialsSection ({ children }: Props) {
	return (
		<div className="relative">
			<span className="absolute left-5 bg-linear-to-b from-white to-neutral-100 rounded-lg text-neutral-600 text-lg">
				User credentials
			</span>
			<div className="p-7 mt-3.5 bg-neutral-100 border-2 border-neutral-200 rounded-lg">
				{children}
			</div>
		</div>
	)
}

export default UserCredentialsSection

