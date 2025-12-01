import { BlogList } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";

export default function BlogListPage() {

    //rodando no servdor
    const sortedPosts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <BlogList 
            posts={sortedPosts}
        />
    )
}