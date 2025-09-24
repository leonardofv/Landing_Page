import Image from "next/image";
import Link from "next/link";


type Author = {
    name: string;
    avatar: string;
};

type PostCardProps = {
    slug: string;
    image: string;
    date: string;
    title: string;
    description: string;
    author: Author;
};


export function PostCard({ slug, image, date, title, description, author }: PostCardProps) {
    return (
        <Link href={`/blog/${slug}`} className="w-full max-w-2xl rounded-[12px] border-[1px] border-gray-400 bg-gray-600 overflow-hidden transition-all duration-300 hover:border-[1px] hover:border-blue-300">
            {/* Post content */}
            <div className="p-2 rounded-md overflow-hidden">
                {/* image card */}
                <div className="relative">
                    <div className="absolute top-0 right-0 px-3 py-1 bg-gray-600 backdrop-blur-sm rounded-bl-[10px]">
                        <span className="text-gray-300 text-body-xs">{date}
                        </span>
                    </div>
                    <Image 
                        src={image}
                        alt=""
                        width={288}
                        height={144}
                        className="w-full h-40 object-cover object-center rounded-t-[8px]"
                    />
                </div>
                {/* Post info */}
                <div className="px-2 mt-4 space-y-4">
                    <h2 className="text-gray-100 text-heading-sm line-clamp-3">{title}</h2>
                    <p className="text-gray-300 text-body-sm line-clamp-3">
                       {description} 
                    </p>
                    {/* Post footer */}
                    <div className="flex flex-center gap-3 border-t border-gray-400 py-4">
                        <div className="relative h-5 w-5 md:h-6 md:w-6 overflow-hidden rounded-full border-blue-200 border-[1px]">
                            <Image 
                                src={author.avatar}
                                alt=""
                                fill
                                className="object-cover rounded-md"
                            />
                        </div>
                        <span className="text-gray-300 text-body-sm">{author.name}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}