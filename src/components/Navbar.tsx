import Link from 'next/link';

const Navbar = () => {
    const categories = [
        { title: 'All Categories', link: 'all-categories' },
        { title: 'Accessories', link: 'accessories' },
        { title: 'Smartphone', link: 'smartphone' },
        { title: 'Computer', link: 'computer' },
        { title: 'Gaming Equipment', link: 'gaming-equipment' },
        { title: 'TV & Monitors', link: 'tv-monitors' },
        { title: 'Headphones', link: 'headphones' },
        { title: 'Speaker', link: 'speaker' },
        { title: 'HOT DEALS', link: 'hot-deals' },
    ];

    return (
        <div
            style={{
                paddingBottom: 10,
                paddingTop: 10,
                fontSize: 10,
                boxShadow: '0 10px 12px rgba(0,0,0,0.24)',
            }}
            className="flex justify-between px-p-w"
        >
            {categories.map((category) => (
                <span
                    key={category}
                    className="font-normal tracking-wider cursor-pointer text-bg-primary"
                >
                    <Link href={`/categories/${category.link}`}>{category.title}</Link>
                </span>
            ))}
        </div>
    );
};

export default Navbar;
