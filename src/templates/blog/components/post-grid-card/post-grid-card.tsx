type PostGridCardProps = {
    children: React.ReactNode;
}


export function PostGridCard({children}: PostGridCardProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-22 lg:grid-cols-3 gap-6 bg-gray-300">
            {children}
        </div>
    )
}