import data from "../data.json";

// 🏷️ Définition d'une interface pour un Post
interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
    createdAt: string;
    updatedAt?: string; // Optionnel pour éviter les erreurs
}

class PostService {
    private posts: Post[];

    constructor() {
        this.posts = [...(data.posts as Post[])]; // ⚠️ Type assertion pour éviter l'erreur
    }

    // 📄 Récupérer tous les posts
    getAllPosts(): Post[] {
        return this.posts;
    }

    // 🔍 Récupérer un post par son ID
    getPostById(id: number): Post | undefined {
        return this.posts.find((post) => post.id == id);
    }

    // ➕ Créer un nouveau post
    createPost(postData: Omit<Post, "id" | "createdAt" | "updatedAt">): Post {
        const newPost: Post = {
            id: this.posts.length + 1,
            title: postData.title,
            content: postData.content,
            author: postData.author,
            createdAt: new Date().toISOString(),
        };
        this.posts.push(newPost);
        return newPost;
    }

    // 🔄 Mettre à jour un post
    updatePost(id: number, postData: Partial<Omit<Post, "id" | "createdAt">>): Post | null {
        const index = this.posts.findIndex((post) => post.id === id);
        if (index === -1) return null;

        this.posts[index] = {
            ...this.posts[index],
            ...postData,
            updatedAt: new Date().toISOString(),
        };

        return this.posts[index];
    }
}

export default PostService;
