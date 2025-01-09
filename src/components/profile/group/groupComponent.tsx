import { GroupList } from './groupLists';

export default function GroupComponent() {
    const groups = [
        {
            id: 1,
            name: "JavaScript Developer",
            category: "Tecnologia, Informação e Internet",
            memberCount: "792,673",
            logoUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=64&h=64&fit=crop&auto=format"
        },
        {
            id: 2,
            name: "Php Language",
            category: "Tecnologia, Informação e Internet",
            memberCount: "792,673",
            logoUrl: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=64&h=64&fit=crop&auto=format"
        },
        {
            id: 3,
            name: "Flutter Language",
            category: "Tecnologia, Informação e Internet",
            memberCount: "792,673",
            logoUrl: "https://images.unsplash.com/photo-1635010920842-a2a5c5042581?w=64&h=64&fit=crop&auto=format"
        },
        {
            id: 4,
            name: "Python Language",
            category: "Tecnologia, Informação e Internet",
            memberCount: "792,673",
            logoUrl: "https://images.unsplash.com/photo-1649180556628-9ba704115795?w=64&h=64&fit=crop&auto=format"
        },
        {
            id: 5,
            name: "C# Language",
            category: "Tecnologia, Informação e Internet",
            memberCount: "792,673",
            logoUrl: "https://images.unsplash.com/photo-1592609931095-54a2168ae893?w=64&h=64&fit=crop&auto=format"
        }
    ];

    return (
        <div className="w-[90vw] flex flex-col md:w-[clamp(350px,48.4rem,1468px)] 2xl:w-[clamp(350px,60rem,1668px)] max-w-4xl">
            <GroupList groups={groups} />
        </div>
    )
}
