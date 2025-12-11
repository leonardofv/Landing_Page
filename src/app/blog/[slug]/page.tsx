import { PostPage } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

type BlogPostPageProps = {
    params: Promise<{
        slug: string; //nome da pasta
    }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {

    const { slug } = await params;
    // console.log(slug);
    const post = allPosts.find((post) => post.slug === slug);

    //post pode ser undefined
    if(!post) {
        return notFound();
    }

    return (
        <PostPage post={post} />
    )
}