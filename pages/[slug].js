import { MDXRemote } from "next-mdx-remote";
import { getFileBySlug, getFiles } from "@/lib/mdx";

export default function Post({ source, frontmatter }) {
    return <MDXRemote {...source}/>;
}

export async function getStaticProps({ params }) {
    const { source, frontmatter } = await getFileBySlug(params.slug);

    return {
        props: { source, frontmatter }
    };
}

export async function getStaticPaths() {
    const posts = await getFiles();
    const paths = posts.map((post) => ({
        params: {
            slug: post
        },
    }));

    return {
        paths,
        fallback: false,
    };
}
